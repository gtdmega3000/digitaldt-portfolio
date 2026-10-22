import { Badge } from "@/components/ui/badge";
import { processSteps, siteSettings } from "@/lib/site-content";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#171717] p-8">
          <Badge>About</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">{siteSettings.displayName}</h1>
          <p className="mt-4 text-base leading-8 text-zinc-300">{siteSettings.professionalIntro}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-[24px] border border-white/10 bg-[#171717] p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">My approach</h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">
              I combine product thinking, thoughtful interface design, and reliable engineering to create digital experiences that feel premium and perform in the real world.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7cc8ff]">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
