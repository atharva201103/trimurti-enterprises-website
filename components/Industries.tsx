import {
  Hospital,
  Hotel,
  Utensils,
  Briefcase,
  Building,
  ShoppingBag,
  Home,
  Sparkles,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

export default function Industries() {
  const iconMap: Record<string, React.ElementType> = {
    Hospital,
    Hotel,
    Utensils,
    Briefcase,
    Building,
    ShoppingBag,
    Home,
    Sparkles,
  };

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-3">
            Sectors & Environments
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            Flexible parking and valet solutions for a wide range of organizations and locations.
          </p>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const Icon = iconMap[industry.iconName] || Building;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-[#F5F7FA] hover:bg-[#0B1F33] border border-gray-200/80 hover:border-[#D4A84F]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#D4A84F] border border-gray-200 group-hover:border-[#D4A84F] text-[#0B1F33] group-hover:text-[#071521] flex items-center justify-center mb-5 shadow-sm transition-all duration-300">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  <h3 className="text-lg font-bold text-[#17202A] group-hover:text-white mb-2 transition-colors">
                    {industry.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5B6573] group-hover:text-gray-300 leading-relaxed transition-colors">
                    {industry.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60 group-hover:border-white/10 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-[#0B1F33] group-hover:text-[#D4A84F] transition-colors">
                  <span>Custom Deployment</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
