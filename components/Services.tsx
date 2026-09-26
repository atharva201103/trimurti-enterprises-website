"use client";

import Image from "next/image";
import {
  Car,
  ShieldCheck,
  HeartPulse,
  Building2,
  UtensilsCrossed,
  CalendarClock,
  Check,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SERVICES, getWhatsAppUrl } from "@/lib/constants";
import { scrollToQuoteForm } from "@/lib/utils";

export default function Services() {
  const whatsappUrl = getWhatsAppUrl();

  const iconMap: Record<string, React.ElementType> = {
    Car,
    ShieldCheck,
    HeartPulse,
    Building2,
    UtensilsCrossed,
    CalendarClock,
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F5F7FA] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A84F]/15 border border-[#D4A84F]/40 text-[#966F23] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Service Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            Our Parking & Valet Services
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            Professional parking solutions designed around the needs of organizations and their customers.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Car;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#D4A84F]/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-[#071521]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33] via-[#0B1F33]/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#0B1F33]/90 backdrop-blur-md border border-[#D4A84F]/40 text-[#D4A84F] flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-[#D4A84F] font-semibold mb-0.5">
                      {service.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-[#5B6573] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#17202A]">
                          <span className="w-4 h-4 rounded-full bg-[#D4A84F]/15 flex items-center justify-center text-[#D4A84F] shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => scrollToQuoteForm(service.title)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1F33] group-hover:text-[#D4A84F] transition-colors cursor-pointer"
                    >
                      <span>Inquire for This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Services CTA */}
        <div className="mt-14 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#0B1F33] text-white border border-[#D4A84F]/30 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Have Specific Site or Volume Requirements?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Connect directly with our operations leadership on WhatsApp to review custom facility needs.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            title="Discuss your parking requirements on WhatsApp (+91 98228 33831)"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white" />
            <span>Discuss Your Parking Requirements</span>
          </a>
        </div>

      </div>
    </section>
  );
}
