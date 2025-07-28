import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe, Clock, Users, CheckCircle, Shield } from "lucide-react";
import heroImage from '../assets/hero-luxury-transport.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Transportation"
          className="w-full h-full object-cover"
          loading="lazy"
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
      <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
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
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "0.2s"}}>
            We provide both <span className="text-primary font-semibold">premium technology solutions</span> and <span className="text-primary font-semibold">24/7 back-office support</span> for luxury transportation companies. 
            Specialists in <span className="text-primary font-semibold">Limo Anywhere</span>, <span className="text-primary font-semibold">GNet</span>, and comprehensive business operations.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{animationDelay: "0.4s"}}>
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
        </div>
      </div>
      
     {/* Trust Indicators - Full Width */}
<div className="w-full px-2 pb-4 mt-8 animate-fade-in" style={{ animationDelay: "0.8s" }}>
  <div className="bg-background/70 rounded-xl px-4 py-4 shadow-sm border border-border/20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* 1. Years Experience */}
      <div className="text-center">
        <div className="w-7 h-7 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-1">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <div className="text-2xl font-semibold text-gradient mb-1">15+</div>
        <div className="text-foreground text-sm font-medium">Years Experience</div>
        <div className="text-muted-foreground text-xs">Since 2009</div>
      </div>

      {/* 2. Companies Served */}
      <div className="text-center">
        <div className="w-7 h-7 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-1">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div className="text-2xl font-semibold text-gradient mb-1">500+</div>
        <div className="text-foreground text-sm font-medium">Companies Served</div>
        <div className="text-muted-foreground text-xs">Nationwide</div>
      </div>

      {/* 3. Client Satisfaction */}
      <div className="text-center">
        <div className="w-7 h-7 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-1">
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <div className="text-2xl font-semibold text-gradient mb-1">100%</div>
        <div className="text-foreground text-sm font-medium">Client Satisfaction</div>
        <div className="text-muted-foreground text-xs">Proven Results</div>
      </div>

      {/* 4. Uptime Guarantee */}
      <div className="text-center">
        <div className="w-7 h-7 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-1">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <div className="text-2xl font-semibold text-gradient mb-1">99.9%</div>
        <div className="text-foreground text-sm font-medium">Uptime Guarantee</div>
        <div className="text-muted-foreground text-xs">SOC 2 Certified</div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
