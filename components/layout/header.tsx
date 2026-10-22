import Link from "next/link";

import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0096FF]/40 bg-[#0096FF]/10 text-[10px] font-semibold text-[#0096FF]">
            DD
          </span>
          <span>DigitalDT</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <Link href="/contact">Book a project</Link>
        </Button>
      </div>
    </header>
  );
}
