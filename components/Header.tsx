import Link from "next/link";
import { navItems, profile } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto flex min-h-14 w-fit max-w-[calc(100vw-32px)] items-center justify-between gap-3 rounded-full border border-accent/25 bg-[#080807]/88 px-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link href="/" className="whitespace-nowrap rounded-full px-3 py-2 font-mono text-xs font-black tracking-normal text-zinc-50">
          <span className="text-accent">JI</span>-WON
        </Link>
        <nav className="flex items-center gap-1 overflow-x-auto font-mono text-[0.72rem] font-medium text-zinc-500">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 transition hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
