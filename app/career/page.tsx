import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { careerPaths } from "@/data/site";

export const metadata = {
  title: "Career"
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        label="Career"
        title="IT direction, still loading."
        body="I want to understand where my strengths fit: building, testing, support, systems, design, data, or product work."
      />
      <section className="grid gap-5 pb-16 md:grid-cols-3">
        {[
          ["Short term", "Learn programming basics without comparing myself to AI. Build small things that are useful enough to remember."],
          ["Middle term", "Try different IT roles through classes, internships, projects, and conversations with people already working in tech."],
          ["Long term", "Find a role where technical skill, communication, and personal interest can meet in a realistic career path."]
        ].map(([title, body]) => (
          <article key={title} className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-3xl font-black text-zinc-50">{title}</h2>
            <p className="mt-4 text-zinc-400">{body}</p>
          </article>
        ))}
      </section>
      <section className="grid gap-8 border-t border-white/10 py-16 md:grid-cols-[1fr_0.35fr] md:items-center">
        <div>
          <h2 className="text-4xl font-black leading-none text-zinc-50 md:text-5xl">
            About AI and learning code
          </h2>
          <p className="mt-6 max-w-3xl text-zinc-400">
            AI can produce code quickly, but it does not replace your ability to understand
            problems, make decisions, test ideas, explain tradeoffs, and care about the result.
            Learning programming is still worth it because it changes how you think.
          </p>
        </div>
        <ButtonLink href="/projects" variant="secondary">
          Track practice
        </ButtonLink>
      </section>
      <section className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {careerPaths.map((path) => (
          <article key={path.title} className="rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-zinc-50">{path.title}</h2>
            <p className="mt-4 text-zinc-400">{path.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
