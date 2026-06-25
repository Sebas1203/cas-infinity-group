"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const f = dict.contactPage.form;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: conectar a backend/email service real (ej. Resend, Formspree, API propia)
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-sm border border-amber bg-mist p-8 text-center">
        <p className="font-display text-lg font-bold text-carbon">
          {dict.contactPage.title}
        </p>
        <p className="mt-2 text-sm text-stone">
          {dict.contactPage.intro}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-carbon">
          {f.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1.5 w-full rounded-sm border border-blueprint px-4 py-2.5 text-sm text-carbon outline-none focus:border-amber-deep"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-carbon">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-sm border border-blueprint px-4 py-2.5 text-sm text-carbon outline-none focus:border-amber-deep"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-carbon">
            {f.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-sm border border-blueprint px-4 py-2.5 text-sm text-carbon outline-none focus:border-amber-deep"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-carbon">
          {f.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-sm border border-blueprint px-4 py-2.5 text-sm text-carbon outline-none focus:border-amber-deep"
        />
      </div>
      <button
        type="submit"
        className="rounded-sm bg-amber px-7 py-3.5 text-sm font-semibold text-carbon transition-colors hover:bg-amber-deep"
      >
        {f.submit}
      </button>
    </form>
  );
}
