import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleSocialProof from "@/components/CollapsibleSocialProof";

const SocialProofPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CollapsibleSocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default SocialProofPage;