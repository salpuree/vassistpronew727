import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import heroImage from "../assets/hero-luxury-transport.jpg";

// --- Professional SVG Icons with Platinum Gradient ---
const UsersIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="platinumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E5E7EB", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9CA3AF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="7"
      r="4"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 21v-2a4 4 0 0 0-3-3.87"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.13a4 4 0 0 1 0 7.75"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const AwardIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="platinumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E5E7EB", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9CA3AF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="8"
      r="6"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="platinumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E5E7EB", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9CA3AF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const StarIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="platinumGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E5E7EB", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#9CA3AF", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      stroke="url(#platinumGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Main HeroSection Component
const HeroSection = () => {
  // Data for the typewriter effect
  const rotatingWords = [
    "Flawless Operations.",
    "Happier Clients.",
    "Effortless Growth.",
    "Peace of Mind.",
  ];

  // Data for the key metrics/stats section
  const stats = [
    { icon: <UsersIcon />, value: "Proven", label: "Reliability" },
    { icon: <AwardIcon />, value: "15+", label: "Years Experience" },
    { icon: <ShieldIcon />, value: "100%", label: "Discretion Assured" },
    { icon: <StarIcon />, value: "5-Star", label: "Service Standard" },
  ];

  // Data for the client logos
  const clientLogos = [
    { name: "Elite Transport" },
    { name: "Metropolitan" },
    { name: "Premier Services" },
    { name: "Luxury Fleet" },
    { name: "Black Car Network" },
    { name: "Prestige Co." },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 bg-[#0D1B2A]" aria-label="Hero section">
      {/* Background Image with a balanced overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional virtual assistant working on luxury transportation and chauffeur service back office operations"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/75 to-background/80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 mb-8 mt-8">
            <Zap className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-slate-300 font-semibold">
              The Back Office Behind the Best Chauffeur & Concierge Services, Nationwide.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-3">
            <span className="block text-white/80 mb-2 font-normal text-4xl md:text-5xl lg:text-6xl">
              Premium Virtual Assistant & Back Office Solutions for Luxury Transport
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">
              <TypewriterEffect words={rotatingWords} />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/70 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            Expert virtual assistants providing 24/7 back office support, customer service, booking management, and administrative solutions for chauffeur services, luxury transport operators, and premium travel planners nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/contact-us">
              <Button
                className="bg-gradient-to-b from-slate-200 to-slate-400 hover:from-slate-100 hover:to-slate-300 text-black font-bold h-14 px-10 text-lg rounded-full group transition-all platinum-button-glow"
                aria-label="Book a free strategy consultation call"
              >
                <span className="inline-flex items-center">
                  Book a Free Strategy Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom container for stats and marquee */}
      <div className="relative z-10 mt-auto w-full">
        {/* Key Metrics Section */}
        <section className="container mx-auto px-4 mb-8" aria-label="Company statistics and achievements">
          <h2 className="sr-only">Our Track Record and Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-3" role="img" aria-label={`${stat.value} ${stat.label}`}>
                <div className="platinum-glow" aria-hidden="true">{stat.icon}</div>
                <p className="text-4xl font-bold text-white tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-sm font-medium text-white/70 tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Scrolling "Trusted By" marquee */}
        <section className="w-full py-4 bg-black/20 backdrop-blur-sm" aria-label="Client testimonials and trust indicators">
          <div className="container mx-auto px-4 flex items-center">
            <h3 className="text-sm font-bold text-white/50 tracking-widest uppercase flex-shrink-0 pr-6">
              Trusted By Industry Leaders:
            </h3>
            <div className="flex-grow overflow-hidden" role="marquee" aria-label="Scrolling list of trusted clients">
              <div className="flex items-center space-x-12 animate-[marquee_30s_linear_infinite]">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <span
                    key={index}
                    className="text-lg font-semibold text-white/50 whitespace-nowrap"
                  >
                    {client.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
