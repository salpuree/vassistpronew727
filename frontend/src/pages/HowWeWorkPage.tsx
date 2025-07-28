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
          imageUrl="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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