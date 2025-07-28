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
          imageUrl="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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