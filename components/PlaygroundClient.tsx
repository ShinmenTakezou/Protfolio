"use client";

import { useState } from "react";
import { moods, prompts } from "@/data/site";

function pickRandom(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export function PlaygroundClient() {
  const [mood, setMood] = useState(moods[0]);
  const [quest, setQuest] = useState(prompts[0]);

  return (
    <section className="grid gap-5 md:grid-cols-2">
      <article className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-7">
        <h2 className="text-3xl font-black text-zinc-50">Music mood</h2>
        <p className="mt-4 min-h-16 text-zinc-400">{mood}</p>
        <button
          type="button"
          onClick={() => setMood(pickRandom(moods))}
          className="mt-6 rounded-full border border-white/15 px-5 py-3 font-semibold text-zinc-100 transition hover:border-accent/60"
        >
          Change mood
        </button>
      </article>
      <article className="rounded-[1.125rem] border border-white/10 bg-accent-dark p-7">
        <h2 className="text-3xl font-black text-zinc-50">Mini quest</h2>
        <p className="mt-4 min-h-16 text-zinc-300">{quest}</p>
        <button
          type="button"
          onClick={() => setQuest(pickRandom(prompts))}
          className="mt-6 rounded-full bg-accent px-5 py-3 font-bold text-zinc-950 transition hover:bg-accent/90"
        >
          New quest
        </button>
      </article>
    </section>
  );
}
