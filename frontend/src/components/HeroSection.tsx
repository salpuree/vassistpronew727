import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  Clock,
  Users,
  CheckCircle,
  Shield,
} from "lucide-react";
import heroImage from "../assets/hero-luxury-transport.jpg";
import TypewriterEffect from "./TypewriterEffect";
const HeroSection = () => {
  const rotatingWords = [
    "24/7 remote team.",
    "flawless operations.",
    "happier clients.",
    "effortless growth.",
    "peace of mind.",
    "reduced overhead.",
    "success team.",
  ];
  const clientLogos = [
    {
      name: "Elite Transportation Group",
      logo: "🚗",
      industry: "Luxury Ground Transportation",
    },
    {
      name: "Metropolitan Limousines",
      logo: "🏙️",
      industry: "Corporate Transportation",
    },
    {
      name: "Premier Executive Services",
      logo: "⭐",
      industry: "Executive Transportation",
    },
    {
      name: "Luxury Fleet Solutions",
      logo: "💼",
      industry: "Fleet Management",
    },
    {
      name: "Black Car Network",
      logo: "🌟",
      industry: "Premium Transportation",
    },
    {
      name: "Prestige Transport Co.",
      logo: "👑",
      industry: "VIP Services",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 pb-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Transportation"
          className="w-full h-full object-cover"
          loading="lazy"
        />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-purple-700/20 via-black/40 to-blue-600/60"/>
      </div>

      {/* Floating Elements - Mobile Safe */}
      <div className="absolute top-10 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-blue-500/20 rounded-full animate-float animate-pulse-soft z-10" />
      <div
        className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-purple-500/20 rounded-full animate-bounce-soft z-10"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-purple-500/20 rounded-full animate-float animate-glow z-10"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="hidden md:block absolute top-1/3 left-1/4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse-soft z-10"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="hidden md:block absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-500/20 rounded-full animate-bounce-soft z-10"
        style={{ animationDelay: "3s" }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 mt-8 animate-fade-in">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">
              The Back Office Behind the Best Chauffeur Services, Nationwide.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-3 animate-slide-up">
            <span className="block text-foreground mb-2">We power your</span>
            <TypewriterEffect words={rotatingWords} />
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            A concierge-level back office team for luxury transport operators,
            travel planners, and high-touch service providers.
            <br />
            <span className="text-primary font-semibold">
              Premium tech solutions
            </span>{" "}
            and{" "}
            <span className="text-primary font-semibold">
              24/7 back-office support
            </span>{" "}
            specialists in{" "}
            <span className="text-primary font-semibold">Limo Anywhere</span>,{" "}
            <span className="text-primary font-semibold">GNet, Addons</span>,
            and comprehensive business operations.
          </p>

          {/* Feature Pills */}
          <div
            className="flex flex-wrap justify-center gap-12 mb-4 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
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
          <div
            className="flex flex-col sm:flex-row gap-12 justify-center mb-4 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
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

      {/* Scrolling Client Logos */}
      <div className="absolute bottom-6 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-6 overflow-hidden">
        <div className="flex items-center space-x-12 animate-[marquee_8s_linear_infinite]">
          {/* Duplicate the logos array for seamless loop */}
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0"
            >
              <div className="w-10 h-10 flex items-center justify-center grayscale opacity-70">
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
