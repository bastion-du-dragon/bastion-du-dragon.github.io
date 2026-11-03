-- ============================================================================
-- Bastion du Dragon : mode en ligne (comptes, amis, classement, salons, duel)
-- À coller dans Supabase : menu « SQL Editor » > « New query » > coller > « Run ».
-- Peut être relancé sans danger (tout est créé « si absent » ou remplacé).
-- ============================================================================

-- 1) Profils (un par compte) ------------------------------------------------
create table if not exists public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  pseudo     text not null,
  code       text not null unique,
  score      jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint profiles_pseudo_len check (char_length(pseudo) between 3 and 14)
);
create unique index if not exists profiles_pseudo_ci on public.profiles (lower(pseudo));

-- 2) Amis ---------------------------------------------------------------------
create table if not exists public.friends (
  a          uuid not null references public.profiles(id) on delete cascade,  -- celui qui a demandé
  b          uuid not null references public.profiles(id) on delete cascade,  -- celui qui reçoit
  st         text not null default 'pending' check (st in ('pending','ok')),
  created_at timestamptz not null default now(),
  primary key (a, b)
);

-- 3) Salons (coopération / duel) -----------------------------------------------
create table if not exists public.rooms (
  code        text primary key,
  mode        text not null check (mode in ('coop','duel')),
  host        uuid not null references public.profiles(id) on delete cascade,
  guest       uuid references public.profiles(id) on delete set null,
  host_ready  boolean not null default false,
  guest_ready boolean not null default false,
  status      text not null default 'lobby' check (status in ('lobby','playing')),
  seed        integer not null,
  t0          bigint,
  created_at  timestamptz not null default now()
);

-- 4) Sécurité : chacun ne lit que ce qui le concerne ------------------------------
alter table public.profiles enable row level security;
alter table public.friends  enable row level security;
alter table public.rooms    enable row level security;

drop policy if exists profiles_read   on public.profiles;
drop policy if exists profiles_update on public.profiles;
drop policy if exists friends_read    on public.friends;
drop policy if exists rooms_read      on public.rooms;

-- Les joueurs connectés voient les pseudos / codes / scores (classement, recherche d'amis). Pas d'e-mail ici.
create policy profiles_read   on public.profiles for select to authenticated using (true);
-- On ne peut modifier que son propre score (et rien d'autre, voir les droits plus bas).
create policy profiles_update on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
create policy friends_read    on public.friends  for select to authenticated using (a = auth.uid() or b = auth.uid());
create policy rooms_read      on public.rooms    for select to authenticated using (host = auth.uid() or guest = auth.uid());

revoke all on public.profiles, public.friends, public.rooms from anon, authenticated;
grant select on public.profiles, public.friends, public.rooms to authenticated;
grant update (score) on public.profiles to authenticated;

-- 5) Création automatique du profil à l'inscription ---------------------------------
create or replace function public.gen_code() returns text
language plpgsql volatile as $$
declare c text; chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; i int;
begin
  loop
    c := '';
    for i in 1..6 loop c := c || substr(chars, 1 + floor(random() * length(chars))::int, 1); end loop;
    exit when not exists (select 1 from public.profiles where code = c);
  end loop;
  return c;
end $$;

create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare p text := btrim(coalesce(new.raw_user_meta_data ->> 'pseudo', ''));
begin
  insert into public.profiles (id, pseudo, code) values (new.id, p, public.gen_code());
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- 6) Fonctions appelées par le jeu --------------------------------------------------
create or replace function public.pseudo_free(p text) returns boolean
language sql stable security definer set search_path = public as $$
  select not exists (select 1 from public.profiles where lower(pseudo) = lower(btrim(p)));
$$;

create or replace function public.now_ms() returns bigint
language sql stable as $$ select (extract(epoch from clock_timestamp()) * 1000)::bigint; $$;

