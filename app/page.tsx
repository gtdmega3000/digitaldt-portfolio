import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getFeaturedProjects } from "@/lib/data";
import { processSteps, services, siteSettings } from "@/lib/site-content";

export default async function HomePage() {
  const { projects } = await getFeaturedProjects();

  return (
    <div className="bg-[#111111] text-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Badge>Digital product design & development</Badge>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              {siteSettings.displayName}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-zinc-300">
              {siteSettings.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/work">View portfolio</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/contact">Start a project</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-zinc-400">
              <div>
                <span className="block text-2xl font-semibold text-white">6+</span>
                Years experience
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white">30+</span>
                Product decisions shaped
              </div>
              <div>
                <span className="block text-2xl font-semibold text-white">100%</span>
                Problem-driven work
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
            <div className="rounded-[22px] border border-white/8 bg-[#171717] p-5">
              <div className="mb-6 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span>digitaldt.dev</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border border-[#0096FF]/30 bg-[#0096FF]/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#7cc8ff]">Core focus</p>
                  <p className="mt-2 text-xl font-semibold">Web, SaaS, dashboards, and product experiences.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Strategy</p>
                    <p className="mt-2 text-base font-medium text-white">Clear digital roadmap</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Delivery</p>
                    <p className="mt-2 text-base font-medium text-white">Modern product engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Badge className="bg-white/4">Selected work</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Featured projects</h2>
            </div>
            <Link href="/work" className="text-sm font-medium text-[#7cc8ff] transition hover:text-white">
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.length > 0 ? (
              projects.map((project) => (
                <article key={project.id} className="group overflow-hidden rounded-[24px] border border-white/10 bg-[#171717]">
                  <div className="aspect-[4/3] bg-linear-to-br from-[#1f1f1f] via-[#111111] to-[#202020]" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xs uppercase tracking-[0.18em] text-zinc-400">{project.category}</span>
                      {project.is_featured ? <Badge className="bg-[#0096FF]/10 text-[#7cc8ff]">Featured</Badge> : null}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">{project.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-zinc-400">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((technology) => (
                        <span key={technology} className="rounded-full border border-white/12 bg-white/3 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-zinc-300">
                          {technology}
                        </span>
                      ))}
                    </div>
                    <Link href={`/work/${project.slug}`} className="mt-6 inline-flex text-sm font-medium text-[#7cc8ff] hover:text-white">
                      Read case study →
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[24px] border border-dashed border-white/10 bg-[#171717] p-8 text-zinc-300 md:col-span-2 xl:col-span-3">
                Projects will appear here once the Supabase project is configured and published content is added.
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge>Capabilities</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">Practical digital solutions for real business needs.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0096FF]/10 text-[#7cc8ff]">01</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="rounded-[24px] border border-white/10 bg-[#171717] p-8">
            <Badge>Founder</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">Building products that work for people and businesses.</h2>
            <p className="mt-5 text-base leading-8 text-zinc-400">{siteSettings.bio}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7cc8ff]">{step.title}</p>
                <p className="mt-4 text-base leading-7 text-zinc-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#0096FF]/30 bg-[#0096FF]/8 p-8 text-center sm:p-12">
          <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Let’s build something valuable</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Need a modern digital product or website that looks sharp and performs well?</h2>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Start your project</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/work">Browse work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
