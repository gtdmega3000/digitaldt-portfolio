export type MockProject = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  technologies: string[];
  cover_image_path: string | null;
  gallery: Array<{ path: string; alt?: string }>;
  live_url: string | null;
  repository_url: string | null;
  status: "draft" | "published";
  is_featured: boolean;
  sort_order: number;
  seo_title: string | null;
  seo_description: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

export const mockProjects: MockProject[] = [
  {
    id: "p-1",
    title: "Northstar Finance Portal",
    slug: "northstar-finance-portal",
    summary:
      "A secure dashboard and customer portal for a finance brand that needed clearer reporting, onboarding flows, and better executive visibility.",
    category: "SaaS Platform",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    cover_image_path: null,
    gallery: [],
    live_url: "https://example.com",
    repository_url: null,
    status: "published",
    is_featured: true,
    sort_order: 1,
    seo_title: "Northstar Finance Portal",
    seo_description: "Customer portal and dashboard experience for a modern finance brand.",
    published_at: "2026-08-15T00:00:00.000Z",
    created_at: "2026-08-10T00:00:00.000Z",
    updated_at: "2026-08-15T00:00:00.000Z",
  },
  {
    id: "p-2",
    title: "Summit Commerce Suite",
    slug: "summit-commerce-suite",
    summary:
      "A conversion-focused commerce platform experience built for product discovery, customer trust, and scalable digital growth.",
    category: "E-commerce",
    technologies: ["React", "Node", "Stripe", "CMS"],
    cover_image_path: null,
    gallery: [],
    live_url: "https://example.com",
    repository_url: "https://github.com",
    status: "published",
    is_featured: true,
    sort_order: 2,
    seo_title: "Summit Commerce Suite",
    seo_description: "Commerce platform redesign focused on conversion and scalable growth.",
    published_at: "2026-07-20T00:00:00.000Z",
    created_at: "2026-07-12T00:00:00.000Z",
    updated_at: "2026-07-20T00:00:00.000Z",
  },
  {
    id: "p-3",
    title: "Nexa Operations Dashboard",
    slug: "nexa-operations-dashboard",
    summary:
      "A modern operations dashboard for teams that needed a clearer view of performance, customer activity, and task flow.",
    category: "Business System",
    technologies: ["React", "Supabase", "Charts", "UX Design"],
    cover_image_path: null,
    gallery: [],
    live_url: null,
    repository_url: "https://github.com",
    status: "published",
    is_featured: false,
    sort_order: 3,
    seo_title: "Nexa Operations Dashboard",
    seo_description: "Operations dashboard UX concept designed around clarity and decision speed.",
    published_at: "2026-06-18T00:00:00.000Z",
    created_at: "2026-06-10T00:00:00.000Z",
    updated_at: "2026-06-18T00:00:00.000Z",
  },
  {
    id: "p-4",
    title: "Aster Clinic Website",
    slug: "aster-clinic-website",
    summary:
      "A clean healthcare marketing site focused on trust, service clarity, and lead generation for a modern clinic brand.",
    category: "Business Website",
    technologies: ["Next.js", "SEO", "Design System", "Content Architecture"],
    cover_image_path: null,
    gallery: [],
    live_url: "https://example.com",
    repository_url: null,
    status: "draft",
    is_featured: false,
    sort_order: 4,
    seo_title: "Aster Clinic Website",
    seo_description: "Healthcare marketing website for patient trust and service transparency.",
    published_at: null,
    created_at: "2026-05-14T00:00:00.000Z",
    updated_at: "2026-05-14T00:00:00.000Z",
  },
];
