import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleROICalculator from "@/components/CollapsibleROICalculator";

const ROICalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="animate-fade-in">
          <CollapsibleROICalculator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ROICalculatorPage;