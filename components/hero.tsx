"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/dictionaries";

const heroImages = [
  "/images/magnific_ingenieros-realizando-pla_hEDg6wtvqL.png",
  "/images/magnific_ingenieros-trabajando-en-_iAUoQtv3uK.png",
  "/images/magnific_casas-en-construccion-eur_swHcQYRl8e.png",
  "/images/magnific_casas-en-construccion-eur_NZgIsBE6D9.png",
];

export default function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((image) => (image + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-carbon">
      <Image
        key={heroImages[currentImage]}
        src={heroImages[currentImage]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 z-0 object-cover transition-all duration-1000 ease-in-out"
        style={{
          animation: "heroZoom 4s ease-in-out forwards",
        }}
      />

      <div className="absolute inset-0 z-10 bg-carbon/60" />

      <div className="container-page relative z-20 flex min-h-[640px] flex-col justify-center py-24">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-sm border border-amber/40 bg-amber/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber">
          {dict.hero.eyebrow}
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
          {dict.hero.title}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-light md:text-lg">
          {dict.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${lang}/contact`}
            className="rounded-sm bg-amber px-7 py-3.5 text-center text-sm font-semibold text-carbon transition-colors hover:bg-amber-deep"
          >
            {dict.hero.ctaPrimary}
          </Link>

          <Link
            href={`/${lang}/services`}
            className="rounded-sm border border-paper/30 px-7 py-3.5 text-center text-sm font-semibold text-paper transition-colors hover:border-paper"
          >
            {dict.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroZoom {
          from {
            transform: scale(1) translateX(0);
          }
          to {
            transform: scale(1.08) translateX(-2%);
          }
        }
      `}</style>
    </section>

  

  );
}
