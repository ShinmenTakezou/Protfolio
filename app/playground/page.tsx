import { PageHero } from "@/components/PageHero";
import { PlaygroundClient } from "@/components/PlaygroundClient";
import { profile } from "@/data/site";

export const metadata = {
  title: "Playground"
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHero
        label="Playground"
        title="For the bored but curious version of me."
        body="Small interactive things for music moods, game energy, study prompts, and ideas that are not serious enough for the project page yet."
      />
      <PlaygroundClient />
      <section className="mt-16 rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-7">
        <h2 className="text-3xl font-black text-zinc-50">Contact placeholder</h2>
        <p className="mt-4 max-w-3xl text-zinc-400">
          Add your email, LinkedIn, GitHub, Instagram, or university profile when you are ready to
          share them.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="rounded-full border border-white/10 px-4 py-2 font-semibold text-accent hover:border-accent/60"
            >
              {social.label}
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
