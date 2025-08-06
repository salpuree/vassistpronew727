import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-development.jpg";

// --- Professional SVG Icons ---
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

// --- Main TeamSection Component ---
const TeamSection = () => {
  const teamFeatures = [
    { title: "A Fusion of Tech & Operations", desc: "Our unique expertise in both technology and back-office operations provides a complete, seamless solution for your business." },
    { title: "Your Strategic Partner", desc: "We integrate with your business as a trusted partner, delivering enterprise-level expertise without the overhead." },
    { title: "Specialists in Your Industry", desc: "We have a deep understanding of Limo Anywhere, GNet, and the unique demands of luxury transportation." },
    { title: "Always-On Operations", desc: "Never miss a booking or customer inquiry with our professional, round-the-clock support team." },
  ];

  return (
    <section className="py-24 bg-[#172A3A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
              <img 
                src={teamImage} 
                alt="Development Team" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-white mb-6">
              Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-glow">Expert Team?</span>
            </h3>
            <div className="space-y-6">
              {teamFeatures.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }}>
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link to="/team">
                <Button className="bg-gradient-to-b from-slate-200 to-slate-400 hover:from-slate-100 hover:to-slate-300 text-black font-bold h-14 px-10 text-lg rounded-full group transition-all" style={{ boxShadow: '0 0 15px rgba(192, 192, 192, 0.4)' }}>
                  <span className="inline-flex items-center">
                    Meet Our Core Team
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
