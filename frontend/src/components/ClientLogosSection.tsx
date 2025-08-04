import React from "react";
import {
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// --- Main Section Component (Restyled & Simplified) ---
const ClientLogosSection = () => {
  const features = [
    {
      title: "Your Operations Never Sleep",
      description: "Our team operates 24/7/365, acting as a seamless extension of your brand. We handle calls, emails, and reservations while you focus on your business (or get some rest)."
    },
    {
      title: "Expertise You Can Trust",
      description: "Each team member is a highly-trained specialist in luxury transport logistics. We manage your software, coordinate with affiliates, and ensure every detail is perfect."
    },
    {
      title: "Elevate Every Client Interaction",
      description: "From VIP requests to proactive communication and post-trip follow-ups, we provide a level of service that builds loyalty and enhances your brand's reputation."
    }
  ];

  return (
    <section className="relative py-24 bg-[#172A3A] text-white font-sans overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative bg-black/20 rounded-3xl p-4 border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="/vaboard.svg" // Unchanged as requested
                alt="VA Workflow Dashboard"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content (Restored and Restyled) */}
          <div className="space-y-8 text-left">
            <p className="text-sm font-bold uppercase tracking-widest text-[#C0C0C0]">
              How It Works
            </p>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              An Extension of Your Team,
              <span className="block text-white/80">Around the Clock</span>
            </h2>

            <p className="text-lg text-white/70 leading-relaxed">
              We integrate directly into your existing operations, becoming the reliable, professional back office you've always needed. No hiring, no training, no headaches—just flawless execution.
            </p>

            <div className="space-y-6 border-t border-white/10 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-[#C0C0C0] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-white/60">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-b from-slate-200 to-slate-400 hover:from-slate-100 hover:to-slate-300 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-slate-500/20">
                <span className="mr-3">Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;