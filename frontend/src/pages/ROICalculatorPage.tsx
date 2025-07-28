import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleROICalculator from "@/components/CollapsibleROICalculator";
import PageHeroSection from "@/components/PageHeroSection";

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Calculate Your ROI"
          description="Discover how much you could save and earn by partnering with VAssist Pro. Most transportation companies see positive ROI within 3-6 months."
          imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          breadcrumb="ROI Calculator"
        />
        <div className="animate-fade-in">
          <CollapsibleROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;