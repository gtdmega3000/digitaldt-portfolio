import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockProjects } from "@/lib/mock-data";

export default function AdminProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Projects</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">Project management</h1>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new">New project</Link>
        </Button>
      </div>

      <div className="mb-6 rounded-[24px] border border-white/10 bg-[#171717] p-4">
        <div className="flex flex-wrap gap-3">
          {[
            "All",
            "Published",
            "Drafts",
            "Featured",
          ].map((item) => (
            <button key={item} className="rounded-full border border-white/12 bg-white/3 px-3 py-2 text-xs uppercase tracking-[0.12em] text-zinc-300">
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {mockProjects.map((project) => (
          <div key={project.id} className="rounded-[24px] border border-white/10 bg-[#171717] p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                  {project.status === "published" ? <Badge className="bg-[#0096FF]/10 text-[#7cc8ff]">Published</Badge> : <Badge className="bg-white/5 text-zinc-300">Draft</Badge>}
                  {project.is_featured ? <Badge className="bg-white/5 text-zinc-300">Featured</Badge> : null}
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">{project.summary}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" size="sm">
                  <Link href={`/admin/projects/${project.id}/edit`}>Edit</Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/work/${project.slug}`}>Preview</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
