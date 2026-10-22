import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockProjects } from "@/lib/mock-data";

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const project = mockProjects.find((item) => item.id === params.id) ?? mockProjects[0];

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Edit</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-[-0.06em] text-white">{project.title}</h1>
      </div>

      <form className="space-y-6 rounded-[28px] border border-white/10 bg-[#171717] p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm text-zinc-300">Project title</label>
            <Input id="title" defaultValue={project.title} />
          </div>
          <div>
            <label htmlFor="slug" className="mb-2 block text-sm text-zinc-300">Slug</label>
            <Input id="slug" defaultValue={project.slug} />
          </div>
        </div>

        <div>
          <label htmlFor="summary" className="mb-2 block text-sm text-zinc-300">Short summary</label>
          <textarea id="summary" rows={4} className="w-full rounded-xl border border-white/12 bg-white/3 px-3 py-2 text-sm text-white placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0096FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111]" defaultValue={project.summary} />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="category" className="mb-2 block text-sm text-zinc-300">Category</label>
            <Input id="category" defaultValue={project.category} />
          </div>
          <div>
            <label htmlFor="technologies" className="mb-2 block text-sm text-zinc-300">Technologies</label>
            <Input id="technologies" defaultValue={project.technologies.join(", ")} />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="live" className="mb-2 block text-sm text-zinc-300">Live URL</label>
            <Input id="live" defaultValue={project.live_url ?? ""} />
          </div>
          <div>
            <label htmlFor="repo" className="mb-2 block text-sm text-zinc-300">Repository URL</label>
            <Input id="repo" defaultValue={project.repository_url ?? ""} />
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="status" className="mb-2 block text-sm text-zinc-300">Status</label>
            <Input id="status" defaultValue={project.status} />
          </div>
          <div>
            <label htmlFor="featured" className="mb-2 block text-sm text-zinc-300">Featured</label>
            <Input id="featured" defaultValue={project.is_featured ? "Yes" : "No"} />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button type="button">Save changes</Button>
          <Button type="button" variant="secondary">Publish</Button>
          <Button type="button" variant="outline">Delete</Button>
        </div>
      </form>
    </div>
  );
}
