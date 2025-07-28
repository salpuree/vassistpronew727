import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ServicesSection from "@/components/ServicesSection";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import CaseStudiesPreviewSection from "@/components/CaseStudiesPreviewSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        <div className="animate-fade-in">
          <ClientLogosSection />
        </div>
        <section id="services">
          <div className="animate-fade-in">
            <ServicesSection />
          </div>
        </section>
        <section id="case-studies">
          <div className="animate-fade-in">
            <CaseStudiesPreviewSection />
          </div>
        </section>
        <section id="packages">
          <div className="animate-fade-in">
            <ServicePackagesSection />
          </div>
        </section>
        <section id="testimonials">
          <div className="animate-fade-in">
            <TestimonialsSection />
          </div>
        </section>
        <section id="team">
          <div className="animate-fade-in">
            <TeamSection />
          </div>
        </section>
        <section id="contact">
          <div className="animate-fade-in">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
