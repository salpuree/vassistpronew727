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
          imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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