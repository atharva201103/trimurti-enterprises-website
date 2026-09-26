"use client";

import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/constants";
import { scrollToQuoteForm } from "@/lib/utils";

export default function Hero() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#071521] pt-28 sm:pt-32 pb-16 lg:py-0"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-valet.jpg"
          alt="Professional valet parking management by Trimurti Enterprises"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        {/* Deep Navy Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071521]/95 via-[#0B1F33]/85 to-[#071521]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071521] via-transparent to-[#071521]/60" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#D4A84F_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.06]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1F33]/80 border border-[#D4A84F]/40 text-[#D4A84F] text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-[#D4A84F]/10 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-[#D4A84F]" />
            <span>Corporate Parking & Valet Management Company</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Professional Parking &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A84F] via-[#F3DEAC] to-[#E59A2F]">
              Valet Management
            </span>{" "}
            Services
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl font-normal">
            Reliable and organized parking solutions for hospitals, businesses, hotels, commercial establishments, and other organizations.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            <button
              type="button"
              onClick={() => scrollToQuoteForm()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-lg shadow-[#D4A84F]/25 hover:shadow-xl hover:shadow-[#D4A84F]/35 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>Get a Service Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToQuoteForm()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/25 transition-all backdrop-blur-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#D4A84F]" />
              <span>Contact Us</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-[#25D366] bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all backdrop-blur-sm"
              title="Chat with our management on WhatsApp (+91 98228 33831)"
            >
              <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Credibility highlights strip */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4A84F] shrink-0" />
              <span>Trained Valet Staff</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4A84F] shrink-0" />
              <span>Structured Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4A84F] shrink-0" />
              <span>Hospital Specialization</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4A84F] shrink-0" />
              <span>Turnkey Management</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
