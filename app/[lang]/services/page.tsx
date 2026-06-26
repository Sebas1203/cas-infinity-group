import type { Metadata } from "next";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import CtaBanner from "@/components/cta-banner";
import {
  IconNewBuild,
  IconRenovation,
  IconExtension,
  IconInfrastructure,
  IconMaintenance,
  IconProjectManagement,
} from "@/components/icons";

const icons = [IconNewBuild, IconExtension, IconRenovation, IconMaintenance, IconInfrastructure, IconProjectManagement];

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
    path: "/services",
    title: dict.meta.services.title,
    description: dict.meta.services.description,
  });
}

export default async function ServicesPage({
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
            {dict.servicesPage.eyebrow}
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-carbon md:text-5xl">
            {dict.servicesPage.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">{dict.servicesPage.intro}</p>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-px overflow-hidden rounded-sm border border-blueprint bg-blueprint sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={service.title} className="flex flex-col gap-4 bg-paper p-9">
                <Icon className="h-9 w-9 text-amber-deep" />
                <h2 className="font-display text-xl font-bold text-carbon">{service.title}</h2>
                <p className="text-sm leading-relaxed text-stone">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
