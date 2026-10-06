"use client";

import { useMemo, useState } from "react";

type Mode = {
  id: string;
  label: string;
  title: string;
  body: string;
  output: string;
};

const modes: Mode[] = [
  {
    id: "study",
    label: "Study",
    title: "University mode",
    body: "Store class work before it becomes a forgotten file.",
    output: "Next action: add one ISSE assignment, what you did, and what confused you."
  },
  {
    id: "career",
    label: "Career",
    title: "IT direction mode",
    body: "Turn uncertainty into a list of roles, tools, and questions.",
    output: "Next action: pick one IT role and write why it sounds interesting."
  },
  {
    id: "life",
    label: "Life",
    title: "Personal archive mode",
    body: "Games, music, basketball, and the parts that make the site feel like yours.",
    output: "Next action: add one memory that explains your taste."
  }
];

export function HomeConsole() {
  const [activeId, setActiveId] = useState(modes[0].id);
  const active = useMemo(() => modes.find((mode) => mode.id === activeId) ?? modes[0], [activeId]);

  return (
    <div className="hard-panel rounded-[1.125rem] p-5 md:p-6">
      <div className="flex items-center justify-between gap-4 border-b border-accent/20 pb-4 font-mono text-xs text-zinc-500">
        <span>JI-WON/CONTROL</span>
        <span className="text-accent">ACTIVE</span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            onClick={() => setActiveId(mode.id)}
            className={`rounded-xl border px-4 py-3 text-left font-mono text-sm transition active:translate-y-px ${
              active.id === mode.id
                ? "border-accent bg-accent text-zinc-950"
                : "border-white/10 bg-black/25 text-zinc-300 hover:border-accent/50"
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>
      <div className="mt-8 min-h-60 rounded-xl border border-white/10 bg-[#090806] p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-accent">
          {active.id}
        </p>
        <h2 className="mt-4 text-4xl font-black leading-none text-zinc-50 md:text-5xl">{active.title}</h2>
        <p className="mt-5 max-w-xl text-zinc-400">{active.body}</p>
        <div className="mt-8 h-px w-full origin-left orange-line slow-pulse" />
        <p className="mt-6 font-mono text-sm leading-7 text-zinc-300">{active.output}</p>
      </div>
    </div>
  );
}
