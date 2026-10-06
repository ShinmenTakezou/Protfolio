import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        title="Placeholders today, proof tomorrow."
        body="Replace the TBA cards with class assignments, personal builds, notes, screenshots, and links when they are ready."
      />
      <section className="grid gap-5 pb-16">
        {projects.map((project) => (
          <article
            key={project.title}
            className="grid gap-6 rounded-[1.125rem] border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-1 hover:border-accent/50 md:grid-cols-[0.72fr_1fr] md:items-center md:p-5"
          >
            <figure className="relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={`${project.title} placeholder visual`}
                fill
                sizes="(min-width: 768px) 38vw, 92vw"
                className="object-cover"
              />
            </figure>
            <div className="p-2 md:p-5">
              <p className="font-bold text-accent">{project.type}</p>
              <h2 className="mt-4 text-4xl font-black leading-none text-zinc-50 md:text-5xl">
                {project.title}
              </h2>
              <p className="mt-5 text-zinc-400">{project.summary}</p>
              <div className="mt-6 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
                <p className="rounded-xl border border-white/10 p-4">
                  <strong className="block text-zinc-100">Lesson</strong>
                  {project.lesson}
                </p>
                <p className="rounded-xl border border-white/10 p-4">
                  <strong className="block text-zinc-100">Next step</strong>
                  {project.nextStep}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
