"use client";

import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group">
      {/* Tooltip visible on hover / focus */}
      <span className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#0B1F33] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-[#D4A84F]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with us on WhatsApp
        {/* Subtle tooltip caret */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-[#0B1F33]" />
      </span>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/50 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <WhatsAppIcon className="w-8 h-8 fill-white" />
      </a>
    </div>
  );
}
