"use client";

import { ArrowRight, Shield } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/constants";
import { scrollToQuoteForm } from "@/lib/utils";

export default function CTA() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="relative py-20 lg:py-24 bg-[#071521] text-white overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33] via-[#071521] to-[#0B1F33]" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4A84F_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4A84F] to-[#E59A2F] text-[#071521] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#D4A84F]/20">
          <Shield className="w-8 h-8 stroke-[2.2]" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          Looking for Professional Parking Management?
        </h2>

        <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Contact Trimurti Enterprises to discuss your parking requirements. Our team prepares tailored operational plans suited for your traffic volume and facility specifications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToQuoteForm();
            }}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-xl shadow-[#D4A84F]/25 hover:shadow-2xl hover:shadow-[#D4A84F]/35 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get a Service Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all backdrop-blur-sm hover:scale-105 active:scale-95"
            title="Chat with us on WhatsApp (+91 98228 33831)"
          >
            <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
