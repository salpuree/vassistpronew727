import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-luxury-transport.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Floating Elements - Mobile Safe */}
      <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-primary/20 rounded-full animate-float animate-pulse-soft" />
      <div className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-primary/30 rounded-full animate-bounce-soft" style={{animationDelay: "2s"}} />
      <div className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-primary/40 rounded-full animate-float animate-glow" style={{animationDelay: "4s"}} />
      <div className="hidden md:block absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse-soft" style={{animationDelay: "1s"}} />
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-500/20 rounded-full animate-bounce-soft" style={{animationDelay: "3s"}} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Complete Business Solutions for Luxury Transportation</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-8 animate-slide-up">
            <span className="block text-foreground mb-2">Your</span>
            <span className="text-gradient text-glow">Strategic Partner</span>
            <span className="block text-foreground">for Business Excellence</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "0.2s"}}>
            We provide both <span className="text-primary font-semibold">premium technology solutions</span> and <span className="text-primary font-semibold">24/7 back-office support</span> for luxury transportation companies. 
            Specialists in <span className="text-primary font-semibold">Limo Anywhere</span>, <span className="text-primary font-semibold">GNet</span>, and comprehensive business operations.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex items-center px-6 py-3 bg-card/30 backdrop-blur-sm rounded-full border border-border/50">
              <Code className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">Technology Solutions</span>
            </div>
            <div className="flex items-center px-6 py-3 bg-card/30 backdrop-blur-sm rounded-full border border-border/50">
              <Globe className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">24/7 Back-Office Support</span>
            </div>
            <div className="flex items-center px-6 py-3 bg-card/30 backdrop-blur-sm rounded-full border border-border/50">
              <Zap className="w-5 h-5 text-primary mr-2" />
              <span className="text-foreground">Limo Anywhere & GNet</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Button size="lg" className="btn-luxury group">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-luxury">
              View Our Portfolio
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-14 mb-6 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{animationDelay: "0.8s"}}>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
