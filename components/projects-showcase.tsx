import type { Dictionary } from "@/lib/dictionaries";

export default function ProjectsShowcase({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
          {dict.projects.eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-carbon md:text-4xl">
          {dict.projects.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{dict.projects.subtitle}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {dict.projects.items.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-sm border border-blueprint bg-mist p-8"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-sm bg-carbon px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-amber">
                {project.category}
              </span>
              <span className="text-xs font-medium text-stone">{project.delivered}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-carbon">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">{project.description}</p>
            <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-amber transition-all duration-300 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
