-- Invitations d'amis dans un salon (à exécuter une fois dans Supabase > SQL Editor > Run)
create table if not exists public.invites (
  from_id uuid not null references public.profiles(id) on delete cascade,
  to_id   uuid not null references public.profiles(id) on delete cascade,
  code    text not null,
  mode    text not null,
  created_at timestamptz not null default now(),
  primary key (from_id, to_id)
);
alter table public.invites enable row level security;
drop policy if exists invites_read on public.invites;
create policy invites_read on public.invites for select to authenticated using (to_id = auth.uid() or from_id = auth.uid());

create or replace function public.invite_friend(other uuid) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); r public.rooms;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  if not exists (select 1 from public.friends where st = 'ok' and ((a = me and b = other) or (a = other and b = me))) then
    return jsonb_build_object('err', 'Ce joueur n''est pas dans tes amis.'); end if;
  select * into r from public.rooms where host = me or guest = me limit 1;
  if not found or r.status <> 'lobby' then return jsonb_build_object('err', 'Crée d''abord un salon.'); end if;
  if r.guest is not null then return jsonb_build_object('err', 'Ton salon est déjà complet.'); end if;
  delete from public.invites where created_at < now() - interval '15 minutes';
  insert into public.invites (from_id, to_id, code, mode) values (me, other, r.code, r.mode)
    on conflict (from_id, to_id) do update set code = excluded.code, mode = excluded.mode, created_at = now();
  return jsonb_build_object('ok', true);
end $$;

create or replace function public.accept_invite(f uuid) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); i public.invites;
begin
  if me is null then return jsonb_build_object('err', 'Non connecté.'); end if;
  select * into i from public.invites where from_id = f and to_id = me and created_at > now() - interval '10 minutes';
  delete from public.invites where from_id = f and to_id = me;
  if not found then return jsonb_build_object('err', 'Invitation expirée.'); end if;
  return public.join_room(i.code);
end $$;

create or replace function public.decline_invite(f uuid) returns void
language plpgsql security definer set search_path = public as $$
begin delete from public.invites where from_id = f and to_id = auth.uid(); end $$;

grant execute on function public.invite_friend(uuid), public.accept_invite(uuid), public.decline_invite(uuid) to authenticated;

do $$ begin
  begin alter publication supabase_realtime add table public.invites; exception when others then null; end;
end $$;