create or replace function public.add_friend(q text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); t public.profiles; ex public.friends;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  q := btrim(coalesce(q, ''));
  if q = '' then return jsonb_build_object('err', 'Entre un code ami ou un pseudo.'); end if;
  select * into t from public.profiles where code = upper(q) or lower(pseudo) = lower(q) limit 1;
  if not found then return jsonb_build_object('err', 'Joueur introuvable.'); end if;
  if t.id = me then return jsonb_build_object('err', 'C''est toi !'); end if;
  select * into ex from public.friends where (a = me and b = t.id) or (a = t.id and b = me);
  if found then
    if ex.st = 'ok' then return jsonb_build_object('err', 'Vous êtes déjà amis.'); end if;
    if ex.a = t.id then
      update public.friends set st = 'ok' where a = ex.a and b = ex.b;
      return jsonb_build_object('ok', true, 'msg', t.pseudo || ' est maintenant ton ami.');
    end if;
    return jsonb_build_object('err', 'Demande déjà envoyée.');
  end if;
  insert into public.friends (a, b, st) values (me, t.id, 'pending');
  return jsonb_build_object('ok', true, 'msg', 'Demande envoyée à ' || t.pseudo || '.');
end $$;

create or replace function public.answer_friend(other uuid, yes boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  if yes then update public.friends set st = 'ok' where a = other and b = auth.uid() and st = 'pending';
  else delete from public.friends where a = other and b = auth.uid() and st = 'pending'; end if;
end $$;

create or replace function public.remove_friend(other uuid) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  delete from public.friends where (a = auth.uid() and b = other) or (a = other and b = auth.uid());
end $$;

create or replace function public.leave_room() returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  delete from public.rooms where host = auth.uid();
  update public.rooms set guest = null, guest_ready = false, status = 'lobby', t0 = null where guest = auth.uid();
end $$;

create or replace function public.create_room(m text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); c text; chars text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; i int;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  if m not in ('coop', 'duel') then return jsonb_build_object('err', 'Mode inconnu.'); end if;
  delete from public.rooms where created_at < now() - interval '6 hours';
  perform public.leave_room();
  loop
    c := '';
    for i in 1..6 loop c := c || substr(chars, 1 + floor(random() * length(chars))::int, 1); end loop;
    exit when not exists (select 1 from public.rooms where code = c);
  end loop;
  insert into public.rooms (code, mode, host, seed) values (c, m, me, 1 + floor(random() * 2147483646)::int);
  return jsonb_build_object('ok', true, 'code', c);
end $$;

create or replace function public.join_room(c text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); r public.rooms;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  c := upper(btrim(coalesce(c, '')));
  select * into r from public.rooms where code = c for update;
  if not found then return jsonb_build_object('err', 'Salon introuvable.'); end if;
  if r.host = me or r.guest = me then return jsonb_build_object('ok', true); end if;
  if r.guest is not null then return jsonb_build_object('err', 'Ce salon est complet.'); end if;
  if r.status <> 'lobby' then return jsonb_build_object('err', 'La partie a déjà commencé.'); end if;
  perform public.leave_room();
  update public.rooms set guest = me, guest_ready = false where code = c;
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.set_ready(v boolean) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  update public.rooms set host_ready = v where host = auth.uid();
  update public.rooms set guest_ready = v where guest = auth.uid();
end $$;

create or replace function public.start_room() returns jsonb
language plpgsql security definer set search_path = public as $$
declare r public.rooms;
begin
  select * into r from public.rooms where host = auth.uid() for update;
  if not found or r.guest is null or not r.host_ready or not r.guest_ready or r.status <> 'lobby' then
    return jsonb_build_object('err', 'Les deux joueurs doivent être prêts.');
  end if;
  update public.rooms set status = 'playing', t0 = public.now_ms() + 4000 where code = r.code;
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.end_room() returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then return; end if;
  update public.rooms set status = 'lobby', host_ready = false, guest_ready = false, t0 = null
   where status = 'playing' and (host = auth.uid() or guest = auth.uid());
end $$;

-- Les visiteurs non connectés ne peuvent appeler que pseudo_free et now_ms.
revoke execute on all functions in schema public from public, anon, authenticated;
grant execute on function public.pseudo_free(text), public.now_ms() to anon, authenticated;
grant execute on function
  public.add_friend(text), public.answer_friend(uuid, boolean), public.remove_friend(uuid),
  public.create_room(text), public.join_room(text), public.set_ready(boolean),
  public.start_room(), public.end_room(), public.leave_room()
  to authenticated;

-- 7) Mises à jour en direct (salons et demandes d'amis) -----------------------------
do $$ begin
  begin alter publication supabase_realtime add table public.rooms;   exception when others then null; end;
  begin alter publication supabase_realtime add table public.friends; exception when others then null; end;
end $$;
