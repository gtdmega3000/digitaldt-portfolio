import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewProjectPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Create</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">New project</h1>
      </div>

      <form className="space-y-6 rounded-[28px] border border-white/10 bg-[#171717] p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm text-zinc-300">Project title</label>
            <Input id="title" placeholder="Northstar Finance Portal" />
          </div>
          <div>
            <label htmlFor="slug" className="mb-2 block text-sm text-zinc-300">Slug</label>
            <Input id="slug" placeholder="northstar-finance-portal" />
          </div>
        </div>

        <div>
          <label htmlFor="summary" className="mb-2 block text-sm text-zinc-300">Short summary</label>
          <textarea id="summary" rows={4} className="w-full rounded-xl border border-white/12 bg-white/3 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0096FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]" placeholder="Brief summary visible in the public portfolio." />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="category" className="mb-2 block text-sm text-zinc-300">Category</label>
            <Input id="category" placeholder="Web Application" />
          </div>
          <div>
            <label htmlFor="technologies" className="mb-2 block text-sm text-zinc-300">Technologies</label>
            <Input id="technologies" placeholder="Next.js, TypeScript, Supabase" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="live" className="mb-2 block text-sm text-zinc-300">Live URL</label>
            <Input id="live" placeholder="https://example.com" />
          </div>
          <div>
            <label htmlFor="repo" className="mb-2 block text-sm text-zinc-300">Repository URL</label>
            <Input id="repo" placeholder="https://github.com" />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="seo-title" className="mb-2 block text-sm text-zinc-300">SEO title</label>
            <Input id="seo-title" placeholder="Project SEO title" />
          </div>
          <div>
            <label htmlFor="seo-description" className="mb-2 block text-sm text-zinc-300">SEO description</label>
            <Input id="seo-description" placeholder="Project SEO description" />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="button">Save draft</Button>
          <Button type="button" variant="secondary">Publish</Button>
          <Button type="button" variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  );
}
