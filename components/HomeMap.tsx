"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nodes = [
  {
    href: "/projects",
    className: "left-[8%] top-[24%]",
    label: "Projects",
    meta: "/projects",
    image: "https://picsum.photos/seed/jiwon-project-map-orange-code/320/220"
  },
  {
    href: "/achievements",
    className: "right-[10%] top-[28%]",
    label: "Archive",
    meta: "/achievements",
    image: "https://picsum.photos/seed/jiwon-archive-campus-night/320/220"
  },
  {
    href: "/career",
    className: "left-[14%] bottom-[24%]",
    label: "Career",
    meta: "/career",
    image: "https://picsum.photos/seed/jiwon-it-career-orange/320/220"
  },
  {
    href: "/playground",
    className: "right-[14%] bottom-[22%]",
    label: "Play",
    meta: "/playground",
    image: "https://picsum.photos/seed/jiwon-music-game-night/320/220"
  }
];

function osakaTime() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Tokyo"
  }).format(new Date());
}

export function HomeMap() {
  const [time, setTime] = useState("--:--:--");
  const [active, setActive] = useState("Projects");

  useEffect(() => {
    const timer = window.setInterval(() => setTime(osakaTime()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative left-1/2 min-h-[100dvh] w-screen -translate-x-1/2 overflow-hidden"
      aria-labelledby="home-title"
    >
      <div className="pointer-events-none absolute left-4 top-5 z-10 font-mono text-xs text-zinc-500 md:left-0">
        {time}
      </div>
      <div className="pointer-events-none absolute left-1/2 top-5 z-10 -translate-x-1/2 font-mono text-xs text-zinc-500">
        Osaka, Japan / 2026
      </div>
      <div className="pointer-events-none absolute right-4 top-5 z-10 font-mono text-xs text-zinc-500 md:right-0">
        last updated / 2026
      </div>

      <div className="map-cross-grid absolute inset-0" aria-hidden="true" />
      <div className="map-vignette absolute inset-0" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[100dvh] items-center justify-center px-4 py-24">
        <div className="text-center">
          <p className="mx-auto mb-5 w-fit border border-accent/30 bg-[#080807]/75 px-3 py-2 font-mono text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
            Ritsumeikan / ISSE
          </p>
          <h1
            id="home-title"
            className="text-[clamp(4.5rem,18vw,16rem)] font-black leading-[0.72] tracking-[-0.04em] text-zinc-50"
          >
            JI-WON
          </h1>
          <div className="mx-auto mt-8 grid max-w-2xl gap-2 font-mono text-sm text-zinc-500">
            <p>JI-won / ISSE student</p>
            <p>IT direction loading</p>
            <p>Games / Music / Basketball / Projects TBA</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden md:block">
        {nodes.map((node) => (
          <Link
            key={node.href}
            href={node.href}
            onMouseEnter={() => setActive(node.label)}
            className={`pointer-events-auto absolute ${node.className} group w-36 transition duration-300 hover:-translate-y-1`}
          >
            <span className="relative block aspect-[4/3] overflow-hidden border border-accent/30 bg-[#0a0907]">
              <Image
                src={node.image}
                alt={`${node.label} preview`}
                fill
                sizes="144px"
                className="object-cover opacity-70 saturate-50 transition duration-300 group-hover:opacity-95"
              />
            </span>
            <span className="mt-2 block border border-accent/25 bg-[#080807]/90 px-3 py-2 font-mono text-xs text-zinc-300">
              {node.label}
              <span className="block text-zinc-600">{node.meta}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 border border-accent/25 bg-[#080807]/88 px-4 py-3 font-mono text-xs text-zinc-500 md:block">
        active node: <span className="text-accent">{active}</span>
      </div>

      <div className="relative z-20 grid gap-3 pb-24 md:hidden">
        {nodes.map((node) => (
          <Link
            key={node.href}
            href={node.href}
            className="border border-accent/25 bg-[#080807]/90 p-4 font-mono text-sm text-zinc-300"
          >
            {node.label}
            <span className="block text-zinc-600">{node.meta}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
