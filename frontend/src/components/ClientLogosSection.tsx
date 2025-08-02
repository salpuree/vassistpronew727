import React, { useState, useEffect, useRef } from "react";
import { Award, Shield, Users, Star, Rocket } from "lucide-react";

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

// --- Reusable StatItem Component (Cardless Version) ---
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
      <div className="text-4xl font-bold text-white">
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
      className="relative pt-12 pb-24 bg-gray-900 text-white font-sans overflow-hidden"
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">
              Trusted by Industry Leaders
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Trusted by
            </span>
            <span className="block text-gray-100">
              Transportation Companies Nationwide
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join hundreds of luxury transportation companies who trust us with
            their technology and operations.
          </p>
        </div>

        {/* Trust Statistics (Cardless) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          {trustStats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>

        {/* Onboarding Banner and Testimonial Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-20 gap-6 items-stretch">
            {/* Onboarding Banner (65% width) */}
            <div className="lg:col-span-13">
              <div className="group relative bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 h-full flex items-center shadow-[0_0_20px_rgba(79,172,254,0.1)] transition-all duration-300 hover:border-cyan-400/50">
                <div className="flex items-center space-x-6 w-full">
                  <div className="relative w-20 h-20 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                    <Rocket className="w-10 h-10 text-blue-400" />
                  </div>
                  <div className="relative flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Rapid 24-Hour Onboarding
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Your dedicated, fully-trained back-office team can be live in
                      under 24 hours. No lengthy setup processes or training delays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial (35% width) */}
            <div className="lg:col-span-7">
              <div className="h-full flex flex-col justify-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl rounded-br-md p-6 shadow-lg h-full flex items-center">
                    <p className="text-white text-lg leading-relaxed">
                      "The 24/7 support has been phenomenal. VAssist Pro transformed
                      our operation, and the ROI was immediate and substantial."
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-[-10px] w-5 h-5 text-blue-600">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M0 20 L20 20 L20 0 C15 5, 10 10, 0 20 Z" />
                    </svg>
                  </div>
                </div>
                <footer className="mt-6 not-italic text-base font-semibold text-gray-400 text-right">
                  — Marcus Thompson, CEO
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
