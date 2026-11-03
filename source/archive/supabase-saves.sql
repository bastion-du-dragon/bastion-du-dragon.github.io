-- Sauvegarde de la progression sur le compte (à exécuter une fois dans Supabase > SQL Editor > Run)
create table if not exists public.saves (
  id uuid primary key references public.profiles(id) on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.saves enable row level security;
drop policy if exists saves_read   on public.saves;
drop policy if exists saves_insert on public.saves;
drop policy if exists saves_update on public.saves;
create policy saves_read   on public.saves for select to authenticated using (id = auth.uid());
create policy saves_insert on public.saves for insert to authenticated with check (id = auth.uid());
create policy saves_update on public.saves for update to authenticated using (id = auth.uid()) with check (id = auth.uid());
