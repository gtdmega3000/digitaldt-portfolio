import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.18em] text-[#7cc8ff]">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 text-base leading-8 text-zinc-300">
        The page you are looking for may have moved, been unpublished, or does not exist.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">Return home</Link>
        </Button>
      </div>
    </div>
  );
}
