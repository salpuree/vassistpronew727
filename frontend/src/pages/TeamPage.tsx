<<<<<<< HEAD
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeroSection from "@/components/PageHeroSection";
import TeamSection from "@/components/TeamSection";
import { Users, Linkedin, Github, Mail } from "lucide-react";
=======
import { Users, Award, Clock, Globe, Linkedin, Github, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-development.jpg";
import { Link } from "react-router-dom";
import React, { useState, useRef } from "react";
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12

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
<<<<<<< HEAD
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PageHeroSection
          title="Our Expert Team"
          description="Meet the dedicated professionals who make your success possible. Our specialized team combines technical expertise with operational excellence for luxury transportation."
          imageUrl="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          breadcrumb="Our Team"
        />
        
        <section className="relative py-24 bg-gray-900 text-white font-sans overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.08)_0%,_rgba(29,78,216,0)_50%)]"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
                  <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10 text-center group-hover:scale-105">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/20 transition-colors">
                      <stat.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-xl font-semibold text-gray-100 mb-2">{stat.label}</div>
                    <div className="text-gray-400 text-sm">{stat.description}</div>
=======
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
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12
                  </div>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            {/* Team Introduction Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">Our Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Expert Team
                </span>
                <span className="block text-gray-100">Dedicated to Your Success</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Our specialized team combines technical expertise with operational excellence for luxury transportation.
                From developers to customer service professionals - we're your complete strategic partner.
              </p>
            </div>

            {/* Team Section Component */}
            <TeamSection />

            {/* Team Members */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The dedicated professionals behind your success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
                    <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* Avatar with modern design */}
                        <div className="relative mb-6 mx-auto w-fit">
                          <div className={`w-20 h-20 bg-gradient-to-br ${member.bgColor} rounded-2xl flex items-center justify-center text-3xl border ${member.borderColor} group-hover:rotate-3 transition-transform duration-300`}>
                            {member.avatar}
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          </div>
                        </div>

                        {/* Text content with improved contrast */}
                        <h4 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-blue-400 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <div className="text-blue-400 font-semibold mb-2 text-base">
                          {member.role}
                        </div>
                        <div className="text-blue-400/90 text-sm font-medium mb-4 px-3 py-1 bg-blue-500/10 rounded-full inline-block">
                          {member.specialization}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-medium">
                          {member.description}
                        </p>

                        {/* Social links with modern design */}
                        <div className="flex justify-center space-x-3">
                          <button className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                            <Linkedin className="w-4 h-4" />
                          </button>
                          <button className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                            <Github className="w-4 h-4" />
                          </button>
                          <button className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                            <Mail className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
=======
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
>>>>>>> 759ecd276f9dd7c5b504677e4fa68da639002a12
