# DigitalDT Product Requirements Document

## Product Overview
DigitalDT is a personal portfolio and private CMS for founder Dowei Timi Ebike. The public experience showcases capabilities in web development, mobile development, SaaS platforms, business systems, UI/UX delivery, and AI-enabled digital products. The admin experience allows the owner to create, manage, and publish portfolio projects without editing source code.

## Core user personas
- Visitor seeking a capable digital product partner.
- Founder who needs to publish content and manage project visibility.
- Potential employer, client, or collaborator evaluating the founder's work.

## Goals
- Present a premium, modern portfolio that reflects a senior product and engineering capability.
- Keep portfolio content database-driven and easy to expand.
- Allow private content management with secure server-side auth.
- Keep drafts hidden from anonymous visitors and public search engines.

## Non-goals
- Public self-service registration for administrators.
- Hardcoded production project records as the final content source.
- Overly complex CMS features beyond project content management and settings.

## Functional requirements
### Public website
- Home page with intro, featured projects, services, founder overview, process, CTA, and footer.
- /work route with searchable and filterable project directory.
- /work/[slug] dynamic case study pages with SEO metadata.
- /services, /about, /contact pages.

### Admin
- /admin/login for owner authentication.
- /admin overview with stats.
- /admin/projects listing with search and status filters.
- /admin/projects/new and /admin/projects/[id]/edit forms.
- Support draft/save, publish/unpublish, feature toggle, delete with confirmation.

### Data & storage
- Projects table with slug, status, metadata, cover image, and gallery references.
- Site settings table for profile and global content.
- Public files in Supabase Storage with validation and safe cleanup.

## Acceptance criteria
- Anonymous visitors cannot access admin routes or drafts.
- Only the owner can create or modify projects.
- Published projects appear in the public portfolio.
- Unpublished or draft projects do not appear publicly.
- Project case studies resolve to unique, shareable URLs.
- SEO metadata is present for each public project page.
- Build and lint pass in CI or local validation.

## Open questions / defaults
- Brand color and content are set to the DigitalDT defaults in this implementation.
- Real Supabase credentials and owner account must be configured before production launch.
- Contact, domain, and deployment preferences are intentionally left as setup tasks.
