import type { Metadata } from "next";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { company } from "@/lib/company-data";
import ContactForm from "@/components/contact-form";

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang: rawLang } =  params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);
  return buildMetadata({
    locale: lang,
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang: rawLang } =  params;
  const lang = asLocale(rawLang);
  const dict = await getDictionary(lang);
  const p = dict.contactPage;

  return (
    <section className="container-page py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-deep">
          {p.eyebrow}
        </span>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-carbon md:text-5xl">
          {p.title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">{p.intro}</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-sm border border-blueprint bg-mist p-8 md:p-10">
          <h2 className="font-display text-xl font-bold text-carbon">{p.formTitle}</h2>
          <div className="mt-6">
            <ContactForm dict={dict} />
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold text-carbon">{p.detailsTitle}</h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-carbon">{p.addressLabel}</dt>
              <dd className="mt-1 text-stone">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
                <br />
                {company.address.country}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-carbon">{p.phoneLabel}</dt>
              <dd className="mt-1 text-stone">
                <a href={`tel:${company.phone}`} className="hover:text-amber-deep">
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-carbon">{p.emailLabel}</dt>
              <dd className="mt-1 text-stone">
                <a href={`mailto:${company.email}`} className="hover:text-amber-deep">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-carbon">{p.hoursLabel}</dt>
              <dd className="mt-1 text-stone">{p.hours}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
