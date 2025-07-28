import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import PageHeroSection from "@/components/PageHeroSection";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Our Services"
          description="Complete technology solutions and comprehensive back-office support services for luxury transportation companies. From Limo Anywhere integrations to 24/7 call answering."
          imageUrl="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          breadcrumb="Services"
        />
        <div className="animate-fade-in">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;