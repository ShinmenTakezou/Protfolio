import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-accent text-zinc-950 hover:bg-orange-400"
      : "border border-accent/30 bg-black/20 text-zinc-100 hover:border-accent/80";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-px ${classes}`}
    >
      {children}
    </Link>
  );
}
