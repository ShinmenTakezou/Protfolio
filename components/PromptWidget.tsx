"use client";

import { useState } from "react";
import { prompts } from "@/data/site";

function pickRandom(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function PromptWidget() {
  const [prompt, setPrompt] = useState(
    "Add one real note. One sentence is enough."
  );

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 border-t border-accent/20 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
      <div>
        <h2 className="text-4xl font-black leading-none text-zinc-50 md:text-5xl">Update trigger</h2>
        <p className="mt-4 max-w-md text-zinc-500">
          For days when the site needs progress but your brain refuses a big task.
        </p>
      </div>
      <div className="rounded-[1.125rem] border border-accent/20 bg-[#0a0907] p-6">
        <p className="min-h-20 font-mono text-lg leading-8 text-zinc-200">{prompt}</p>
        <button
          type="button"
          onClick={() => setPrompt(pickRandom(prompts))}
          className="mt-6 inline-flex min-h-12 rounded-full bg-accent px-5 font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-orange-400 active:translate-y-px"
        >
          Get prompt
        </button>
      </div>
    </section>
  );
}
