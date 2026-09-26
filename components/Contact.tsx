"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Building2,
  ExternalLink,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  COMPANY_INFO,
  SERVICES,
  getWhatsAppUrl,
  getWhatsAppInquiryUrl,
  getEmailInquiryUrl,
  INQUIRY_EMAIL_TARGET,
  ServiceInquiryPayload,
} from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  organization: z.string().min(2, "Please enter your organization or establishment name"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number format"),
  email: z.string().email("Please enter a valid corporate or business email address"),
  serviceRequired: z.string().min(1, "Please select the service you require"),
  message: z.string().min(10, "Please provide a brief description of your parking requirement"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ServiceInquiryPayload | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceRequired: "Valet Parking",
    },
  });

  useEffect(() => {
    const handleOpenQuoteForm = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      setIsSubmitted(false);
      if (customEvent.detail?.service) {
        setValue("serviceRequired", customEvent.detail.service);
      }
    };

    window.addEventListener("open-quote-form", handleOpenQuoteForm);
    return () => window.removeEventListener("open-quote-form", handleOpenQuoteForm);
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    setSubmittedData(data);

    try {
      // 1. Send inquiry to Trimurti Business Email via server API
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error("API dispatch error:", err);
    }

    setSubmitting(false);
    setIsSubmitted(true);

    // 2. Open WhatsApp conversation with pre-filled inquiry text
    if (typeof window !== "undefined") {
      const waUrl = getWhatsAppInquiryUrl(data);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }

    reset();
  };

  const whatsappUrl = getWhatsAppUrl();

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1F33]/5 border border-[#0B1F33]/15 text-[#0B1F33] text-xs font-semibold uppercase tracking-wider mb-3">
            Corporate Inquiries & Site Evaluation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#17202A] tracking-tight mb-4">
            Let&apos;s Discuss Your Parking Requirements
          </h2>
          <p className="text-base sm:text-lg text-[#5B6573] leading-relaxed">
            Connect with our operations leadership to evaluate your facility&apos;s parking, valet, or traffic management requirements. Designed specifically for organizations, property heads, and administration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Inquiry Form */}
          <div id="service-quote-form" className="lg:col-span-7 bg-[#F5F7FA] p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-lg scroll-mt-28">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#17202A] mb-1">
                Request a Service Proposal
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6573]">
                Provide your details below, and an operations manager will contact you promptly.
              </p>
            </div>

            {isSubmitted && submittedData ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4A84F]/40 shadow-sm animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#D4A84F]/15 text-[#D4A84F] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h4 className="text-xl font-bold text-[#17202A] text-center mb-1">
                  Inquiry Received
                </h4>
                <p className="text-xs sm:text-sm text-[#5B6573] text-center max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-[#17202A]">{submittedData.name}</span>. Your inquiry has been routed to Trimurti Enterprises (<span className="text-[#0B1F33] font-medium">{INQUIRY_EMAIL_TARGET}</span>) and our Business WhatsApp (<span className="text-[#0B1F33] font-medium">+91 98228 33831</span>).
                </p>

                {/* Submitted Details Review Card */}
                <div className="bg-[#F5F7FA] rounded-xl p-4 sm:p-5 border border-gray-200 mb-6 text-xs sm:text-sm space-y-2.5">
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500 font-medium">Name:</span>
                    <span className="font-bold text-[#17202A]">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500 font-medium">Organization:</span>
                    <span className="font-bold text-[#17202A]">{submittedData.organization}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500 font-medium">Phone:</span>
                    <span className="font-semibold text-[#0B1F33]">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500 font-medium">Email:</span>
                    <span className="text-[#17202A]">{submittedData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200/80 pb-2">
                    <span className="text-gray-500 font-medium">Service:</span>
                    <span className="font-semibold text-[#D4A84F]">{submittedData.serviceRequired}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-gray-500 font-medium block mb-1">Requirement Details:</span>
                    <p className="text-xs text-gray-700 bg-white p-3 rounded-lg border border-gray-200 leading-relaxed whitespace-pre-wrap">{submittedData.message}</p>
                  </div>
                </div>

                {/* Dual Immediate Action Buttons */}
                <div className="space-y-3 mb-6">
                  <a
                    href={getWhatsAppInquiryUrl(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Send via WhatsApp (+91 98228 33831)</span>
                  </a>

                  <a
                    href={getEmailInquiryUrl(submittedData)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0B1F33] bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#D4A84F]" />
                    <span>Email Directly to {INQUIRY_EMAIL_TARGET}</span>
                  </a>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedData(null);
                    }}
                    className="text-xs font-semibold text-gray-500 hover:text-[#0B1F33] underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" suppressHydrationWarning>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="quote-name-input" className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="quote-name-input"
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      suppressHydrationWarning
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.name ? "border-red-500" : "border-gray-200"
                      } text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                      Organization / Facility *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apollo Hospital / Apex Tower"
                      suppressHydrationWarning
                      {...register("organization")}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.organization ? "border-red-500" : "border-gray-200"
                      } text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all`}
                    />
                    {errors.organization && (
                      <p className="text-xs text-red-500 mt-1">{errors.organization.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 12345"
                      suppressHydrationWarning
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.phone ? "border-red-500" : "border-gray-200"
                      } text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. administration@organization.com"
                      suppressHydrationWarning
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl bg-white border ${
                        errors.email ? "border-red-500" : "border-gray-200"
                      } text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                    Service Required *
                  </label>
                  <select
                    suppressHydrationWarning
                    {...register("serviceRequired")}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Comprehensive / Custom Parking Solution">Comprehensive / Custom Parking Solution</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#17202A] uppercase tracking-wider mb-1.5">
                    Parking Requirement & Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please mention your facility location, approximate vehicle capacity, peak hours, or specific valet needs..."
                    suppressHydrationWarning
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl bg-white border ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } text-sm text-[#17202A] focus:outline-none focus:ring-2 focus:ring-[#D4A84F] transition-all`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-[#D4A84F] to-[#E59A2F] hover:from-[#E59A2F] hover:to-[#D4A84F] text-[#071521] shadow-lg shadow-[#D4A84F]/25 hover:shadow-xl hover:shadow-[#D4A84F]/35 transition-all disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Processing Submission...</span>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-gray-500 mt-2">
                  * Direct B2B service consultation. We respect client confidentiality.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, WhatsApp, and Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="p-8 rounded-3xl bg-[#0B1F33] text-white border border-[#D4A84F]/30 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
                <Building2 className="w-5 h-5 text-[#D4A84F]" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A84F] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Telephone / Mobile
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-sm font-semibold text-white hover:text-[#D4A84F] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      WhatsApp Business ({COMPANY_INFO.whatsappDisplay})
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 transition-all hover:scale-[1.02]"
                      title="Chat with Trimurti Enterprises on WhatsApp (+91 98228 33831)"
                    >
                      <span>Chat With Us on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A84F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Official Inquiries
                    </p>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-medium text-white hover:text-[#D4A84F] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4A84F] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                      Operations Coverage
                    </p>
                    <p className="text-sm text-gray-200">
                      {COMPANY_INFO.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Assurance */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3.5 text-xs text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D4A84F] shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <p className="leading-relaxed">
                    Direct B2B engagement. Our operations leadership coordinates site evaluations and customized parking proposals tailored to your facility volume.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
