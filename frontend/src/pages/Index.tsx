import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
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
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="case-studies">
          <CaseStudiesPreviewSection />
        </section>
        <section id="packages">
          <ServicePackagesSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
