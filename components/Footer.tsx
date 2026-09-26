import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowUp } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { COMPANY_INFO, NAV_LINKS, SERVICES, getWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="bg-[#071521] text-white border-t border-[#D4A84F]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Company Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#hero" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md shadow-black/25 group-hover:scale-105 transition-transform overflow-hidden border border-[#D4A84F]/40 shrink-0">
                <Image
                  src="/images/trimurti-symbol.png"
                  alt="Trimurti Enterprises Symbol"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#D4A84F] transition-colors">
                  Trimurti <span className="text-[#D4A84F]">Enterprises</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-gray-400 font-medium">
                  Parking & Valet Management Services
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm pt-2">
              Trimurti Enterprises provides professional parking management and valet parking services for hospitals, hotels, businesses, commercial establishments, and events.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all"
                title="Chat with Trimurti Enterprises on WhatsApp (+91 98228 33831)"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A84F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D4A84F] transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A84F] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#services`}
                    className="hover:text-[#D4A84F] transition-colors inline-block line-clamp-1"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4A84F] mb-4">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4A84F] shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="hover:text-[#D4A84F] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D4A84F] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#D4A84F] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="pt-2 text-xs text-[#D4A84F]">
                {COMPANY_INFO.hours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Trimurti Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corporate Parking & Valet Management</span>
            <a
              href="#hero"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-[#D4A84F] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
