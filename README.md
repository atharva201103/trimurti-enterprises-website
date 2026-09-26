# Trimurti Enterprises — Corporate Website

A production-ready corporate profile and lead-generation website for **Trimurti Enterprises**, a professional parking and valet parking management company.

> **Note**: This is the public corporate website designed to introduce the company, showcase services, demonstrate credibility, and generate business inquiries. It is **not** the internal operational software.

---

## 🏛️ Brand & Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Inter & Plus Jakarta Sans via `next/font`
- **Deployment Target**: Vercel

---

## 🎨 Color Palette

| Name | Hex Code | Purpose |
|---|---|---|
| **Deep Navy** | `#0B1F33` | Primary corporate brand background & cards |
| **Dark Navy** | `#071521` | Deep base, hero, and footer background |
| **Professional Gold** | `#D4A84F` | Primary accent, CTA highlights, badges |
| **Warm Gold / Orange** | `#E59A2F` | Hover states and gradient accents |
| **Light Gray** | `#F5F7FA` | Alternating section backgrounds |
| **Primary Text** | `#17202A` | Crisp, high-contrast headings & text |
| **Secondary Text** | `#5B6573` | Accessible paragraph copy |

---

## 🧭 Page Architecture & Components

- `components/Navbar.tsx`: Sticky responsive navbar with corporate branding, WhatsApp direct link, quote CTA, and mobile drawer.
- `components/Hero.tsx`: Corporate hero banner with high-resolution valet photography, strong typography, and primary CTAs.
- `components/TrustSection.tsx`: Core operational credibility introduction.
- `components/About.tsx`: Split-layout company profile detailing organized operations and client coordination.
- `components/Services.tsx`: 6 core services (Valet Parking, Parking Management, Hospital Parking, Corporate Parking, Hotel/Restaurant Valet, Event Parking).
- `components/Industries.tsx`: 8 key industries served (Healthcare, Hospitality, Dining, Corporate Offices, Commercial, Retail, Residential, Events).
- `components/WhyChooseUs.tsx`: 9 verified operational pillars without fabricated statistics.
- `components/Clients.tsx`: Healthcare and corporate deployment experience with confidential reference inquiry options.
- `components/Gallery.tsx`: Operations gallery with category filtering and an interactive full-screen Lightbox modal.
- `components/Testimonials.tsx`: Institutional review policy component prepared for genuine client endorsement letters.
- `components/CTA.tsx`: Dark navy & gold high-conversion corporate call to action.
- `components/Contact.tsx`: B2B inquiry form validated via Zod + React Hook Form with direct server-side email dispatch to `trimurtienterprises0111@gmail.com` and instant WhatsApp notification to `+91 98228 33831`.
- `components/FloatingWhatsApp.tsx`: Fixed floating WhatsApp action button with tooltip and pre-filled inquiry text.
- `app/api/contact/route.ts`: API endpoint handling validation, email composition, and SMTP/Nodemailer delivery.
- `components/Footer.tsx`: Corporate footer with quick navigation, service links, contact details, and copyright.

---

## 📬 Service Inquiry Notification System

The website's **Request a Service Proposal** form features a dual-channel notification pipeline:

1. **Email Notification Target**:
   - **Recipient**: `trimurtienterprises0111@gmail.com`
   - **Subject**: `New Service Inquiry – Trimurti Enterprises`
   - **Fields Captured**: Client Name, Organization, Phone Number, Corporate Email, Service Required, Requirement Details.

2. **WhatsApp Business Notification**:
   - **Number**: `+91 98228 33831` (`919822833831`)
   - **Pre-filled Message**: Pre-formats all submitted client details into a structured WhatsApp message for 1-tap dispatch by the client.

3. **Optional Direct SMTP Configuration**:
   To send automated transactional emails directly via Gmail or custom SMTP, add the following to `.env.local`:
   ```env
   GMAIL_USER=trimurtienterprises0111@gmail.com
   GMAIL_APP_PASSWORD=your_16_digit_app_password
   ```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📝 Updating Business Information

All business details are centralized in:

```
lib/constants.ts
```

- **Business WhatsApp**: `+91 98228 33831` (`919822833831`)
- **Business Email**: `trimurtienterprises0111@gmail.com`
- **Default WhatsApp Message**: `"Hello Trimurti Enterprises, I would like to know more about your parking and valet services."`
