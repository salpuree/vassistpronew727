import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PageHeroSection from "@/components/PageHeroSection";

const SuccessStoriesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      <main className="pt-20">
        <div className="animate-fade-in">
          <PageHeroSection
            title="Success Stories"
            description="Real results from real transportation companies with authentic client testimonials. See the measurable impact we've delivered for luxury transportation businesses nationwide."
            imageUrl="/Case-Studies.jpeg"
            breadcrumb="Success Stories & Reviews"
          />

          {/* Case Studies Section with integrated testimonials */}
          <div id="testimonials">
            <CaseStudiesSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
