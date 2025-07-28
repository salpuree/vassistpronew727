import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollapsibleHowWeWork from "@/components/CollapsibleHowWeWork";
import PageHeroSection from "@/components/PageHeroSection";

const HowWeWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Our Proven Process"
          description="Systematic implementation ensuring seamless integration and immediate results for your transportation business."
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          breadcrumb="About Us / Our Proven Process"
        />
        <div className="animate-fade-in">
          <CollapsibleHowWeWork />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowWeWorkPage;