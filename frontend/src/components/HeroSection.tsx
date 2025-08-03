
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
} from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import heroImage from "../assets/hero-luxury-transport.jpg";

// Icon Components
const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// Main HeroSection Component
const HeroSection = () => {
  // Refined, benefit-focused words for the typewriter effect.
  const rotatingWords = [
    "Flawless Operations.",
    "Happier Clients.",
    "Effortless Growth.",
    "Peace of Mind.",
  ];

  // Client logos for the scrolling marquee at the bottom.
  const clientLogos = [
    { name: "Elite Transportation Group", logo: "🚗" },
    { name: "Metropolitan Limousines", logo: "🏙️" },
    { name: "Premier Executive Services", logo: "⭐" },
    { name: "Luxury Fleet Solutions", logo: "💼" },
    { name: "Black Car Network", logo: "🌟" },
    { name: "Prestige Transport Co.", logo: "👑" },
  ];

  // Stats data array
  const stats = [
    { icon: <CheckCircleIcon />, value: "Proven", label: "Reliability" },
    { icon: <AwardIcon />, value: "15+", label: "Years Experience" },
    { icon: <ShieldIcon />, value: "100%", label: "Discretion Assured" },
    { icon: <StarIcon />, value: "5-Star", label: "Service Standard" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-20 pb-32">
      {/* Background Image with a subtle overlay */}
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
      <div className="absolute top-10 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-blue-500/20 rounded-full animate-float animate-pulse-soft z-10" />
      <div
        className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-blue-500/20 rounded-full animate-bounce-soft z-10"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-purple-500/20 rounded-full animate-float animate-glow z-10"
        style={{ animationDelay: "4s" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center flex-grow flex flex-col justify-center">
        <div className="max-w-5xl mx-auto">
          {/* Top Badge - A strong positioning statement */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 mt-8 animate-fade-in">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">
              The Back Office Behind the Best Chauffeur Services, Nationwide.
            </span>
          </div>

          {/* Main Headline - Added font-extrabold and tracking-tighter for impact */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-3 animate-slide-up">
            <span className="block text-foreground/80 mb-2 font-normal text-4xl md:text-5xl lg:text-6xl">
              Your Concierge Back Office for
            </span>
            <TypewriterEffect words={rotatingWords} />
          </h1>

          {/* Subheadline - Increased font weight for more impact */}
          <p
            className="text-lg md:text-xl text-muted-foreground font-medium mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            A dedicated back office team for luxury transport operators, travel
            planners, and high-touch service providers. We provide{" "}
            <span className="text-primary font-bold">
              premium tech solutions
            </span>{" "}
            and{" "}
            <span className="text-primary font-bold">
              24/7 expert support
            </span>{" "}
            that integrates seamlessly with your business operations.
          </p>

          {/* CTA Buttons - Increased size for more prominence */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button size="lg" className="btn-luxury group h-14 px-10 text-lg">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-luxury h-14 px-10 text-lg">
              Learn More
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mt-16 w-full max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div style={{ color: '#06B6D4', filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))' }}>
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-white tracking-tighter">{stat.value}</p>
                <p className="text-sm font-medium text-white/70 tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Client Logos at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-6 overflow-hidden">
        <div className="flex items-center space-x-12 animate-[marquee_20s_linear_infinite]">
          {/* Duplicate the logos array for a seamless loop */}
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
