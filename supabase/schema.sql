create table if not exists public.teacher_content (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  body text not null default '',
  category text,
  sort_order integer not null default 0,
  published_at timestamptz default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.teacher_content enable row level security;

create policy "authenticated users can read teacher content"
on public.teacher_content
for select
to authenticated
using (true);

revoke all on table public.teacher_content from anon;
grant select on table public.teacher_content to authenticated;
