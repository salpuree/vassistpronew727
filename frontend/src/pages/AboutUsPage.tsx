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
          description="A dedicated team of virtual assistants specializing in transportation industry support. We're committed to helping your business grow with reliable, personalized service."
          imageUrl="/industy-expertise.png"
          breadcrumb="About Us"
        />
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center pt-5">
          <span className="text-gradient">Growing Together</span>
          <span className="block text-foreground">with Transportation Businesses</span>
        </h2>
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
