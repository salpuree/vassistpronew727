import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleHowWeWork from "@/components/CollapsibleHowWeWork";

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CollapsibleHowWeWork />
      </main>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;