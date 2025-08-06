import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleIndustryExpertise from "@/components/CollapsibleIndustryExpertise";
import CollapsibleSocialProof from "@/components/CollapsibleSocialProof";
import CollapsibleHowWeWork from "@/components/CollapsibleHowWeWork";
import PageHeroSection from "@/components/PageHeroSection";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="About Us"
          description="15+ years of transportation industry expertise, trusted by hundreds of companies nationwide. Discover our proven process, industry knowledge, and commitment to excellence."
          imageUrl="/industy-expertise.png"
          breadcrumb="About Us"
        />
        <div className="animate-fade-in">
          {/* Industry Expertise Section */}
          <div id="industry-expertise">
            <CollapsibleIndustryExpertise />
          </div>
          
          {/* Trust & Recognition Section */}
          <div id="trust-recognition">
            <CollapsibleSocialProof />
          </div>
          
          {/* Our Proven Process Section */}
          <div id="our-process">
            <CollapsibleHowWeWork />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
