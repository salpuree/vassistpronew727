import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CaseStudiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;