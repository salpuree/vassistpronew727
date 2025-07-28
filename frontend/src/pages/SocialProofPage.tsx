import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleSocialProof from "@/components/CollapsibleSocialProof";
import PageHeroSection from "@/components/PageHeroSection";

const SocialProofPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Trust & Recognition"
          description="Our commitment to excellence is recognized by industry leaders and trusted by hundreds of transportation companies nationwide."
          imageUrl="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          breadcrumb="About Us / Trust & Recognition"
        />
        <div className="animate-fade-in">
          <CollapsibleSocialProof />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SocialProofPage;