# DigitalDT Portfolio Platform

A premium portfolio website and private CMS for Dowei Timi Ebike, operating under the DigitalDT brand.

## Tech Stack
- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Supabase Postgres, Auth, Storage, RLS
- Zod validation and secure server patterns

## Local setup
1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env.local` and fill in your Supabase values.
3. Run the SQL migration in `supabase/migrations/001_initial_schema.sql` from the Supabase SQL editor.
4. Start the app:
   npm run dev

## Production
- Deploy to Vercel.
- Add the same environment variables in the Vercel project settings.
- Configure the storage bucket and RLS policies before launch.

## Owner setup
- Create the initial owner account in Supabase Auth.
- Use a secure email and recovery flow.
- Do not create public admin registration.

## Notes
This project intentionally uses default placeholders until the founder adds real content, deployment details, and final URLs.
