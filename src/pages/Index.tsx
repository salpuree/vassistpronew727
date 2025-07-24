import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ServicePackagesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
};

export default Index;
