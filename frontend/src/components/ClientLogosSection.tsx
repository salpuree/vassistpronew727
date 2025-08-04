import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// --- Professional SVG Icons ---
// This custom icon creates the platinum circle with a blue checkmark.
const CheckCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="platinumGradientCheck" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#E5E7EB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9CA3AF', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#platinumGradientCheck)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


// Main Section Component
const ClientLogosSection = () => {
  // Grouping services for better visual organization
  const coreServices = [
    {
      title: "24/7 Operations",
      description:
        "Never miss a booking. Our team works around the clock, managing your calls, emails, and reservations under your brand.",
    },
    {
      title: "Seamless Integration",
      description:
        "We become experts in your software and workflow. From Limo Anywhere to affiliate coordination, we manage every detail flawlessly.",
    },
    {
      title: "VIP Client Service",
      description:
        "We provide the white-glove service your clients expect. From special requests to proactive updates, we enhance your brand's luxury reputation.",
    },
  ];

  const digitalServices = [
     {
      title: "Digital Presence & Branding",
      description:
        "Establish a powerful online presence with a custom, luxury website designed to attract and convert high-value clientele.",
    },
  ];

  return (
    <section className="relative py-16 bg-[#0D1B2A] text-white font-sans overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Dashboard Image & Button */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="relative flex-1 bg-black/20 rounded-3xl p-4 border border-white/10 shadow-2xl shadow-black/40">
                <img
                  src="/vaboard.svg" // Using your specified image path
                  alt="V-Assist Pro Workflow Dashboard"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="flex-shrink-0">
                <Button
                  size="lg"
                  className="bg-gradient-to-b from-slate-200 to-slate-400 hover:from-slate-100 hover:to-slate-300 text-black font-bold h-14 px-10 text-lg rounded-full group transition-all shadow-lg shadow-slate-500/20"
                >
                  <span className="inline-flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-[#06B6D4]">
              How It Works
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              An Extension of Your Team,
              <span className="block text-white/80">Around the Clock</span>
            </h2>
            <p className="text-lg text-white/70">
              Your dedicated back office, seamlessly integrated. We handle the
              complexities of your operations, so you can focus on growth. No
              hiring, no headaches. Just results.
            </p>
            <div className="space-y-8 pt-8 border-t border-white/10">
              {/* Core Services */}
              <div>
                {coreServices.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }}>
                      <CheckCircleIcon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider and Digital Services Section */}
              <div className="pt-8 border-t border-white/10">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-[#06B6D4] mb-6">
                    Digital & Creative Services
                 </h3>
                 {digitalServices.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }}>
                        <CheckCircleIcon />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 mt-1">{feature.description}</p>
                      </div>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
