import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Settings</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">Profile & site configuration</h1>
      </div>

      <form className="space-y-6 rounded-[28px] border border-white/10 bg-[#171717] p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="displayName" className="mb-2 block text-sm text-zinc-300">Display name</label>
            <Input id="displayName" defaultValue="Dowei Timi Ebike" />
          </div>
          <div>
            <label htmlFor="brandName" className="mb-2 block text-sm text-zinc-300">Brand name</label>
            <Input id="brandName" defaultValue="DigitalDT" />
          </div>
        </div>

        <div>
          <label htmlFor="intro" className="mb-2 block text-sm text-zinc-300">Professional introduction</label>
          <textarea id="intro" rows={4} className="w-full rounded-xl border border-white/12 bg-white/3 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0096FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]" defaultValue="I design and build digital products that help businesses grow through thoughtful strategy and modern digital execution." />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">Email</label>
            <Input id="email" defaultValue="hello@digitaldt.dev" />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-zinc-300">Phone</label>
            <Input id="phone" defaultValue="+234 800 000 0000" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="button">Save settings</Button>
          <Button type="button" variant="secondary">Preview site</Button>
        </div>
      </form>
    </div>
  );
}
