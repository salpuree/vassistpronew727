import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePackagesSection from "@/components/ServicePackagesSection";
import PageHeroSection from "@/components/PageHeroSection";

const ServicePackagesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Service Packages"
          description="Choose the right level of professional back-office support for your luxury transportation business. All packages include professional training on your specific procedures and brand standards."
          imageUrl="https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          breadcrumb="Service Packages"
        />
        <div className="animate-fade-in">
          <ServicePackagesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePackagesPage;