-- 8) Matchmaking : « Partie rapide » avec un joueur aléatoire (avec validation des deux joueurs) ----
alter table public.rooms add column if not exists public boolean not null default false;

create or replace function public.quick_match(m text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); r public.rooms; c jsonb;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  if m not in ('coop', 'duel') then return jsonb_build_object('err', 'Mode inconnu.'); end if;
  perform public.leave_room();
  select * into r from public.rooms
   where public and mode = m and guest is null and status = 'lobby' and host <> me
     and created_at > now() - interval '100 seconds'
   order by created_at limit 1 for update skip locked;
  if found then
    update public.rooms set guest = me, host_ready = false, guest_ready = false where code = r.code;
    return jsonb_build_object('ok', true, 'code', r.code, 'found', true);
  end if;
  c := public.create_room(m);
  if c ? 'err' then return c; end if;
  update public.rooms set public = true where code = c->>'code';
  return jsonb_build_object('ok', true, 'code', c->>'code', 'found', false);
end $$;

-- Dans une partie rapide, la partie démarre toute seule quand les deux joueurs ont accepté.
create or replace function public.set_ready(v boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  update public.rooms set host_ready = v where host = auth.uid();
  update public.rooms set guest_ready = v where guest = auth.uid();
  update public.rooms set status = 'playing', t0 = public.now_ms() + 4000
   where (host = auth.uid() or guest = auth.uid()) and public and guest is not null
     and host_ready and guest_ready and status = 'lobby';
end $$;

-- Refus : l'autre joueur continue sa recherche (s'il était invité, il devient l'hôte du salon).
create or replace function public.mm_decline() returns void
language plpgsql security definer set search_path = public as $$
declare r public.rooms;
begin
  if auth.uid() is null then return; end if;
  select * into r from public.rooms
   where (host = auth.uid() or guest = auth.uid()) and public and status = 'lobby' for update;
  if not found then return; end if;
  if r.guest = auth.uid() then
    update public.rooms set guest = null, host_ready = false, guest_ready = false, created_at = now() where code = r.code;
  elsif r.guest is not null then
    update public.rooms set host = r.guest, guest = null, host_ready = false, guest_ready = false, created_at = now() where code = r.code;
  else
    delete from public.rooms where code = r.code;
  end if;
end $$;

-- Si un joueur a accepté et que l'autre ne répond pas, on retire l'autre.
create or replace function public.mm_expire() returns void
language plpgsql security definer set search_path = public as $$
declare r public.rooms;
begin
  if auth.uid() is null then return; end if;
  select * into r from public.rooms
   where (host = auth.uid() or guest = auth.uid()) and public and status = 'lobby' and guest is not null for update;
  if not found then return; end if;
  if r.host = auth.uid() and r.host_ready and not r.guest_ready then
    update public.rooms set guest = null, host_ready = false, guest_ready = false, created_at = now() where code = r.code;
  elsif r.guest = auth.uid() and r.guest_ready and not r.host_ready then
    update public.rooms set host = auth.uid(), guest = null, host_ready = false, guest_ready = false, created_at = now() where code = r.code;
  end if;
end $$;

revoke execute on function public.quick_match(text), public.mm_decline(), public.mm_expire() from public, anon;
grant execute on function public.quick_match(text), public.mm_decline(), public.mm_expire() to authenticated;
grant execute on function public.set_ready(boolean) to authenticated;
