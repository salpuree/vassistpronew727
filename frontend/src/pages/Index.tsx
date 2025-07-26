import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import IndustryExpertiseSection from "@/components/IndustryExpertiseSection";
import SocialProofSection from "@/components/SocialProofSection";
import ROICalculatorSection from "@/components/ROICalculatorSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="case-studies">
          <CaseStudiesSection />
        </section>
        <section id="how-we-work">
          <HowWeWorkSection />
        </section>
        <section id="packages">
          <ServicePackagesSection />
        </section>
        <section id="roi-calculator">
          <ROICalculatorSection />
        </section>
        <section id="industry-expertise">
          <IndustryExpertiseSection />
        </section>
        <section id="social-proof">
          <SocialProofSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
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
