import { ShieldCheck, MessageSquareQuote, CheckCircle2 } from "lucide-react";

// Set to true once verified, authenticated client letters of recommendation are supplied
const SHOW_TESTIMONIAL_CARDS = false;

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

const GENUINE_TESTIMONIALS: TestimonialItem[] = [
  // To be populated by client with real feedback
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#FFFFFF] relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-3">
            Client Verification & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            Our operational reputation is built on consistent daily execution, transparent coordination, and diligent vehicle care.
          </p>
        </div>

        {SHOW_TESTIMONIAL_CARDS && GENUINE_TESTIMONIALS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GENUINE_TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#F5F7FA] border border-gray-200/80 shadow-sm relative flex flex-col justify-between"
              >
                <MessageSquareQuote className="w-10 h-10 text-[#D4A84F]/40 mb-4" />
                <p className="text-sm text-[#17202A] leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div>
                  <h4 className="text-sm font-bold text-[#17202A]">{item.author}</h4>
                  <p className="text-xs text-[#5B6573]">{item.role}</p>
                  <p className="text-xs font-semibold text-[#D4A84F]">{item.organization}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Client Confidentiality & Reference Policy Card */
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-br from-[#F5F7FA] to-white border border-[#D4A84F]/30 shadow-sm text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1F33] text-[#D4A84F] flex items-center justify-center mx-auto mb-5 shadow-sm">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-[#17202A] mb-3">
              Institutional Privacy & Direct Verification
            </h3>

            <p className="text-sm sm:text-base text-[#5B6573] leading-relaxed mb-6 max-w-2xl mx-auto">
              Trimurti Enterprises respects the institutional confidentiality of our healthcare, commercial, and hospitality client organizations. Formal letters of reference, operational metrics, and facility coordinator contacts are provided directly to administrative evaluation committees upon request during proposal review.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#0B1F33] pt-4 border-t border-gray-200">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A84F]" />
                Direct Hospital References Available
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A84F]" />
                Commercial Facility Audit Compliance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A84F]" />
                Dedicated Supervisory Accountability
              </span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
