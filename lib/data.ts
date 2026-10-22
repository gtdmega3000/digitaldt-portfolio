import { getSupabaseServerClient } from "@/lib/supabase/server";

export type PublicProject = {
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

export async function getSiteSettings() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return { configured: false, error: "Supabase environment variables are missing." };
  }

  const { data, error } = await supabase.from("site_settings").select("*").limit(1).maybeSingle();

  if (error) {
    return { configured: false, error: error.message };
  }

  return { configured: true, data: data ?? null };
}

export async function getPublishedProjects() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return { configured: false, projects: [], error: "Supabase environment variables are missing." };
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: false })
    .order("published_at", { ascending: false });

  if (error) {
    return { configured: false, projects: [], error: error.message };
  }

  return { configured: true, projects: (data ?? []) as PublicProject[] };
}

export async function getFeaturedProjects() {
  const result = await getPublishedProjects();
  if (!result.configured) {
    return { configured: false, projects: [] as PublicProject[] };
  }
  return {
    configured: true,
    projects: result.projects.filter((project) => project.is_featured).slice(0, 3),
  };
}

export async function getProjectBySlug(slug: string) {
  const result = await getPublishedProjects();

  if (!result.configured) {
    return { configured: false, project: null };
  }

  const project = result.projects.find((entry) => entry.slug === slug) ?? null;
  return { configured: true, project };
}

export async function getDashboardStats() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    return {
      configured: false,
      stats: {
        totalProjects: 0,
        publishedProjects: 0,
        draftProjects: 0,
        featuredProjects: 0,
      },
      error: "Supabase environment variables are missing.",
    };
  }

  const { data, error } = await supabase.from("projects").select("status, is_featured");

  if (error) {
    return { configured: false, stats: { totalProjects: 0, publishedProjects: 0, draftProjects: 0, featuredProjects: 0 }, error: error.message };
  }

  const projects = data ?? [];

  return {
    configured: true,
    stats: {
      totalProjects: projects.length,
      publishedProjects: projects.filter((project) => project.status === "published").length,
      draftProjects: projects.filter((project) => project.status === "draft").length,
      featuredProjects: projects.filter((project) => project.is_featured).length,
    },
  };
}
