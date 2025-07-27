import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="animate-fade-in">
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;