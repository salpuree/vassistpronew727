import React, { useState, useRef, useEffect } from "react";
import { Award, Shield, Users, Star, ArrowRight, CheckCircle } from "lucide-react";

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
      const progress = (frame / totalFrames) ** 2;

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
const StatItem = ({ stat }) => {
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
    <div ref={itemRef} className="text-center">
      <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
      <div className="text-3xl font-semibold text-white">
        {animatedCount}
        {suffix}
      </div>
      <div className="text-base text-gray-400 font-medium">{stat.label}</div>
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
      background: `radial-gradient(circle 300px at ${x}px ${y}px, rgba(255, 255, 255, 0.03), transparent 80%)`,
      opacity: 1,
    });
  };

  const handleSectionMouseLeave = () => {
    setBackgroundShineStyle({ opacity: 0 });
  };

  return (
    <section
      className="relative pt-16 pb-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white font-sans overflow-hidden"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_rgba(59,130,246,0)_70%)]"></div>
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={backgroundShineStyle}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Trust Statistics at Top */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Trusted by Industry Leaders
            </span>
          </h2>
          
          {/* Trust Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {trustStats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20 rounded-3xl p-8 lg:p-12 overflow-hidden">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl"></div>

              {/* Workflow Image */}
              <div className="relative z-10">
                <img 
                  src="./vaboard.png" 
                  alt="VA Workflow Dashboard"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/30 border border-blue-200/20">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-200 font-semibold">
                Your Virtual Assistant Team in Action
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  While You Sleep,
                </span>
                <span className="block text-gray-100">
                  We're Working for You
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              From confirming reservations to managing your social media presence, our dedicated virtual assistants work around the clock to keep your business running smoothly. See real conversations and tasks being handled seamlessly in the background.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-gray-200">24/7 operations - never miss an opportunity</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-gray-200">Real-time communication with your clients</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-gray-200">Seamless integration with your existing systems</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <span className="mr-3">See How We Can Help Your Business</span>
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