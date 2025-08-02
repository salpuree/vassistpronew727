
import React, { useState, useEffect, useRef } from "react";
import { Award, Shield, Users, Star, MessageCircle, Calendar, Mail, BarChart3, FileText, Camera, Headphones, Database, Smartphone, CheckCircle, Sparkles } from "lucide-react";

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

const services = [
  { name: "Social Media Management", icon: Camera, position: { top: "15%", left: "5%" } },
  { name: "Content Creation", icon: FileText, position: { top: "35%", left: "8%" } },
  { name: "Customer Support", icon: Headphones, position: { top: "55%", left: "5%" } },
  { name: "Data Entry", icon: Database, position: { top: "75%", left: "12%" } },
  { name: "Email Marketing", icon: Mail, position: { top: "20%", left: "25%" } },
  { name: "Bookkeeping", icon: BarChart3, position: { top: "85%", left: "35%" } },
  { name: "Scheduling", icon: Calendar, position: { top: "25%", right: "25%" } },
];

const chatMessages = [
  {
    type: "client",
    message: "All reservations have been put in, QC'd and sent confirmations!!",
    position: { top: "8%", right: "15%" },
    avatar: "👤"
  },
  {
    type: "va",
    message: "VA: Completed the social media posts for Hetu week. Please review!",
    position: { top: "35%", right: "8%" },
    avatar: "👩‍💼"
  },
  {
    type: "client",
    message: "Client: Looks great! ? Can you also draft an email newsletter for new product launch?",
    position: { top: "50%", right: "15%" },
    avatar: "👤"
  },
  {
    type: "va",
    message: "VA: Yes, working on it now. Will share a draft by end the day.",
    position: { top: "70%", right: "25%" },
    avatar: "👩‍💼"
  },
  {
    type: "client",
    message: "Client: Excellent, thanks!",
    position: { top: "85%", right: "35%" },
    avatar: "👤"
  }
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

// --- Service Badge Component ---
const ServiceBadge = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div 
      className="absolute bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-gray-200/50 animate-float"
      style={service.position}
    >
      <div className="flex items-center space-x-2">
        <IconComponent className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
          {service.name}
        </span>
      </div>
    </div>
  );
};

// --- Chat Message Component ---
const ChatMessage = ({ message, index }) => {
  const isVA = message.type === "va";
  const isClient = message.type === "client";
  
  return (
    <div 
      className="absolute animate-fade-in"
      style={{
        ...message.position,
        animationDelay: `${index * 0.5}s`
      }}
    >
      <div className={`max-w-xs ${isClient ? 'ml-auto' : ''}`}>
        <div className={`rounded-2xl p-3 shadow-lg ${
          isVA 
            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-br-md' 
            : 'bg-white text-gray-800 border border-gray-200'
        }`}>
          <p className="text-sm leading-relaxed">
            {message.message}
          </p>
          {isVA && (
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">👩‍💼</span>
              </div>
            </div>
          )}
        </div>
        {isVA && (
          <div className="absolute bottom-0 right-[-8px] w-4 h-4 text-blue-600">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 16 L16 16 L16 0 C12 4, 8 8, 0 16 Z" />
            </svg>
          </div>
        )}
      </div>
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/30 border border-blue-200/20 mb-6">
            <Shield className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-200 font-semibold">
              Your Virtual Assistant Team in Action
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              See How We Work
            </span>
            <span className="block text-gray-100">
              Behind the Scenes for You
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            From managing your reservations to handling social media, our dedicated team seamlessly integrates 
            with your business operations - here's a glimpse into their daily workflow.
          </p>
        </div>

        {/* Interactive Workflow Visualization */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10 rounded-3xl"></div>
          
          {/* Central VA Avatar */}
          <div className="relative z-20 flex justify-center py-20">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 animate-pulse-soft">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
                    <span className="text-4xl">👩‍💼</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-gray-800">Your VA Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Badges */}
          {services.map((service, index) => (
            <ServiceBadge key={index} service={service} />
          ))}

          {/* Chat Messages */}
          {chatMessages.map((message, index) => (
            <ChatMessage key={index} message={message} index={index} />
          ))}

          {/* Software Icons */}
          <div className="absolute top-1/4 right-1/3 animate-float" style={{animationDelay: "1s"}}>
            <div className="bg-orange-500 rounded-lg p-3 shadow-lg">
              <span className="text-white font-bold text-sm">Limo Anywhere</span>
            </div>
          </div>

          <div className="absolute top-2/3 left-1/4 animate-float" style={{animationDelay: "2s"}}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3 shadow-lg">
              <span className="text-white font-bold text-sm">Front</span>
            </div>
          </div>

          <div className="absolute bottom-1/4 right-1/4 animate-float" style={{animationDelay: "3s"}}>
            <div className="bg-green-500 rounded-lg p-3 shadow-lg">
              <span className="text-white font-bold text-sm">Canva</span>
            </div>
          </div>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {trustStats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-600/20 border border-green-400/30 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-green-300 font-semibold">Ready to Get Started?</span>
          </div>
          <p className="text-lg text-gray-400 mb-6">
            See how our team can transform your business operations in just 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
