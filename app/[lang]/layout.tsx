import type { ReactNode } from "react";
import { i18n } from "@/lib/i18n-config";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}