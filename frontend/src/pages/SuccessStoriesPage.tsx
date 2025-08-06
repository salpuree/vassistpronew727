import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PageHeroSection from "@/components/PageHeroSection";

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-20">
        <div className="animate-fade-in">
          <PageHeroSection
            title="Success Stories & Reviews"
            description="Real results from real transportation companies and authentic reviews from our satisfied clients. See how we've helped luxury transportation businesses achieve remarkable growth and operational excellence."
            imageUrl="/Case-Studies.jpeg"
            breadcrumb="Success Stories & Reviews"
          />
          
          {/* Case Studies Section */}
          <CaseStudiesSection />
          
          {/* Client Reviews Section */}
          <div id="testimonials">
            <TestimonialsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
