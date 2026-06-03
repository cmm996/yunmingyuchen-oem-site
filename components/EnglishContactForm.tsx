"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const identityOptions = [
  "Wellness studio",
  "Beauty salon / SPA",
  "Community group buyer",
  "Cross-border seller",
  "Distributor",
  "Private-label founder",
  "Other"
];

const productOptions = [
  "Mugwort warming patch",
  "Mugwort foot soak pack",
  "Herbal eye patch / mask",
  "Eastern herbal gift set / channel bundle",
  "Other"
];

export function EnglishContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-lg border border-herb-200 bg-white p-5 shadow-soft sm:p-7"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-herb-800">Name</span>
          <input
            required
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">
            WeChat / WhatsApp / Phone
          </span>
          <input
            required
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="Preferred contact"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">Region</span>
          <input
            className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="Malaysia / United States / Taiwan / Other"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">Partner type</span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            {identityOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-herb-800">
            Product interest
          </span>
          <select className="focus-ring mt-2 w-full rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900">
            {productOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-herb-800">Notes</span>
          <textarea
            rows={4}
            className="focus-ring mt-2 w-full resize-y rounded-md border border-herb-200 bg-herb-50 px-4 py-3 text-herb-900"
            placeholder="Briefly tell us your market, channel, sample interest, or packaging needs."
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-herb-800 px-6 text-sm font-semibold text-white transition hover:bg-herb-900 sm:w-auto"
      >
        Get info kit / consult cooperation
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-md bg-herb-100 px-4 py-3 text-sm leading-6 text-herb-800">
          Request noted. A live site can connect this form to email, WeChat, or
          a CRM workflow.
        </p>
      ) : null}
    </form>
  );
}
