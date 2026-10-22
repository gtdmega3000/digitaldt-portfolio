import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { getPublishedProjects } from "@/lib/data";

export default async function WorkPage() {
  const { projects } = await getPublishedProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <Badge>Selected work</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Work</h1>
      </div>

      {projects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-[24px] border border-white/10 bg-[#171717]">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1d1d1d] via-[#141414] to-[#1c1c1c]" />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{project.category}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology} className="rounded-full border border-white/12 bg-white/3 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                      {technology}
                    </span>
                  ))}
                </div>
                <Link href={`/work/${project.slug}`} className="mt-6 inline-flex text-sm font-medium text-[#7cc8ff] hover:text-white">
                  View case study →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[24px] border border-dashed border-white/12 bg-[#171717] p-12 text-center text-zinc-300">
          No published projects are available yet. Add them from the admin dashboard once Supabase is configured.
        </div>
      )}
    </div>
  );
}
