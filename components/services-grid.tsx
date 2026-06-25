import Link from "next/link";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";
import {
  IconNewBuild,
  IconRenovation,
  IconExtension,
  IconInfrastructure,
  IconMaintenance,
  IconProjectManagement,
} from "@/components/icons";

const icons = [IconNewBuild, IconRenovation, IconExtension, IconInfrastructure, IconMaintenance, IconProjectManagement];

export default function ServicesGrid({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="bg-mist py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
            {dict.services.eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-carbon md:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{dict.services.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-blueprint bg-blueprint sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div key={service.title} className="flex flex-col gap-4 bg-paper p-8">
                <Icon className="h-8 w-8 text-amber-deep" />
                <h3 className="font-display text-lg font-bold text-carbon">{service.title}</h3>
                <p className="text-sm leading-relaxed text-stone">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href={`/${lang}/services`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-carbon hover:text-amber-deep"
          >
            {dict.services.cta}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
