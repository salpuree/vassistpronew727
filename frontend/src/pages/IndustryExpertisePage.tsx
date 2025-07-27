import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleIndustryExpertise from "@/components/CollapsibleIndustryExpertise";

const IndustryExpertisePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CollapsibleIndustryExpertise />
      </main>
      <Footer />
    </div>
  );
};

export default IndustryExpertisePage;