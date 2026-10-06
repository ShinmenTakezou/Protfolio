import Link from "next/link";

export function Footer() {
  return (
    <footer className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-4 border-t border-accent/20 py-8 font-mono text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
      <p>JI-WON / ARCHIVE / KEEP CHANGING</p>
      <div className="flex flex-wrap gap-4 text-zinc-400">
        <Link href="/projects" className="hover:text-accent">
          Projects
        </Link>
        <Link href="/achievements" className="hover:text-accent">
          Archive
        </Link>
        <Link href="/admin" className="hover:text-accent">
          Admin
        </Link>
      </div>
    </footer>
  );
}
