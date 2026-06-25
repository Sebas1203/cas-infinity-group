import Link from "next/link";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";
import { company } from "@/lib/company-data";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-blueprint bg-carbon text-paper">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href={`/${lang}`} className="flex items-center gap-3" aria-label="C.A.S. Infinity Group">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-amber text-carbon font-display text-base font-extrabold">
              C
            </span>
            <span className="font-display text-base font-bold">C.A.S. Infinity Group</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-light">
            {dict.footer.description}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-amber">
            {dict.footer.quickLinks}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-stone-light">
            <li><Link href={`/${lang}`} className="hover:text-paper">{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/about`} className="hover:text-paper">{dict.nav.about}</Link></li>
            <li><Link href={`/${lang}/services`} className="hover:text-paper">{dict.nav.services}</Link></li>
            <li><Link href={`/${lang}/international`} className="hover:text-paper">{dict.nav.international}</Link></li>
            <li><Link href={`/${lang}/contact`} className="hover:text-paper">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-amber">
            {dict.footer.contactTitle}
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-stone-light">
            <li>{company.address.street}</li>
            <li>{company.phone}</li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-paper">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page flex flex-col items-center justify-between gap-3 border-t border-carbon-soft py-6 text-xs text-stone-light md:flex-row">
        <p>
          © {year} {company.legalName} — {dict.footer.rights}
        </p>
        <p>{dict.footer.kvk}: {company.kvkNumber}</p>
      </div>
    </footer>
  );
}
