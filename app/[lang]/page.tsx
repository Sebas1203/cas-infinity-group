import type { Metadata } from "next";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata, localBusinessJsonLd } from "@/lib/seo";
import Hero from "@/components/hero";
import IntroStats from "@/components/intro-stats";
import ServicesGrid from "@/components/services-grid";
import WhyUs from "@/components/why-us";
import ProjectsShowcase from "@/components/projects-showcase";
import ProcessTimeline from "@/components/process-timeline";
import CtaBanner from "@/components/cta-banner";

export async function generateMetadata({
  params,
}: {
  params:{ lang: string };
}): Promise<Metadata> {
  const { lang: rawLang } =  params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: "",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params:{ lang: string };
}) {
  const { lang: rawLang } = params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd(lang)) }}
      />
      <Hero lang={lang} dict={dict} />
      <IntroStats dict={dict} />
      <ServicesGrid lang={lang} dict={dict} />
      <WhyUs dict={dict} />
      <ProjectsShowcase dict={dict} />
      <ProcessTimeline dict={dict} />
      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
