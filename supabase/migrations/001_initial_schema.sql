create extension if not exists "pgcrypto";

create table if not exists public.site_settings (
  id uuid primary key default gen_random_uuid(),
  display_name text not null default 'Dowei Timi Ebike',
  brand_name text not null default 'DigitalDT',
  professional_intro text not null default 'I design and build digital products that solve real business problems.',
  biography text,
  services jsonb default '[]'::jsonb,
  contact_email text,
  contact_phone text,
  location text,
  social_links jsonb default '[]'::jsonb,
  profile_image_path text,
  resume_path text,
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  summary text not null,
  content jsonb not null default '{}'::jsonb,
  category text not null default 'Web Development',
  technologies text[] not null default '{}',
  cover_image_path text,
  gallery jsonb not null default '[]'::jsonb,
  live_url text,
  repository_url text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  is_featured boolean not null default false,
  sort_order integer not null default 0,
  seo_title text,
  seo_description text,
  social_image_path text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_projects_status_order on public.projects(status, sort_order desc);
create index if not exists idx_projects_slug on public.projects(slug);
create index if not exists idx_projects_featured on public.projects(is_featured);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at_site_settings
before update on public.site_settings
for each row execute function public.set_updated_at();

create trigger set_updated_at_projects
before update on public.projects
for each row execute function public.set_updated_at();

alter table public.site_settings enable row level security;
alter table public.projects enable row level security;

create policy "Anyone can read published projects"
on public.projects
for select
using (status = 'published');

create policy "Authenticated users can manage all projects"
on public.projects
for all
using (auth.uid() is not null)
with check (auth.uid() is not null);

create policy "Authenticated users can manage site settings"
on public.site_settings
for all
using (auth.uid() is not null)
with check (auth.uid() is not null);

create policy "Anyone can read public site settings"
on public.site_settings
for select
using (true);

-- The production workflow should create a private storage bucket for project assets and
-- enforce owner-only policies there. This migration intentionally leaves bucket creation
-- to the Supabase dashboard or a controlled server-side setup step.
