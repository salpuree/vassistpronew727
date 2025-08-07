import { Users, Award, Clock, Globe, Linkedin, Github, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroSection from "@/components/PageHeroSection";
import teamImage from "@/assets/team-development.jpg";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <CustomHeroSection />
        <TeamMembersSection />
        <WhyChooseTeamSection />
      </main>
      <Footer />
    </div>
  );
};


const CustomHeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/hero-luxury-transport.jpg"
          alt="Team Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-8 w-16 h-16 bg-blue-500/20 rounded-full animate-float blur-sm" />
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: "2s"}} />
      <div className="absolute top-1/2 right-32 w-8 h-8 bg-blue-400/40 rounded-full animate-float" style={{animationDelay: "4s"}} />
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-cyan-300/30 rounded-full animate-pulse" style={{animationDelay: "1s"}} />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in">
            <Link
              to="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
            >
              <span className="mr-2">←</span>
              Back to Home
            </Link>
            <span className="text-gray-400 mx-3">/</span>
            <span className="text-gray-300 text-sm">Our Team</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 leading-tight">
              Our Expert Team
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals who make your success possible.
            Our specialized team combines technical expertise with operational
            excellence for luxury transportation.
          </p>
        </div>
      </div>
    </section>
  );
};

const TeamMembersSection = () => {
  const teamMembers = [
    {
      name: "Noor M.",
      title: "Social Media & Marketing",
      subtitle: "Digital Marketing Expert",
      description: "Manages our social media presence and digital marketing strategies for luxury transportation.",
      avatar: "👩‍💼",
      bgColor: "from-purple-500/20 to-blue-500/20"
    },
    {
      name: "Linda T.",
      title: "Chief Operations Director",
      subtitle: "Business Operations Excellence",
      description: "Linda manages the operations. Personally oversees all client relationships and ensures 24/7 operational excellence. The strategic mind behind our seamless service delivery.",
      avatar: "👑",
      bgColor: "from-amber-500/20 to-orange-500/20"
    },
    {
      name: "Gia K.",
      title: "Reservations Team Lead",
      subtitle: "Booking Management",
      description: "Leads our reservations team ensuring seamless booking experiences for luxury transportation.",
      avatar: "👩‍💻",
      bgColor: "from-pink-500/20 to-purple-500/20"
    },
    {
      name: "Emaan A.",
      title: "Client Onboarding Executive",
      subtitle: "Client Success",
      description: "Ensures smooth client onboarding and maintains exceptional client relationships.",
      avatar: "😊",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Users className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">Key Team Members</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Some of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expert Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            These are just a few of our dedicated professionals. Our full team includes specialists in technology, operations, customer service, and business development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member }) => {
  const [cardStyle, setCardStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});
  const cardRef = useRef(null);

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
    <div className="relative group">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-sm transition-all duration-300 group-hover:opacity-40"></div>
      <div 
        ref={cardRef}
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${member.bgColor} backdrop-blur-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 p-6 h-full`}
        style={cardStyle}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
      >
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-2xl"
          style={shineStyle}
        />
        
        <div className="relative z-10">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 flex items-center justify-center text-2xl mb-4 mx-auto">
              {member.avatar}
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-blue-400 font-semibold mb-1">{member.title}</p>
            <p className="text-gray-400 text-sm mb-3">{member.subtitle}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-2 mt-auto">
            <button className="p-2 rounded-lg bg-gray-800/60 hover:bg-blue-500/20 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <Mail className="w-4 h-4 text-gray-400 hover:text-blue-400" />
            </button>
            <button className="p-2 rounded-lg bg-gray-800/60 hover:bg-blue-500/20 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400" />
            </button>
            <button className="p-2 rounded-lg bg-gray-800/60 hover:bg-blue-500/20 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300">
              <Github className="w-4 h-4 text-gray-400 hover:text-blue-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseTeamSection = () => {
  const [cardStyle, setCardStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});
  const cardRef = useRef(null);

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Team Image */}
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/50 to-primary/30 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-70"></div>
            <div
              ref={cardRef}
              className="relative overflow-hidden rounded-3xl h-[500px] bg-card/60 backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-500 shadow-luxury"
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Team Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Users className="w-5 h-5 text-primary mr-2" />
              <span className="text-primary font-semibold">Expert Team</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">
                Why Choose Our
              </span>
              <span className="block text-foreground">Expert Team?</span>
            </h3>

            <p className="text-xl text-muted-foreground mb-8">
              Your dedicated back office, seamlessly integrated. We handle the complexities of your operations, so you can focus on growth.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "🔧",
                  title: "Technology + Operations Excellence",
                  desc: "Unique combination of technical expertise and professional back-office operations for complete solutions.",
                },
                {
                  icon: "🤝",
                  title: "Your Strategic Partner",
                  desc: "We seamlessly integrate with your business as a trusted strategic partner, delivering enterprise-level expertise without the overhead costs.",
                },
                {
                  icon: "🚗",
                  title: "Luxury Transportation Specialists",
                  desc: "Deep understanding of Limo Anywhere, GNet, and the unique needs of luxury transportation companies.",
                },
                {
                  icon: "🕒",
                  title: "24/7 Operations Capability",
                  desc: "Never miss a booking or customer inquiry with our round-the-clock professional support team.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start group/feature hover:bg-muted/30 p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-4 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover/feature:text-primary transition-colors">{item.title}</h4>
                    <p className="text-muted-foreground group-hover/feature:text-foreground/80 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link to="/contact">
                <Button className="btn-luxury">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamPage;
