import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "This project is not available or has been unpublished.",
    };
  }

  return {
    title: project.seo_title ?? project.title,
    description: project.seo_description ?? project.summary,
    openGraph: {
      title: project.seo_title ?? project.title,
      description: project.seo_description ?? project.summary,
      type: "website",
    },
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { project } = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Badge>{project.category}</Badge>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{project.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">{project.summary}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.live_url ? (
          <Button asChild>
            <a href={project.live_url} target="_blank" rel="noreferrer">Visit live project</a>
          </Button>
        ) : null}
        {project.repository_url ? (
          <Button asChild variant="secondary">
            <a href={project.repository_url} target="_blank" rel="noreferrer">Repository</a>
          </Button>
        ) : null}
      </div>

      <div className="mt-10 rounded-[28px] border border-white/10 bg-[#171717] p-4 sm:p-6">
        <div className="aspect-[16/10] overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1b1b1b] via-[#111111] to-[#202020]" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <h2 className="text-xl font-semibold text-white">Project overview</h2>
          <p className="mt-4 text-base leading-8 text-zinc-300">
            This detailed project case study will render the actual business problem, approach, and implementation details from the database once content is created.
          </p>
        </div>
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
          <h2 className="text-xl font-semibold text-white">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-full border border-white/12 bg-white/3 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-zinc-300">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
