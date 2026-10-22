import Link from "next/link";

import { Button } from "@/components/ui/button";

const adminNavigation = [
  { href: "/admin", label: "Overview" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-lg font-semibold text-white">DigitalDT Admin</Link>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-zinc-300 md:flex">
            {adminNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="secondary" size="sm">
            <Link href="/">Public site</Link>
          </Button>
        </div>
      </div>
      {children}
    </div>
  );
}
