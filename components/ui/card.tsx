import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-[24px] border border-white/10 bg-[#171717]", className)}>{children}</div>
  );
}
