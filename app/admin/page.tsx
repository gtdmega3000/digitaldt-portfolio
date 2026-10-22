import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getDashboardStats } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const supabase = await getSupabaseServerClient();

  if (!supabase) {
    redirect("/admin/login");
  }

  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) {
    redirect("/admin/login");
  }

  const { stats } = await getDashboardStats();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Dashboard</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">Overview</h1>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <p className="text-sm text-zinc-400">Total projects</p>
          <p className="mt-4 text-4xl font-semibold text-white">{stats.totalProjects}</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <p className="text-sm text-zinc-400">Published</p>
          <p className="mt-4 text-4xl font-semibold text-white">{stats.publishedProjects}</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <p className="text-sm text-zinc-400">Drafts</p>
          <p className="mt-4 text-4xl font-semibold text-white">{stats.draftProjects}</p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <p className="text-sm text-zinc-400">Featured</p>
          <p className="mt-4 text-4xl font-semibold text-white">{stats.featuredProjects}</p>
        </div>
      </div>
    </div>
  );
}
