import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import CollapsibleCaseStudies from "@/components/CollapsibleCaseStudies";
import CollapsibleHowWeWork from "@/components/CollapsibleHowWeWork";
import CollapsibleROICalculator from "@/components/CollapsibleROICalculator";
import CollapsibleIndustryExpertise from "@/components/CollapsibleIndustryExpertise";
import CollapsibleSocialProof from "@/components/CollapsibleSocialProof";
import CollapsibleFAQ from "@/components/CollapsibleFAQ";
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
          <CollapsibleCaseStudies />
        </section>
        <section id="how-we-work">
          <CollapsibleHowWeWork />
        </section>
        <section id="packages">
          <ServicePackagesSection />
        </section>
        <section id="roi-calculator">
          <CollapsibleROICalculator />
        </section>
        <section id="industry-expertise">
          <CollapsibleIndustryExpertise />
        </section>
        <section id="social-proof">
          <CollapsibleSocialProof />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <CollapsibleFAQ />
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
