"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  COMPANY_INFO,
  NAV_LINKS,
  MOBILE_NAV_LINKS,
  getWhatsAppUrl,
} from "@/lib/constants";
import { scrollToQuoteForm } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    if (href === "#contact") {
      e.preventDefault();
      scrollToQuoteForm();
    } else if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-[#0B1F33]/98 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-[#D4A84F]/20"
            : "bg-gradient-to-b from-[#071521]/90 via-[#071521]/60 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <Link
              href="#hero"
              onClick={(e) => {
                if (mobileMenuOpen) setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <div className="w-[42px] h-[42px] sm:w-[48px] sm:h-[48px] lg:w-[46px] lg:h-[46px] xl:w-[50px] xl:h-[50px] rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md shadow-black/25 group-hover:scale-105 transition-transform overflow-hidden border border-[#D4A84F]/50 shrink-0">
                <Image
                  src="/images/trimurti-symbol.png"
                  alt="Trimurti Enterprises Symbol"
                  width={50}
                  height={50}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center shrink-0">
                <span className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold tracking-tight text-white group-hover:text-[#D4A84F] transition-colors leading-tight whitespace-nowrap">
                  Trimurti <span className="text-[#D4A84F]">Enterprises</span>
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] xl:text-xs tracking-wider uppercase text-gray-300 font-semibold mt-0.5 whitespace-nowrap">
                  Parking & Valet Management
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href === "#contact") {
                      e.preventDefault();
                      scrollToQuoteForm();
                    }
                  }}
                  className="text-[13px] xl:text-sm font-medium text-gray-200 hover:text-[#D4A84F] transition-colors relative py-1 whitespace-nowrap after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A84F] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 transition-all whitespace-nowrap shrink-0"
                title="Chat with Trimurti Enterprises on WhatsApp (+91 98228 33831)"
              >
                <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
                <span>WhatsApp<span className="hidden xl:inline"> Us</span></span>
              </a>

              <button
                type="button"
                onClick={() => scrollToQuoteForm()}
                className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 xl:py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-md shadow-[#D4A84F]/25 hover:shadow-lg hover:shadow-[#D4A84F]/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="hidden xl:inline">Get a Service Quote</span>
                <span className="xl:hidden">Get Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button Container */}
            <div className="flex lg:hidden items-center gap-2 shrink-0 relative z-30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-[#25D366] hover:text-white rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors touch-manipulation cursor-pointer"
                aria-label="WhatsApp Trimurti Enterprises"
                title="WhatsApp Trimurti Enterprises"
              >
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
              </a>

              <button
                type="button"
                id="mobile-hamburger-toggle"
                data-testid="mobile-hamburger-btn"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="w-11 h-11 flex items-center justify-center text-gray-200 hover:text-white active:text-[#D4A84F] hover:bg-white/10 active:bg-white/15 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-[#D4A84F] cursor-pointer touch-manipulation relative z-30"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#D4A84F]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-menu"
            aria-label="Mobile Navigation"
            className="lg:hidden relative z-50 bg-[#0B1F33] border-b border-[#D4A84F]/30 shadow-2xl px-4 pt-3 pb-6 max-h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {MOBILE_NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className="flex items-center justify-between px-3 py-3 text-base font-medium text-gray-100 hover:text-[#D4A84F] hover:bg-white/5 active:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-[#D4A84F]/70 text-sm font-semibold">→</span>
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                <span>WhatsApp Us (+91 98228 33831)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToQuoteForm();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-lg shadow-[#D4A84F]/20 cursor-pointer font-bold transition-all"
              >
                <span>Get a Service Quote</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 text-xs text-gray-400 py-1 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A84F]" />
                <span>Direct Call: {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile Backdrop Overlay - Click outside to close */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
