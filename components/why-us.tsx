import type { Dictionary } from "@/lib/dictionaries";

export default function WhyUs({ dict }: { dict: Dictionary }) {
  return (
    <section className="container-page py-20 md:py-28">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
        {dict.whyUs.eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-carbon md:text-4xl">
        {dict.whyUs.title}
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {dict.whyUs.items.map((item) => (
          <div key={item.title} className="border-t-2 border-amber pt-5">
            <h3 className="font-display text-base font-bold text-carbon">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
