import type { ReactNode } from "react";
import { i18n } from "@/lib/i18n-config";
import { asLocale } from "@/lib/as-locale";
import { getDictionary } from "@/lib/dictionaries";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../globals.css";

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
``