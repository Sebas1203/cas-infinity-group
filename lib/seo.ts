import type { Metadata } from "next";
import { i18n, localeHreflang, type Locale } from "./i18n-config";

export const siteUrl = "https://casinfinitygroup.nl"; // TODO: confirmar dominio final con el cliente

export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of i18n.locales) {
    languages[localeHreflang[locale]] = `${siteUrl}/${locale}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${i18n.defaultLocale}${path}`;

  return {
    canonical: `${siteUrl}/${i18n.defaultLocale}${path}`,
    languages,
  };
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    alternates: buildAlternates(path),
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}${path}`,
      siteName: "C.A.S. Infinity Group",
      locale: localeHreflang[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/**
 * JSON-LD structured data for a GeneralContractor / construction business.
 * Helps Google understand entity type for local + sector searches
 * ("aannemer Nederland", "construction company Netherlands", etc.)
 */
export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: "C.A.S. Infinity Group",
    url: `${siteUrl}/${locale}`,
    image: `${siteUrl}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    areaServed: "NL",
    inLanguage: localeHreflang[locale],
  };
}
