"use client";

import { FormEvent, useEffect, useState } from "react";

type DraftItem = {
  id: string;
  title: string;
  body: string;
  type: "Project" | "Achievement";
};

const storageKey = "ji-won-portfolio-drafts";

export function AdminClient() {
  const [items, setItems] = useState<DraftItem[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return [];

    try {
      return JSON.parse(saved) as DraftItem[];
    } catch {
      return [];
    }
  });
  const [type, setType] = useState<DraftItem["type"]>("Project");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;

    setItems((current) => [
      {
        id: crypto.randomUUID(),
        type,
        title: title.trim(),
        body: body.trim()
      },
      ...current
    ]);
    setTitle("");
    setBody("");
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <form
        onSubmit={handleSubmit}
        className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-6"
      >
        <div className="grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Type</span>
            <select
              value={type}
              onChange={(event) => setType(event.target.value as DraftItem["type"])}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-accent"
            >
              <option>Project</option>
              <option>Achievement</option>
            </select>
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-accent"
              placeholder="Example: First website update"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-zinc-200">Note</span>
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              className="min-h-32 rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none focus:border-accent"
              placeholder="What happened, what you learned, and what to do next."
            />
          </label>
          <button
            type="submit"
            className="min-h-12 rounded-full bg-accent px-5 font-bold text-zinc-950 transition hover:bg-accent/90"
          >
            Save draft
          </button>
        </div>
      </form>

      <div className="grid gap-4">
        {items.length === 0 ? (
          <div className="rounded-[1.125rem] border border-dashed border-white/15 p-8 text-zinc-400">
            Drafts you add here will appear on this device. Copy anything important into the
            TypeScript data files before publishing.
          </div>
        ) : (
          items.map((item) => (
            <article key={item.id} className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-bold text-accent">{item.type}</p>
              <h2 className="mt-2 text-2xl font-black text-zinc-50">{item.title}</h2>
              <p className="mt-3 text-zinc-400">{item.body}</p>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="mt-5 text-sm font-semibold text-zinc-300 hover:text-accent"
              >
                Delete draft
              </button>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
