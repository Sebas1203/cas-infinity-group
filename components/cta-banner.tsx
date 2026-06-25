import Link from "next/link";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";

export default function CtaBanner({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section className="bg-amber">
      <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-carbon md:text-3xl">
            {dict.ctaBanner.title}
          </h2>
          <p className="mt-2 max-w-lg text-sm text-carbon-soft md:text-base">{dict.ctaBanner.subtitle}</p>
        </div>
        <Link
          href={`/${lang}/contact`}
          className="shrink-0 rounded-sm bg-carbon px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-carbon-soft"
        >
          {dict.ctaBanner.button}
        </Link>
      </div>
    </section>
  );
}
