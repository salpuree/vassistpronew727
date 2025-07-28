import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import CaseStudiesPreviewSection from "@/components/CaseStudiesPreviewSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Cog, Zap, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        <div className="animate-fade-in">
          <ClientLogosSection />
        </div>
        
        {/* Services Introduction */}
        <section id="services" className="py-16 bg-luxury-gradient">
          <div className="animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Cog className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">Complete Business Solutions</span>
                </div>
                <h2 className="mb-6">
                  <span className="text-gradient">Technology + Operations</span>
                  <span className="block text-foreground">Your Force Behind the Curtains</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  We provide both cutting-edge technology solutions and comprehensive back-office support services.
                  From Limo Anywhere integrations to specialized email handling for bookings, quotes, updates, and inquiries.
                </p>
                <Link to="/services">
                  <Button className="btn-luxury">
                    Explore All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="case-studies">
          <div className="animate-fade-in">
            <CaseStudiesPreviewSection />
          </div>
        </section>
        
        {/* Service Packages Introduction */}
        <section id="packages" className="py-16 bg-luxury-gradient">
          <div className="animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Zap className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">Service Packages</span>
                </div>
                <h2 className="mb-6">
                  <span className="text-gradient">Back-Office Support</span>
                  <span className="block text-foreground">Packages That Scale With You</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Choose the right level of professional back-office support for your luxury transportation business.
                  All packages include professional training on your specific procedures and brand standards.
                </p>
                <Link to="/service-packages">
                  <Button className="btn-luxury">
                    View All Packages
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials">
          <div className="animate-fade-in">
            <TestimonialsSection />
          </div>
        </section>
        
        {/* Team Introduction */}
        <section id="team" className="py-16 bg-luxury-gradient">
          <div className="animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">Our Team</span>
                </div>
                <h2 className="mb-6">
                  <span className="text-gradient">Expert Team</span>
                  <span className="block text-foreground">Dedicated to Your Success</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Our specialized team combines technical expertise with operational excellence for luxury transportation.
                  From developers to customer service professionals - we're your complete strategic partner.
                </p>
              </div>
            </div>
            <TeamSection />
          </div>
        </section>
        
        {/* Contact Introduction */}
        <section id="contact" className="py-16">
          <div className="animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Zap className="w-5 h-5 text-primary mr-2" />
                  <span className="text-primary font-semibold">Let's Start Your Project</span>
                </div>
                <h2 className="mb-6">
                  <span className="text-gradient">Ready to Elevate</span>
                  <span className="block text-foreground">Your Transportation Business?</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Get a free consultation with our luxury transportation experts. 
                  Let's discuss how we can provide both premium technology solutions and comprehensive back-office support.
                </p>
                <Link to="/contact-us">
                  <Button className="btn-luxury">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
