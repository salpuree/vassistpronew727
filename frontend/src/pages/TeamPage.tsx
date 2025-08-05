import Header from "/components/Header";
import Footer from "/components/Footer";
import PageHeroSection from "/components/PageHeroSection";
import TeamSection from "/components/TeamSection";
import { Users, Linkedin, Github, Mail } from "lucide-react";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Noor M.",
      role: "Social Media & Marketing",
      specialization: "Digital Marketing Expert",
      avatar: "👩‍💼",
      bgColor: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30",
      description: "Manages our social media presence and digital marketing strategies for luxury transportation."
    },
    {
      name: "Linda T.",
      role: "Chief Operations Director",
      specialization: "Business Operations Excellence",
      avatar: "👑",
      bgColor: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30",
      description: "Linda manages the operations. Personally oversees all client relationships and ensures 24/7 operational excellence. The strategic mind behind our seamless service delivery."
    },
    {
      name: "Gia K.",
      role: "Reservations Team Lead",
      specialization: "Booking Management",
      avatar: "👩‍🏢",
      bgColor: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
      description: "Leads our reservations team ensuring seamless booking experiences for luxury transportation."
    },
    {
      name: "Emaan A.",
      role: "Client Onboarding Executive",
      specialization: "Client Success",
      avatar: "👩‍🎓",
      bgColor: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-500/30",
      description: "Ensures smooth client onboarding and maintains exceptional client relationships."
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Developers + Back-office professionals"
    },
    {
      icon: Users,
      number: "15+",
      label: "Years Experience",
      description: "Technology + Operations expertise"
    },
    {
      icon: Users,
      number: "24/7",
      label: "Operations",
      description: "Never miss a call or opportunity"
    },
    {
      icon: Users,
      number: "500K+",
      label: "Calls Handled",
      description: "Professional customer interactions"
    }
  ];

  return (
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
                  </div>
                </div>
              ))}
            </div>

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
<<<<<<< HEAD
                  <div className="relative">
                    <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
                    <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10">
                      {/* Animated background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
=======
                  </div>
  </div>
))}
                  <div className="relative bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:bg-card/60 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
>>>>>>> fb807eb3b3fbe8e03ab1b4aa4629a2d7322255e6

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
          </div>
        </section>
      </main>
      <Footer />
   </div> {/* closes team member grid */}
</section>
  );
};
  </div>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default TeamPage;
=======

export default TeamPage;
>>>>>>> fb807eb3b3fbe8e03ab1b4aa4629a2d7322255e6
