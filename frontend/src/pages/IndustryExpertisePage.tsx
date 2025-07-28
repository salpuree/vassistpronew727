import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleIndustryExpertise from "@/components/CollapsibleIndustryExpertise";
import PageHeroSection from "@/components/PageHeroSection";

const IndustryExpertisePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Industry Expertise"
          description="15+ years of transportation industry knowledge helping you navigate regulations, optimize operations, and stay ahead of market trends."
          imageUrl="/industy-expertise.png"
          breadcrumb="About Us / Industry Expertise"
        />
        <div className="animate-fade-in">
          <CollapsibleIndustryExpertise />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryExpertisePage;