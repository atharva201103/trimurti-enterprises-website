import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B1F33",
};

export const metadata: Metadata = {
  title: "Trimurti Enterprises | Parking & Valet Management Services",
  description:
    "Trimurti Enterprises provides professional parking management and valet parking services for hospitals, hotels, businesses, commercial properties, events, and organizations.",
  keywords: [
    "Parking management services",
    "Valet parking services",
    "Professional valet services",
    "Hospital parking services",
    "Corporate parking management",
    "Commercial parking services",
    "Event parking management",
    "Commercial valet management",
    "Facility traffic operations",
  ],
  authors: [{ name: "Trimurti Enterprises" }],
  creator: "Trimurti Enterprises",
  publisher: "Trimurti Enterprises",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://trimurtiienterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trimurti Enterprises | Parking & Valet Management Services",
    description:
      "Reliable and organized parking solutions for hospitals, businesses, hotels, commercial establishments, and other organizations.",
    url: "https://trimurtiienterprises.com",
    siteName: "Trimurti Enterprises",
    images: [
      {
        url: "/images/hero-valet.jpg",
        width: 1200,
        height: 630,
        alt: "Trimurti Enterprises - Professional Parking & Valet Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trimurti Enterprises | Parking & Valet Management Services",
    description:
      "Professional parking management and valet parking services for hospitals, hotels, businesses, and commercial properties.",
    images: ["/images/hero-valet.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://trimurtiienterprises.com/#organization",
      name: "Trimurti Enterprises",
      legalName: "Trimurti Enterprises",
      url: "https://trimurtiienterprises.com",
      logo: "https://trimurtiienterprises.com/images/trimurti-symbol.png",
      description:
        "Trimurti Enterprises provides professional parking management and valet parking services for hospitals, hotels, businesses, commercial properties, events, and organizations.",
      telephone: "+91 98228 33831",
      email: "trimurtienterprises0111@gmail.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 98228 33831",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Marathi"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Parking and Valet Management Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Valet Parking Services",
              description:
                "Courteous vehicle reception, organized parking, and prompt vehicle retrieval by trained attendants.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hospital Parking Management",
              description:
                "Dedicated healthcare valet and emergency entrance traffic management for medical centers and hospitals.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Corporate Parking Management",
              description:
                "Organized daily parking operations, executive valet, and visitor parking for corporate facilities.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Commercial & Event Parking",
              description:
                "High-volume traffic control, parking marshals, and seamless guest arrival operations for events.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technology-Enabled Valet Management",
              description:
                "Digital vehicle check-in, SMS/WhatsApp ticketing, vehicle retrieval requests, and real-time operational tracking.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://trimurtiienterprises.com/#website",
      url: "https://trimurtiienterprises.com",
      name: "Trimurti Enterprises",
      description:
        "Professional Parking & Valet Management Services for hospitals, businesses, and events.",
      publisher: {
        "@id": "https://trimurtiienterprises.com/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[#17202A] selection:bg-[#D4A84F] selection:text-[#071521] font-sans"
      >
        {children}
      </body>
    </html>
  );
}
