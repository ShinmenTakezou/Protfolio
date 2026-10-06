import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { profile } from "@/data/site";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Student first, builder in progress."
        body={`I am studying in the ${profile.course} at ${profile.university}. This site keeps my work, lessons, and future direction in one place.`}
      />
      <section className="grid gap-8 pb-16 md:grid-cols-[0.85fr_1fr] md:items-center">
        <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.125rem] border border-white/10 shadow-2xl shadow-black/40">
          <Image
            src="https://picsum.photos/seed/student-black-portfolio-music-room/900/1100"
            alt="Dark aesthetic student workspace placeholder"
            fill
            sizes="(min-width: 768px) 42vw, 92vw"
            className="object-cover"
          />
        </figure>
        <div>
          <h2 className="text-4xl font-black leading-none text-zinc-50 md:text-5xl">What I am into</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">{profile.about}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {profile.interests.map((interest) => (
              <span key={interest} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-zinc-200">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-5 border-t border-white/10 py-16 md:grid-cols-3">
        {[
          ["Current focus", "Understand programming basics, collect university work properly, and learn how IT projects are planned."],
          ["Personal style", "Dark visuals, clean layouts, direct writing, and small interactive details that make the site feel alive."],
          ["What this site stores", "Projects, achievements, class experiences, reflections, future goals, and ideas that are still TBA."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-zinc-50">{title}</h2>
            <p className="mt-4 text-zinc-400">{body}</p>
          </article>
        ))}
      </section>
    </>
  );
}
