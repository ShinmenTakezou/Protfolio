import { PageHero } from "@/components/PageHero";
import { achievements } from "@/data/achievements";

export const metadata = {
  title: "Achievements"
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        label="Achievements"
        title="A place for receipts."
        body="Store wins, events, certificates, presentations, hard lessons, and experiences that changed your thinking."
      />
      <section className="grid gap-5 pb-16 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <article
            key={achievement.title}
            className={`min-h-72 rounded-[1.125rem] border border-white/10 p-7 transition hover:-translate-y-1 hover:border-accent/50 ${
              index === 0 ? "bg-accent-dark md:col-span-2" : "bg-white/[0.04]"
            }`}
          >
            <p className="font-bold text-accent">{achievement.year}</p>
            <h2 className="mt-4 text-3xl font-black leading-none text-zinc-50 md:text-5xl">
              {achievement.title}
            </h2>
            <p className="mt-5 max-w-2xl text-zinc-400">{achievement.description}</p>
            <div className="mt-8 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
              <p className="rounded-xl border border-white/10 p-4">
                <strong className="block text-zinc-100">Evidence</strong>
                {achievement.evidence}
              </p>
              <p className="rounded-xl border border-white/10 p-4">
                <strong className="block text-zinc-100">Skill</strong>
                {achievement.skill}
              </p>
            </div>
          </article>
        ))}
      </section>
      <section className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-7">
        <h2 className="text-3xl font-black text-zinc-50">Experience note format</h2>
        <p className="mt-4 max-w-3xl text-zinc-400">
          What happened? What did I do? What was difficult? What did I learn? What would I do
          differently next time?
        </p>
      </section>
    </>
  );
}
