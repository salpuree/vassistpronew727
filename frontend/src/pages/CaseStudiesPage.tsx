import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageHeroSection from "@/components/PageHeroSection";

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Success Stories"
          description="Real results from real transportation companies. See how we've helped luxury transportation businesses achieve remarkable growth and operational excellence."
          imageUrl="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          breadcrumb="Case Studies"
        />
        <div className="animate-fade-in">
          <CaseStudiesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;