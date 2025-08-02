
import React, { useState, useEffect, useRef } from "react";
import { Award, Shield, Users, Star, Rocket, Quote } from "lucide-react";

// --- Data ---
const trustStats = [
  {
    icon: Users,
    metric: "500+",
    label: "Trusted Clients",
  },
  {
    icon: Award,
    metric: "15+",
    label: "Years Experience",
  },
  {
    icon: Shield,
    metric: "99.9%",
    label: "Uptime Guarantee",
  },
  {
    icon: Star,
    metric: "99%",
    label: "Client Satisfaction",
  },
];

// --- Custom Hook for Number Animation ---
const useCountUp = (end, duration = 2, inView) => {
  const [count, setCount] = useState(0);
  const frameRate = 1000 / 60;
  const totalFrames = Math.round((duration * 1000) / frameRate);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = (frame / totalFrames) ** 2; // Ease-out effect

      if (end.toString().includes(".")) {
        const currentCount = parseFloat((end * progress).toFixed(1));
        setCount(currentCount);
      } else {
        const currentCount = Math.round(end * progress);
        setCount(currentCount);
      }

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [end, duration, inView]);

  return count;
};

// --- Reusable StatItem Component ---
const StatItem = ({ stat, index }) => {
  const itemRef = useRef(null);
  const [inView, setInView] = useState(false);

  const numericEnd = parseFloat(stat.metric);
  const suffix = stat.metric.replace(numericEnd.toString(), "");
  const animatedCount = useCountUp(numericEnd, 2, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, []);

  const IconComponent = stat.icon;

  return (
    <div 
      ref={itemRef} 
      className="group text-center transform transition-all duration-500 hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 group-hover:border-cyan-400/50 transition-all duration-300">
          <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent mb-2">
        {animatedCount}
        {suffix}
      </div>
      <div className="text-gray-400 font-medium text-base">{stat.label}</div>
    </div>
  );
};

// --- Main Section Component ---
const ClientLogosSection = () => {
  const [backgroundShineStyle, setBackgroundShineStyle] = useState({});

  const handleSectionMouseMove = (e) => {
    const { currentTarget: target } = e;
    const { left, top } = target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setBackgroundShineStyle({
      background: `radial-gradient(circle 400px at ${x}px ${y}px, rgba(59, 130, 246, 0.05), transparent 70%)`,
      opacity: 1,
    });
  };

  const handleSectionMouseLeave = () => {
    setBackgroundShineStyle({ opacity: 0 });
  };

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white font-sans overflow-hidden"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_rgba(59,130,246,0)_50%)]"></div>
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700"
        style={backgroundShineStyle}
      />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header Section with Better Typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-400/30 mb-8 backdrop-blur-sm">
            <Shield className="w-6 h-6 text-blue-400 mr-3" />
            <span className="text-blue-400 font-semibold text-lg">
              Trusted by Industry Leaders
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Trusted by
            </span>
            <span className="block text-gray-100 mt-2">
              Transportation Companies
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Nationwide
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join hundreds of luxury transportation companies who trust us with
            their technology and operations.
          </p>
        </div>

        {/* Enhanced Trust Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto mb-24">
          {trustStats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>

        {/* Enhanced Onboarding Banner and Testimonial Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Enhanced Onboarding Banner (65% width) */}
            <div className="lg:w-[65%]">
              <div className="group relative bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-blue-600/10 border border-blue-400/30 rounded-3xl p-10 h-full flex items-center shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_60px_rgba(59,130,246,0.2)] backdrop-blur-sm">
                <div className="flex items-center space-x-8 w-full">
                  <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-400/30 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <Rocket className="w-12 h-12 text-blue-400 group-hover:text-cyan-400 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative flex-1">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      Rapid 24-Hour Onboarding
                    </h3>
                    <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                      Your dedicated, fully-trained back-office team can be live in
                      under 24 hours. No lengthy setup processes or training delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced iPhone Message Bubble Testimonial (35% width) */}
            <div className="lg:w-[35%]">
              <div className="h-full flex flex-col justify-center space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-end">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-400/30">
                    <Quote className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                {/* Enhanced iPhone Message Bubble */}
                <div className="relative max-w-sm ml-auto">
                  <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl rounded-br-lg p-6 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                    <p className="text-white text-base lg:text-lg leading-relaxed font-normal">
                      "The 24/7 support has been phenomenal. VAssist Pro transformed
                      our operation, and the ROI was immediate and substantial."
                    </p>
                    {/* Enhanced Message Tail with Gradient */}
                    <div className="absolute bottom-0 right-[-10px] w-0 h-0 border-l-[20px] border-l-blue-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                    
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl rounded-br-lg pointer-events-none"></div>
                  </div>
                  
                  {/* Enhanced Message Status */}
                  <div className="flex items-center justify-end mt-3 mr-4 space-x-2">
                    <span className="text-sm text-gray-400 font-medium">Delivered</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: "0.2s"}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Attribution */}
                <footer className="text-right space-y-1">
                  <div className="text-white font-semibold text-lg">Marcus Thompson</div>
                  <div className="text-blue-400 font-medium">CEO</div>
                  <div className="text-gray-400 text-sm">Elite Transportation Services</div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
