import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const supabase = await getSupabaseServerClient();

  if (supabase) {
    const { data } = await supabase.auth.getUser();
    if (data.user) {
      redirect("/admin");
    }
  }

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full rounded-[28px] border border-white/10 bg-[#171717] p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">Admin</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">Sign in</h1>
        <p className="mt-3 text-sm leading-7 text-zinc-400">Use the secure owner account configured through Supabase Auth.</p>

        <form className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">Email</label>
            <Input id="email" type="email" placeholder="owner@example.com" />
          </div>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-zinc-300">Password</label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button type="submit" className="w-full">Sign in</Button>
        </form>
      </div>
    </div>
  );
}
