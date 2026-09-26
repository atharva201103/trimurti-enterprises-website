import {
  UserCheck,
  Layers,
  Smile,
  Clock,
  CheckCircle2,
  TrendingUp,
  Sliders,
  Shield,
  Handshake,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ElementType> = {
    UserCheck,
    Layers,
    Smile,
    Clock,
    CheckCircle2,
    TrendingUp,
    Sliders,
    Shield,
    Handshake,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#071521] text-white relative overflow-hidden">
      {/* Subtle ambient gold glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A84F]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33] border border-[#D4A84F]/30 text-[#D4A84F] text-xs font-semibold uppercase tracking-wider mb-3">
            Operational Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Why Organizations Choose Professional Parking Management
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            Managing parking internally often leads to bottlenecks, staff diversion, and disorganized drop-offs. Trimurti Enterprises delivers dedicated, disciplined operations that protect your brand and delight visitors.
          </p>
        </div>

        {/* 9 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.iconName] || Shield;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-2xl bg-[#0B1F33]/80 hover:bg-[#0B1F33] border border-white/10 hover:border-[#D4A84F]/40 shadow-lg hover:shadow-2xl hover:shadow-[#D4A84F]/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A84F]/20 to-[#E59A2F]/10 text-[#D4A84F] border border-[#D4A84F]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#D4A84F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom accent line */}
                <div className="w-0 group-hover:w-12 h-0.5 bg-[#D4A84F] mt-5 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
