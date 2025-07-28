import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Globe, Clock, Users, CheckCircle, Shield } from "lucide-react";
import heroImage from "../assets/hero-luxury-transport.jpg";

const HeroSection = () => {
  const clientLogos = [
    {
      name: "Elite Transportation Group",
      logo: "🚗",
      industry: "Luxury Ground Transportation"
    },
    {
      name: "Metropolitan Limousines",
      logo: "🏙️",
      industry: "Corporate Transportation"
    },
    {
      name: "Premier Executive Services",
      logo: "⭐",
      industry: "Executive Transportation"
    },
    {
      name: "Luxury Fleet Solutions",
      logo: "💼",
      industry: "Fleet Management"
    },
    {
      name: "Black Car Network",
      logo: "🌟",
      industry: "Premium Transportation"
    },
    {
      name: "Prestige Transport Co.",
      logo: "👑",
      industry: "VIP Services"
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-48"> {/* added pb-48 */}
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
      <div className="absolute top-10 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-primary/20 rounded-full animate-float animate-pulse-soft z-10" />
      <div className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-primary/30 rounded-full animate-bounce-soft z-10" style={{animationDelay: "2s"}} />
      <div className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-primary/40 rounded-full animate-float animate-glow z-10" style={{animationDelay: "4s"}} />
      <div className="hidden md:block absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse-soft z-10" style={{animationDelay: "1s"}} />
      <div className="hidden md:block absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-500/20 rounded-full animate-bounce-soft z-10" style={{animationDelay: "3s"}} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 mt-8 animate-fade-in">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Complete Business Solutions for Luxury Transportation</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-4 animate-slide-up">
            <span className="block text-foreground mb-2">Your</span>
            <span className="text-gradient text-glow">Strategic Partner</span>
            <span className="block text-foreground">for Business Excellence</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-5 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "0.2s"}}>
            We provide both <span className="text-primary font-semibold">premium technology solutions</span> and <span className="text-primary font-semibold">24/7 back-office support</span> for luxury transportation companies. 
            Specialists in <span className="text-primary font-semibold">Limo Anywhere</span>, <span className="text-primary font-semibold">GNet</span>, and comprehensive business operations.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-14 mb-8 animate-fade-in" style={{animationDelay: "0.4s"}}> {/* changed mb-5 to mb-8 */}
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
          <div className="flex flex-col sm:flex-row gap-12 justify-center mb-10 animate-fade-in" style={{animationDelay: "0.6s"}}> {/* added mb-10 */}
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
      
      {/* Trust Indicators - Made relative and brought into flow */}
      <div className="relative z-10 py-8 px-4 bg-gradient-to-t from-background/80 to-transparent animate-fade-in mt-8" style={{ animationDelay: "0.8s" }}> {/* changed from absolute to relative, added mt-10 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* 1. Years Experience */}
          <div className="text-center">
            <div className="w-7 h-7 flex items-center justify-center mx-auto mb-1">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gradient">15+</div>
            <div className="text-sm text-foreground font-medium">Years Experience</div>
            <div className="text-xs text-muted-foreground">Since 2009</div>
          </div>

          {/* 2. Companies Served */}
          <div className="text-center">
            <div className="w-7 h-7 flex items-center justify-center mx-auto mb-1">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gradient">500+</div>
            <div className="text-sm text-foreground font-medium">Companies Served</div>
            <div className="text-xs text-muted-foreground">Nationwide</div>
          </div>

          {/* 3. Client Satisfaction */}
          <div className="text-center">
            <div className="w-7 h-7 flex items-center justify-center mx-auto mb-1">
              <CheckCircle className="w-7 h-7 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gradient">100%</div>
            <div className="text-sm text-foreground font-medium">Client Satisfaction</div>
            <div className="text-xs text-muted-foreground">Proven Results</div>
          </div>

          {/* 4. Uptime Guarantee */}
          <div className="text-center">
            <div className="w-7 h-7 flex items-center justify-center mx-auto mb-1">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <div className="text-2xl font-bold text-gradient">99.9%</div>
            <div className="text-sm text-foreground font-medium">Uptime Guarantee</div>
            <div className="text-xs text-muted-foreground">SOC 2 Certified</div>
          </div>
        </div>
      </div>
      
      {/* Scrolling Client Logos */}
      <div className="absolute bottom-10 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-8 overflow-hidden">
        <div className="flex items-center space-x-12 animate-[marquee_30s_linear_infinite]">
          {/* Duplicate the logos array for seamless loop */}
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div key={index} className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0">
              <div className="w-8 h-8 flex items-center justify-center grayscale opacity-70">
                <span className="text-lg">{client.logo}</span>
              </div>
              <div className="text-white/80 text-sm font-medium">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
