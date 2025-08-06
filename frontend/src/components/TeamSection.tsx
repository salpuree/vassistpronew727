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
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
      transition: "transform 0.1s ease-out",
    });

    setShineStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
    });
  };

  const handleCardMouseLeave = () => {
    setCardStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl overflow-hidden" style={{ margin: '20px auto 0' }}>
          
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
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link to="/team">
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium px-8 py-4 text-lg shadow-lg hover:shadow-cyan-500/40">
                  Meet Our Core Team
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
