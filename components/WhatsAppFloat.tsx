import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/8618181932797?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20herbal%20wellness%20products.";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp 咨询"
      className="fixed bottom-6 right-6 z-[9999] inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-base font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1fb957] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
