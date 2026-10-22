import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <Badge>Services</Badge>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Digital products that make business operations clearer and stronger.</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-[24px] border border-white/10 bg-[#171717] p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#0096FF]/10 text-[#7cc8ff]">•</div>
            <h2 className="text-xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{service.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
