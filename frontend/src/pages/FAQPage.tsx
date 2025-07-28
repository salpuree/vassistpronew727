import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import PageHeroSection from "@/components/PageHeroSection";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, implementation, pricing, and support. Get the information you need to make an informed decision."
          imageUrl="/FAQs.jpeg"
          breadcrumb="FAQ"
        />
        <div className="animate-fade-in">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;