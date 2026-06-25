import type { Metadata } from "next";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import CtaBanner from "@/components/cta-banner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: "/about",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="bg-mist py-20 md:py-28">
        <div className="container-page max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
            {dict.about.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-carbon md:text-5xl">
            {dict.about.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">{dict.about.intro}</p>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-carbon">
              {dict.about.mission.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">{dict.about.mission.body}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-carbon">
              {dict.about.team.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone">{dict.about.team.body}</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-2xl font-extrabold text-carbon">
            {dict.about.values.title}
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.values.items.map((value) => (
              <div key={value.title} className="border-t-2 border-amber pt-5">
                <h3 className="font-display text-base font-bold text-carbon">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
