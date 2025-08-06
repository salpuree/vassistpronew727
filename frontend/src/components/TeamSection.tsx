<<<<<<< HEAD
import { Users, Award, Clock, Globe, Linkedin, Github, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-development.jpg";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";

const TeamSection = () => {
  const [backgroundShineStyle, setBackgroundShineStyle] = useState({});
  const [cardStyle, setCardStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});
  const cardRef = useRef(null);

  const handleSectionMouseMove = (e) => {
    const { currentTarget: target } = e;
    const { left, top } = target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setBackgroundShineStyle({
      background: `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 80%)`,
      opacity: 1,
    });
  };

  const handleSectionMouseLeave = () => {
    setBackgroundShineStyle({ opacity: 0 });
  };

  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -3;
    const rotateY = ((x - width / 2) / (width / 2)) * 3;

    setCardStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out",
    });

    setShineStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
    });
  };

  const handleCardMouseLeave = () => {
    setCardStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0)",
      transition: "transform 0.6s ease-in-out",
    });
    setShineStyle({});
  };

  return (
    <section 
      className="relative py-24 bg-gray-900 text-white font-sans overflow-hidden"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.08)_0%,_rgba(29,78,216,0)_50%)]"></div>
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={backgroundShineStyle}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Team Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl" style={{ margin: '20px auto 0' }}>
          
          {/* Team Image */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
            <div 
              ref={cardRef}
              className="relative overflow-hidden rounded-3xl h-[500px] bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500"
              style={cardStyle}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div
                className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-3xl"
                style={shineStyle}
              />
              <img 
                src={teamImage} 
                alt="Development Team"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Team Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">Expert Team</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Why Choose Our
              </span>
              <span className="block text-gray-100">Expert Team?</span>
            </h3>
            
            <p className="text-xl text-gray-400 mb-8">
              Your dedicated back office, seamlessly integrated. We handle the complexities of your operations, so you can focus on growth.
            </p>
            
            <div className="space-y-6">
              {/* Features */}
              {[
                {
                  title: "Technology + Operations Excellence",
                  desc: "Unique combination of technical expertise and professional back-office operations for complete solutions.",
                },
                {
                  title: "Your Strategic Partner",
                  desc: "We seamlessly integrate with your business as a trusted strategic partner, delivering enterprise-level expertise without the overhead costs.",
                },
                {
                  title: "Luxury Transportation Specialists",
                  desc: "Deep understanding of Limo Anywhere, GNet, and the unique needs of luxury transportation companies.",
                },
                {
                  title: "24/7 Operations Capability",
                  desc: "Never miss a booking or customer inquiry with our round-the-clock professional support team.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group/feature hover:bg-gray-800/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 mt-1 mr-4" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }}>
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover/feature:text-blue-400 transition-colors">{item.title}</h4>
                    <p className="text-gray-400 group-hover/feature:text-gray-300 transition-colors">{item.desc}</p>
=======
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
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12
                  </div>
                </div>
              ))}
            </div>
<<<<<<< HEAD

            {/* CTA Button */}
            <div className="mt-8">
              <Link to="/team">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium px-8 py-4 text-lg shadow-lg hover:shadow-cyan-500/40">
                  Meet Our Core Team
=======
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link to="/team">
                <Button className="bg-gradient-to-b from-slate-200 to-slate-400 hover:from-slate-100 hover:to-slate-300 text-black font-bold h-14 px-10 text-lg rounded-full group transition-all" style={{ boxShadow: '0 0 15px rgba(192, 192, 192, 0.4)' }}>
                  <span className="inline-flex items-center">
                    Meet Our Core Team
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12
                </Button>
              </Link>
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
