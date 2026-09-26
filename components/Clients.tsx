import Image from "next/image";
import { Hospital } from "lucide-react";
import { CLIENTS } from "@/lib/constants";

export default function Clients() {
  return (
    <section id="clients" className="py-20 lg:py-24 bg-[#FFFFFF] relative border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-3">
            Client Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            Our Clients
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            Organizations that trust Trimurti Enterprises for professional parking and valet services.
          </p>
        </div>

        {/* 6 Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {CLIENTS.map((client) => (
            <div
              key={client.id}
              className="group relative p-7 rounded-2xl bg-[#F5F7FA] hover:bg-white border border-gray-200/90 hover:border-[#D4A84F]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[170px]"
            >
              {/* Header with Professional Healthcare Logo or Icon */}
              <div className="flex items-center justify-between mb-4">
                {client.logo ? (
                  <div className="h-14 w-40 px-3 py-1.5 bg-white rounded-xl border border-gray-200/90 shadow-xs flex items-center justify-center group-hover:border-[#D4A84F]/50 transition-colors overflow-hidden">
                    <Image
                      src={client.logo}
                      alt={`${client.name} official logo`}
                      width={140}
                      height={50}
                      className="object-contain max-h-11 w-auto"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-xl bg-[#0B1F33] text-[#D4A84F] flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:bg-[#071521] transition-all">
                    <Hospital className="w-7 h-7 stroke-[2]" />
                  </div>
                )}
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#966F23] bg-[#D4A84F]/15 px-2.5 py-1 rounded-full">
                  Healthcare
                </span>
              </div>

              {/* Exact Client Name */}
              <div>
                <h3 className="text-lg font-bold text-[#17202A] group-hover:text-[#0B1F33] tracking-tight transition-colors">
                  {client.name}
                </h3>
              </div>

              {/* Subtle Bottom Accent Indicator */}
              <div className="w-8 group-hover:w-full h-0.5 bg-[#D4A84F]/40 group-hover:bg-[#D4A84F] mt-4 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Supporting Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#F5F7FA] border border-gray-200 text-sm font-medium text-[#17202A] shadow-xs">
            <p>
              Serving healthcare organizations with professional and organized parking support.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
