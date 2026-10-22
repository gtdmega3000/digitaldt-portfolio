# Supabase Setup Guide

## Environment variables
Create a `.env.local` file with:

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000

## Allowed setup steps
1. Create a Supabase project in the dashboard.
2. Add the connection values above.
3. Run the SQL migration in `supabase/migrations/001_initial_schema.sql`.
4. Create the `projects` and `site_settings` tables.
5. Configure storage bucket `portfolio` with public access disabled for private content.
6. Add RLS policies for authenticated owner access.
7. Create an owner user through the secure admin flow.
8. Set up the real domain in Vercel and production environment variables.

## Owner account recovery
- Keep the admin email in a secure password manager.
- Use Supabase Auth recovery flow to reset the owner account if needed.
- Do not create public admin sign-up routes.
- Maintain a secure backup of the project URL and database credentials.

## Production deployment
- Deploy to Vercel.
- Link the GitHub repo.
- Add environment variables in project settings.
- Ensure the domain is set in `NEXT_PUBLIC_SITE_URL` and the site metadata.
