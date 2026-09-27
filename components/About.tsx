"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { scrollToQuoteForm } from "@/lib/utils";

export default function About() {
  const highlights = [
    {
      title: "Professional Parking Management",
      desc: "Comprehensive operational oversight that regulates parking bays, enforces orderly circulation, and maintains high standards across your premises.",
    },
    {
      title: "Organized Operations",
      desc: "Structured systems for vehicle intake, marshaling, lane direction, and designated staging zones that prevent bottlenecks.",
    },
    {
      title: "Customer-Focused Service",
      desc: "Attendants trained in courteous greeting, polite vehicle assistance, and helpful guest communication at every touchpoint.",
    },
    {
      title: "Efficient Vehicle Handling",
      desc: "Prompt reception, disciplined key custody, and rapid vehicle handover protocols designed to respect your patrons' time.",
    },
    {
      title: "Professional Staff",
      desc: "Neatly uniformed, well-groomed, and thoroughly briefed parking personnel committed to vehicle safety and road etiquette.",
    },
    {
      title: "Coordination with Client Organizations",
      desc: "Active collaboration with on-site facility heads, security coordinators, and administration teams to adapt to daily volume fluctuations.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Photography Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <Image
                src="/images/about-operations.jpg"
                alt="Trimurti Enterprises professional parking staff and operations team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071521]/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0B1F33]/90 backdrop-blur-md border border-[#D4A84F]/30 text-white">
                <p className="text-xs uppercase tracking-wider text-[#D4A84F] font-semibold">
                  On-Site Operations
                </p>
                <p className="text-sm font-medium text-gray-200">
                  Uniformed attendants and dedicated site supervisors working in synergy with your facility.
                </p>
              </div>
            </div>

            {/* Decorative background framing */}
            <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 border-2 border-[#D4A84F]/40 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#D4A84F]/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right: Company Information & Core Pillars */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-4">
              About Trimurti Enterprises
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight leading-tight mb-6">
              Professional Parking & Valet Management Dedicated to Operational Excellence
            </h2>

            <p className="text-base text-[#5B6573] leading-relaxed mb-6">
              Trimurti Enterprises provides professional parking management and valet parking services for organizations that require efficient, secure, and professional parking operations.
            </p>

            <p className="text-base text-[#5B6573] leading-relaxed mb-8">
              Whether welcoming patients at a major healthcare hospital, receiving executives at a commercial center, or managing high-volume patron traffic for hospitality venues, our disciplined teams ensure smooth vehicular movement and an elevated customer experience from entry to departure.
            </p>

            {/* Key Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F7FA] border border-gray-100 hover:border-[#D4A84F]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A84F] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#17202A] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B6573] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider bg-[#0B1F33] hover:bg-[#071521] text-white shadow-md hover:shadow-lg transition-all"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-[#D4A84F]" />
              </Link>

              <button
                type="button"
                onClick={() => scrollToQuoteForm()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#0B1F33] bg-transparent hover:bg-gray-100 border border-gray-300 transition-all cursor-pointer"
              >
                <span>Contact Management</span>
              </button>
            </div>
          </div>

        </div>

        {/* Leadership / Promoters Subsection */}
        <div className="mt-16 pt-12 border-t border-gray-200/80">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-3">
              Leadership
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#17202A] tracking-tight">
              Leadership / Promoters
            </h3>
            <p className="text-sm text-[#5B6573] mt-2">
              Trimurti Enterprises is guided by dedicated promoter leadership committed to professional operations, dependable service, and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {/* Dattatray Shankarrao Bedre */}
            <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-200/80 shadow-xs hover:border-[#D4A84F]/50 transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33] text-[#D4A84F] flex items-center justify-center font-bold text-base shadow-sm shrink-0 group-hover:scale-105 transition-transform border border-[#D4A84F]/30">
                DB
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#17202A] leading-snug">
                  Dattatray Shankarrao Bedre
                </h4>
                <p className="text-xs sm:text-sm text-[#966F23] font-semibold mt-0.5">
                  Promoter / Owner
                </p>
              </div>
            </div>

            {/* Shivam Dattatray Bedre */}
            <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-200/80 shadow-xs hover:border-[#D4A84F]/50 transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F33] text-[#D4A84F] flex items-center justify-center font-bold text-base shadow-sm shrink-0 group-hover:scale-105 transition-transform border border-[#D4A84F]/30">
                SB
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#17202A] leading-snug">
                  Shivam Dattatray Bedre
                </h4>
                <p className="text-xs sm:text-sm text-[#966F23] font-semibold mt-0.5">
                  Promoter / Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
