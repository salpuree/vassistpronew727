import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleHowWeWork from "@/components/CollapsibleHowWeWork";

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="animate-fade-in">
          <CollapsibleHowWeWork />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;