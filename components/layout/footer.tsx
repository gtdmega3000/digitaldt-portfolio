import Link from "next/link";

import { socialLinks } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold text-white">DigitalDT</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-400">
            Digital product design and development for businesses that need strong execution and clear strategy.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><Link href="/work">Work</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">Connect</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {socialLinks.map((item) => (
              <li key={item.label}><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li><a href="mailto:hello@digitaldt.dev">hello@digitaldt.dev</a></li>
            <li><a href="tel:+2348000000000">+234 800 000 0000</a></li>
            <li>Remote, available worldwide</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
