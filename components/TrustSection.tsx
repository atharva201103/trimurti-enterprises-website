import { ShieldCheck, ArrowRightLeft, Users, Building } from "lucide-react";

export default function TrustSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Disciplined Vehicle Handling",
      description:
        "Trained attendants adhering to rigorous vehicle custody protocols and careful maneuvering.",
    },
    {
      icon: ArrowRightLeft,
      title: "Optimized Traffic Flow",
      description:
        "Engineered vehicle circulation lanes that eliminate entry bottlenecks and parking congestion.",
    },
    {
      icon: Users,
      title: "Professional Staffing",
      description:
        "Uniformed, courteous, and supervised teams reflecting the prestige of your organization.",
    },
    {
      icon: Building,
      title: "Seamless Coordination",
      description:
        "Direct synchronization with your facility managers and administration for transparent operations.",
    },
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0B1F33] rounded-2xl border border-[#D4A84F]/25 shadow-xl shadow-black/25 p-6 sm:p-10 text-white backdrop-blur-xl">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <div className="inline-block text-[#D4A84F] text-xs font-semibold tracking-wider uppercase mb-2">
            Operations & Service Excellence
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            Professional Parking. Organized Operations. Better Customer Experience.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Trimurti Enterprises helps organizations manage parking and valet operations professionally. We transform congested driveways and disorganized parking bays into orderly, customer-friendly arrival experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-[#D4A84F]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#D4A84F]/15 flex items-center justify-center text-[#D4A84F] mb-4 group-hover:bg-[#D4A84F] group-hover:text-[#071521] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#D4A84F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
