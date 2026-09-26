"use client";

import Image from "next/image";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Car,
  Clock,
  Check,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { scrollToQuoteForm } from "@/lib/utils";

export default function TechnologyValet() {
  const features = [
    {
      icon: Smartphone,
      title: "Digital Parking Tickets",
      desc: "Customers can receive their valet parking ticket digitally through WhatsApp, reducing reliance on traditional paper tickets.",
      badge: "WhatsApp Delivery",
    },
    {
      icon: Layers,
      title: "Organized Vehicle Management",
      desc: "Our digital valet management system helps the parking team organize vehicle information and valet operations more efficiently.",
      badge: "Operational Rigor",
    },
    {
      icon: CheckCircle2,
      title: "Better Customer Convenience",
      desc: "Digital ticket delivery through WhatsApp provides customers with a convenient way to access their parking ticket without depending entirely on a physical paper ticket.",
      badge: "Seamless Handover",
    },
    {
      icon: ShieldCheck,
      title: "Technology + Professional Service",
      desc: "Technology supports our trained valet team and organized parking operations, helping us provide a modern customer experience.",
      badge: "Trained Personnel",
    },
  ];

  return (
    <section
      id="software"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#071521] via-[#0B1F33] to-[#071521] text-white relative overflow-hidden scroll-mt-20"
    >
      <div id="technology" className="absolute -top-24" />
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4A84F]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#25D366]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#D4A84F_1px,transparent_1px)] [background-size:36px_36px] opacity-[0.05]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4A84F]/10 border border-[#D4A84F]/30 text-[#D4A84F] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A84F]" />
            <span>Competitive Service Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technology-Enabled{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A84F] via-[#F3DEAC] to-[#E59A2F]">
              Valet Management
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Smarter valet operations with digital technology. Trimurti Enterprises combines professional valet services with dedicated digital technology to make parking operations more organized and convenient.
          </p>

          {/* Differentiator Formula Pill */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-200">
            <span className="text-white font-semibold">Professional Valet Staff</span>
            <span className="text-[#D4A84F] font-bold">+</span>
            <span className="text-white font-semibold">Organized Parking Operations</span>
            <span className="text-[#D4A84F] font-bold">+</span>
            <span className="text-[#25D366] font-semibold">Digital Technology</span>
          </div>
        </div>

        {/* Split Grid: Left Details & Right Smartphone Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Key Features & Differentiators */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Key Differentiator Highlight Banner */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-[#25D366]/30 shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shrink-0 mt-0.5">
                  <WhatsAppIcon className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#25D366] bg-[#25D366]/15 px-2.5 py-0.5 rounded-full">
                      Key Service Feature
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    Digital Valet Tickets via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                    Instead of relying solely on traditional paper tickets, Trimurti Enterprises uses a digital valet management system that enables parking tickets to be shared with customers through WhatsApp. This helps create a more convenient and organized valet experience while supporting efficient vehicle management for the parking team.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4A84F]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1F33] border border-[#D4A84F]/30 flex items-center justify-center text-[#D4A84F]">
                          <IconComponent className="w-5 h-5 stroke-[2]" />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4A84F] bg-[#D4A84F]/10 px-2 py-0.5 rounded-md">
                          {feature.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-normal">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subtle CTA: Discover Our Approach */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollToQuoteForm()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-lg shadow-[#D4A84F]/20 hover:shadow-xl hover:shadow-[#D4A84F]/30 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Discover Our Approach</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-gray-400">
                Tailored operational setup for hospitals, hotels & commercial sites.
              </span>
            </div>

          </div>

          {/* Right Column: Representative Digital Valet Smartphone Visual */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Phone Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[340px] rounded-[40px] bg-[#0E1B26] p-4 border-[6px] border-[#1C2C3A] shadow-2xl shadow-black/60">
              
              {/* Phone Speaker / Dynamic Island Notch */}
              <div className="w-24 h-4 bg-[#1C2C3A] rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-1 bg-[#2C3E50] rounded-full" />
              </div>

              {/* WhatsApp App Mock Header */}
              <div className="bg-[#075E54] text-white p-3 rounded-2xl mb-3 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white p-1 flex items-center justify-center overflow-hidden shrink-0">
                    <Image
                      src="/images/trimurti-symbol.png"
                      alt="Trimurti Enterprises"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-bold leading-none">Trimurti Valet</p>
                      <Check className="w-3 h-3 text-[#25D366] stroke-[3]" />
                    </div>
                    <span className="text-[10px] text-emerald-200">Verified Business</span>
                  </div>
                </div>
                <WhatsAppIcon className="w-4 h-4 fill-white" />
              </div>

              {/* WhatsApp Chat Area */}
              <div className="bg-[#ECE5DD] dark:bg-[#0B141B] p-3 rounded-2xl space-y-3 min-h-[380px] flex flex-col justify-center text-[#17202A] dark:text-gray-100">
                
                {/* Security Bubble */}
                <div className="text-center">
                  <span className="inline-block bg-[#FFF2D6] dark:bg-[#1E2B33] text-amber-900 dark:text-amber-200 text-[10px] px-2.5 py-1 rounded-md font-medium shadow-2xs">
                    Official Trimurti Enterprises Valet Ticket
                  </span>
                </div>

                {/* Digital Ticket Message Bubble */}
                <div className="bg-white dark:bg-[#1F2C34] rounded-2xl rounded-tl-sm p-4 shadow-md border border-gray-200 dark:border-gray-700/60 space-y-3">
                  
                  {/* Ticket Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-700/80 pb-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#0B1F33] flex items-center justify-center text-[#D4A84F]">
                        <Car className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-[#0B1F33] dark:text-[#D4A84F] tracking-tight">
                        Digital Valet Ticket
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-extrabold text-[#0B1F33] dark:text-white bg-[#D4A84F]/20 px-2 py-0.5 rounded-md">
                      #TE-4820
                    </span>
                  </div>

                  {/* Vehicle Information */}
                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Vehicle Status:</span>
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Safely Parked
                      </span>
                    </div>
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Valet Desk:</span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">Main Facility Reception</span>
                    </div>
                    <div className="flex justify-between text-gray-500 dark:text-gray-400">
                      <span>Handover Time:</span>
                      <span className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        Today, 11:42 AM
                      </span>
                    </div>
                  </div>

                  {/* Assurance Callout */}
                  <div className="bg-[#F5F7FA] dark:bg-[#111B21] p-2.5 rounded-xl border border-gray-200/80 dark:border-gray-800 text-[10px] text-gray-600 dark:text-gray-300 leading-snug">
                    <p className="font-medium">
                      Your vehicle is parked under professional Trimurti valet supervision. Present this digital ticket to our attendants upon retrieval.
                    </p>
                  </div>

                  {/* Message Timestamp & Double Blue Tick */}
                  <div className="flex items-center justify-end gap-1 pt-1 text-[10px] text-gray-400">
                    <span>11:42 AM</span>
                    <span className="text-[#34B7F1] font-bold">✓✓</span>
                  </div>

                </div>

                {/* Instant Verification Tag */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>No paper loss • Immediate WhatsApp delivery</span>
                </div>

              </div>

            </div>

            {/* Representative Visualization Disclaimer */}
            <p className="text-[11px] text-gray-400 mt-4 text-center max-w-xs leading-normal">
              Representative visualization of Trimurti Enterprises&apos; digital WhatsApp valet ticket delivery.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
