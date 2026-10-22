import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Start a project conversation.</h1>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#171717] p-6 sm:p-8">
        <form className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">Name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="company" className="mb-2 block text-sm text-zinc-300">Company or brand</label>
            <Input id="company" placeholder="Company name" />
          </div>
          <div>
            <label htmlFor="details" className="mb-2 block text-sm text-zinc-300">Project details</label>
            <textarea id="details" rows={6} className="w-full rounded-xl border border-white/12 bg-white/3 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0096FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]" placeholder="Tell me about your product, timeline, or goals." />
          </div>
          <Button type="submit">Send inquiry</Button>
        </form>
      </div>
    </div>
  );
}
