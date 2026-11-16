-- Admin actions for team applications (run once if the table already exists).
-- Statuses: pending = на рассмотрении, accepted = принято, rejected = отказано.

alter table public.team_applications alter column status set default 'pending';

-- Older rows were created with status "new"; treat them as pending.
update public.team_applications
set status = 'pending'
where status is null or status = 'new';

-- Only signed-in administrators may review applications.
drop policy if exists "team_applications_update_admin" on public.team_applications;
create policy "team_applications_update_admin"
  on public.team_applications
  for update
  to authenticated
  using (true)
  with check (true);

-- Only signed-in administrators may delete applications.
drop policy if exists "team_applications_delete_admin" on public.team_applications;
create policy "team_applications_delete_admin"
  on public.team_applications
  for delete
  to authenticated
  using (true);

grant select, update, delete on public.team_applications to authenticated;
