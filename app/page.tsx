import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import Services from "@/components/Services";
import TechnologyValet from "@/components/TechnologyValet";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <About />
        <Services />
        <TechnologyValet />
        <Industries />
        <WhyChooseUs />
        <Clients />
        <Gallery />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
