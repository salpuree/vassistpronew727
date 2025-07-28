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
          imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80"
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