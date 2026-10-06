type PageHeroProps = {
  label: string;
  title: string;
  body: string;
};

export function PageHero({ label, title, body }: PageHeroProps) {
  return (
    <section className="mx-auto w-full max-w-6xl py-12 md:py-20">
      <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
        {label}
      </p>
      <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-normal text-zinc-50 md:text-7xl">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-500">{body}</p>
    </section>
  );
}
