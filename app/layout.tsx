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
  metadataBase: new URL("https://trimurtienterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trimurti Enterprises | Parking & Valet Management Services",
    description:
      "Reliable and organized parking solutions for hospitals, businesses, hotels, commercial establishments, and other organizations.",
    url: "https://trimurtienterprises.com",
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
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-[#17202A] selection:bg-[#D4A84F] selection:text-[#071521] font-sans"
      >
        {children}
      </body>
    </html>
  );
}
