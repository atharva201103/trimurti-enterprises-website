export const WHATSAPP_NUMBER = "919822833831";
export const WHATSAPP_DISPLAY = "+91 98228 33831";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Trimurti Enterprises, I would like to know more about your parking and valet services.";

export const getWhatsAppUrl = (customMessage?: string) => {
  const msg = customMessage || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const INQUIRY_EMAIL_TARGET = "trimurtienterprises0111@gmail.com";
export const INQUIRY_EMAIL_SUBJECT = "New Service Inquiry – Trimurti Enterprises";

export interface ServiceInquiryPayload {
  name: string;
  organization: string;
  phone: string;
  email: string;
  serviceRequired: string;
  message: string;
}

export const formatWhatsAppInquiryMessage = (data: ServiceInquiryPayload) => {
  return `*New Service Inquiry – Trimurti Enterprises*\n\n` +
    `*Name:* ${data.name}\n` +
    `*Organization:* ${data.organization}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Email:* ${data.email}\n` +
    `*Service Required:* ${data.serviceRequired}\n\n` +
    `*Requirement Details:*\n${data.message}`;
};

export const getWhatsAppInquiryUrl = (data: ServiceInquiryPayload) => {
  const text = formatWhatsAppInquiryMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
};

export const getEmailInquiryUrl = (data: ServiceInquiryPayload) => {
  const body =
    `New Service Inquiry – Trimurti Enterprises\n\n` +
    `Name: ${data.name}\n` +
    `Organization: ${data.organization}\n` +
    `Phone: ${data.phone}\n` +
    `Email: ${data.email}\n` +
    `Service Required: ${data.serviceRequired}\n\n` +
    `Requirement Details:\n${data.message}\n`;
  return `mailto:${INQUIRY_EMAIL_TARGET}?subject=${encodeURIComponent(INQUIRY_EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
};

export const COMPANY_INFO = {
  name: "Trimurti Enterprises",
  legalName: "Trimurti Enterprises",
  tagline: "Professional Parking & Valet Management Services",
  shortDesc:
    "Reliable and organized parking solutions for hospitals, businesses, hotels, commercial establishments, and other organizations.",
  phone: "+91 98228 33831",
  phoneRaw: "+919822833831",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: WHATSAPP_DISPLAY,
  whatsappMessage: WHATSAPP_DEFAULT_MESSAGE,
  whatsappUrl: getWhatsAppUrl(),
  email: INQUIRY_EMAIL_TARGET,
  hours: "24/7 Operations & Management Support",
};

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Software", href: "#software" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Software", href: "#software" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logo?: string;
}

export const CLIENTS: ClientItem[] = [
  {
    id: "sahyadri-kothrud",
    name: "Sahyadri Hospital – Kothrud",
    category: "Healthcare & Hospital",
    logo: "/images/clients/sahyadri-logo.png",
  },
  {
    id: "sahyadri-bibwewadi",
    name: "Sahyadri Hospital – Bibwewadi",
    category: "Healthcare & Hospital",
    logo: "/images/clients/sahyadri-logo.png",
  },
  {
    id: "sahyadri-deccan",
    name: "Sahyadri Hospital – Deccan",
    category: "Healthcare & Hospital",
    logo: "/images/clients/sahyadri-logo.png",
  },
  {
    id: "joshi-hospital",
    name: "Joshi Hospital",
    category: "Healthcare & Hospital",
    logo: "/images/clients/joshi-logo.png",
  },
  {
    id: "ratna-hospital",
    name: "Ratna Hospital",
    category: "Healthcare & Hospital",
    logo: "/images/clients/ratna-logo.png",
  },
  {
    id: "eye-care-hospital",
    name: "Eye Care Hospital",
    category: "Healthcare & Hospital",
  },
];

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "valet-parking",
    title: "Valet Parking",
    tagline: "Courteous vehicle reception and prompt handover",
    description:
      "Professional valet services where trained, uniformed staff receive, park, retrieve, and hand over customer vehicles with meticulous care and hospitality.",
    iconName: "Car",
    image: "/images/service-valet.jpg",
    features: [
      "Trained and uniformed valet attendants",
      "Courteous vehicle reception and greeting",
      "Safe driving and vehicle handling protocols",
      "Seamless key custody and prompt handover",
    ],
  },
  {
    id: "parking-management",
    title: "Parking Management",
    tagline: "End-to-end operational oversight for parking facilities",
    description:
      "Complete parking management services for organizations and establishments to maximize space utilization, traffic flow, and parking area discipline.",
    iconName: "ShieldCheck",
    image: "/images/service-management.jpg",
    features: [
      "Structured traffic circulation and lane management",
      "Optimized parking space allocation",
      "On-site supervisory staff and marshaling",
      "Continuous facility monitoring and order",
    ],
  },
  {
    id: "hospital-parking",
    title: "Hospital Parking Services",
    tagline: "Empathetic, expedited assistance for patients and visitors",
    description:
      "Dedicated parking and valet support for hospitals and healthcare centers where rapid vehicle turnover, emergency accessibility, and patient convenience are crucial.",
    iconName: "HeartPulse",
    image: "/images/service-hospital.jpg",
    features: [
      "Immediate assistance for arriving patients & families",
      "Priority clearance for emergency drop-off bays",
      "Sensitive and patient-first staff training",
      "High-turnover parking space optimization",
    ],
  },
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Parking",
    tagline: "Executive parking standards for modern workplaces",
    description:
      "Structured parking operations tailored for corporate headquarters, IT parks, commercial complexes, and business towers with heavy peak-hour traffic.",
    iconName: "Building2",
    image: "/images/service-corporate.jpg",
    features: [
      "Executive and visitor vehicle management",
      "Morning arrival and evening departure flow control",
      "Dedicated corporate bay coordination",
      "Professional liaison with facility administration",
    ],
  },
  {
    id: "hotel-restaurant",
    title: "Hotel & Restaurant Valet",
    tagline: "Elevating hospitality impressions from the first moment",
    description:
      "Polished valet parking services for luxury hotels, fine dining restaurants, and banquet venues designed to reflect your establishment's hospitality standards.",
    iconName: "UtensilsCrossed",
    image: "/images/service-hotel.jpg",
    features: [
      "Pristine grooming and hospitality etiquette",
      "Door-opening and guest luggage assistance",
      "Orderly porte-cochère queue management",
      "Smooth coordination during peak dining hours",
    ],
  },
  {
    id: "event-parking",
    title: "Event Parking",
    tagline: "Flawless staging and marshaling for special gatherings",
    description:
      "Specialized vehicle management and valet deployment for corporate galas, conferences, high-profile weddings, and large-scale public or private functions.",
    iconName: "CalendarClock",
    image: "/images/service-event.jpg",
    features: [
      "Rapid deployment of temporary valet teams",
      "Dynamic ingress and egress traffic plans",
      "High-density staging area coordination",
      "Guest arrival comfort in all weather conditions",
    ],
  },
];

export interface IndustryItem {
  name: string;
  description: string;
  iconName: string;
}

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "Healthcare & Hospitals",
    description:
      "Reliable patient reception and unobstructed emergency drop-off zones.",
    iconName: "Hospital",
  },
  {
    name: "Hotels & Hospitality",
    description:
      "First-class arrival experience reflecting five-star hospitality standards.",
    iconName: "Hotel",
  },
  {
    name: "Restaurants & Fine Dining",
    description:
      "Hassle-free parking allowing guests to focus purely on their dining experience.",
    iconName: "Utensils",
  },
  {
    name: "Corporate Offices & IT Parks",
    description:
      "Disciplined vehicular flow for employees, executives, and business guests.",
    iconName: "Briefcase",
  },
  {
    name: "Commercial Properties",
    description:
      "Structured parking circulation for mixed-use business facilities.",
    iconName: "Building",
  },
  {
    name: "Shopping Centers & Retail",
    description:
      "Effortless shopper access and orderly weekend volume management.",
    iconName: "ShoppingBag",
  },
  {
    name: "Residential Communities",
    description:
      "Organized guest and resident parking oversight for premium complexes.",
    iconName: "Home",
  },
  {
    name: "Events & Venues",
    description:
      "High-capacity event vehicle management and dedicated valet coordination.",
    iconName: "Sparkles",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Professional Parking Staff",
    description:
      "Uniformed, courteous, and thoroughly vetted personnel trained in safe driving and respectful customer interaction.",
    iconName: "UserCheck",
  },
  {
    title: "Organized Parking Operations",
    description:
      "Structured traffic circulation and designated bay management that prevents bottlenecks and vehicular gridlock.",
    iconName: "Layers",
  },
  {
    title: "Customer-Focused Service",
    description:
      "Polite reception, prompt assistance, and a warm first impression for your guests, patients, and corporate visitors.",
    iconName: "Smile",
  },
  {
    title: "Efficient Vehicle Handling",
    description:
      "Disciplined vehicle reception, systematic key custody, and timely handover minimizing wait times.",
    iconName: "Clock",
  },
  {
    title: "Reliable Valet Operations",
    description:
      "Dependable daily presence with supervised operational shifts and contingency readiness for peak hours.",
    iconName: "CheckCircle2",
  },
  {
    title: "Suitable for High-Volume Locations",
    description:
      "Engineered workflows designed to handle continuous traffic influx at hospitals, malls, and corporate towers.",
    iconName: "TrendingUp",
  },
  {
    title: "Customized Parking Solutions",
    description:
      "Every facility layout is unique; we tailor staff allocation and circulation blueprints to your specific site needs.",
    iconName: "Sliders",
  },
  {
    title: "Focus on Safety & Vehicle Care",
    description:
      "Strict zero-tolerance vehicle care standards, designated speed limits, and meticulous operational oversight.",
    iconName: "Shield",
  },
  {
    title: "Professional Client Coordination",
    description:
      "Direct regular communication with facility managers and administration for transparent, synchronized service.",
    iconName: "Handshake",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "1",
    title: "Valet Arrival & Reception",
    category: "Valet Services",
    image: "/images/hero-valet.jpg",
    caption:
      "Courteous reception and vehicle intake at commercial facility entrance.",
  },
  {
    id: "2",
    title: "On-Site Operations Management",
    category: "Management",
    image: "/images/about-operations.jpg",
    caption:
      "Supervisors and uniformed attendants maintaining organized entryway lanes.",
  },
  {
    id: "3",
    title: "Healthcare & Hospital Drop-off",
    category: "Healthcare",
    image: "/images/service-hospital.jpg",
    caption:
      "Expedited patient receiving and orderly vehicle handover at hospital portal.",
  },
  {
    id: "4",
    title: "Corporate Campus Coordination",
    category: "Corporate",
    image: "/images/service-corporate.jpg",
    caption:
      "Executive vehicle marshaling and drop-off staging for commercial towers.",
  },
  {
    id: "5",
    title: "Hospitality & Restaurant Valet",
    category: "Hospitality",
    image: "/images/service-hotel.jpg",
    caption:
      "Five-star arrival etiquette and guest assistance at luxury dining entrances.",
  },
  {
    id: "6",
    title: "Event & Gala Vehicle Staging",
    category: "Events",
    image: "/images/service-event.jpg",
    caption:
      "Seamless guest arrival coordination and marshaled parking for major functions.",
  },
  {
    id: "7",
    title: "Organized Multi-Tier Facility",
    category: "Facilities",
    image: "/images/gallery-lot.jpg",
    caption:
      "Clean, marked driving lanes and organized vehicular staging within parking structures.",
  },
  {
    id: "8",
    title: "Courteous Vehicle Handover",
    category: "Valet Services",
    image: "/images/gallery-handover.jpg",
    caption:
      "Professional key return and polite departure assistance for patrons.",
  },
];
