import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHeroSection from "@/components/PageHeroSection";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Contact Us"
          description="Ready to transform your transportation business? Get in touch with our experts to discuss your technology and back-office support needs."
          imageUrl="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          breadcrumb="Contact Us"
        />
        <div className="animate-fade-in">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUsPage;