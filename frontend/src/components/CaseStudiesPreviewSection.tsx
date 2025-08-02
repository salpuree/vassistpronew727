import React, { useState, useEffect, useRef } from "react";
import { TrendingUp, Award, ArrowRight, CheckCircle, Zap } from "lucide-react";

// --- Data ---
const caseStudies = [
  {
    company: "Elite Transport Miami",
    location: "Miami, FL",
    challenge:
      "Manual processes were causing a 30% rate of missed opportunities and booking errors.",
    solution:
      "A complete Limo Anywhere integration coupled with our 24/7 dispatch and operations support.",
    results: [
      { icon: TrendingUp, metric: "Booking Conversion", improvement: "+57%" },
      { icon: Zap, metric: "Response Time", improvement: "94% faster" },
      { icon: CheckCircle, metric: "Monthly Revenue", improvement: "+58%" },
    ],
  },
  {
    company: "Premier Executive Services",
    location: "New York, NY",
    challenge:
      "Significant email delays and a complete lack of after-hours support led to lost clients.",
    solution:
      "Advanced email management, extended support hours, and strategic automation workflows.",
    results: [
      { icon: Zap, metric: "Email Response", improvement: "92% faster" },
      { icon: TrendingUp, metric: "After-Hours Bookings", improvement: "+35%" },
      {
        icon: CheckCircle,
        metric: "Operational Costs",
        improvement: "47% savings",
      },
    ],
  },
];

// --- Reusable CaseStudyCard Component (Visually Enhanced) ---
const CaseStudyCard = ({ study }) => {
  const cardWrapperRef = useRef(null);
  const [style, setStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});

  const handleMouseMove = (e) => {
    const { currentTarget: wrapper } = e;
    const { left, top, width, height } = wrapper.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -5;
    const rotateY = ((x - width / 2) / (width / 2)) * 5;

    setStyle({
      transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "transform 0.1s ease-out",
    });

    setShineStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1500px) rotateX(0) rotateY(0)",
      transition: "transform 0.6s ease-in-out",
    });
    setShineStyle({});
  };

  const ResultIcon = ({ icon }) => {
    const IconComponent = icon;
    return <IconComponent className="w-5 h-5 text-blue-400 mr-4" />;
  };

  return (
    <div
      ref={cardWrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-cyan-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>

      {/* Main Card Content */}
      <div
        style={style}
        className="relative bg-[#182034] border border-gray-700/50 rounded-2xl p-6 md:p-8 transition-all duration-300 h-full flex flex-col group-hover:border-cyan-500/50"
      >
        {/* Shine Effect */}
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-2xl"
          style={shineStyle}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">{study.company}</h3>
            <p className="text-sm text-blue-400 font-semibold">
              {study.location}
            </p>
          </div>

          {/* CHANGE: Added group-hover effect to internal borders */}
          <div className="flex-grow space-y-5 mb-8 border-t border-b border-gray-700/50 py-6 transition-colors duration-300 group-hover:border-cyan-500/50">
            <div>
              <h4 className="font-semibold text-gray-300 text-sm mb-2">
                The Challenge
              </h4>
              <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 text-sm mb-2">
                Our Solution
              </h4>
              <p className="text-gray-400 leading-relaxed">{study.solution}</p>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="font-semibold text-gray-300 text-sm mb-4 text-center">
              Key Results
            </h4>
            {/* CHANGE: Added group-hover effect to internal borders */}
            <div className="space-y-3 bg-gray-900/30 p-4 rounded-lg border border-gray-700/50 transition-colors duration-300 group-hover:border-cyan-500/50">
              {study.results.map((result, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ResultIcon icon={result.icon} />
                    <span className="text-gray-300">{result.metric}</span>
                  </div>
                  <span className="text-lg font-bold text-blue-400">
                    {result.improvement}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <a
              href="#"
              className="group/button relative inline-flex items-center justify-center w-full text-center px-4 py-3 font-semibold text-gray-200 bg-gray-800/60 border-2 border-gray-700 rounded-lg transition-all duration-300 hover:border-blue-500 hover:text-white overflow-hidden"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 transition-all duration-500 ease-in-out group-hover/button:w-full"></span>
              <span className="relative z-10 flex items-center">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Section Component ---
const CaseStudiesPreviewSection = () => {
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Award className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Real Results
            </span>
            <span className="block text-gray-100">
              From Real Transportation Companies
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how luxury transportation companies have transformed their
            operations with our strategic partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="group/cta relative inline-flex items-center px-8 py-4 font-bold text-lg text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent to-white/30 transform -skew-x-12 group-hover/cta:translate-x-[300%] transition-transform duration-700 ease-in-out"></span>
            <span className="relative flex items-center">
              Explore All Success Stories
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreviewSection;
