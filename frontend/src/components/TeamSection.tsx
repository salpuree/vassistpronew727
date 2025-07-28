import { Users, Award, Clock, Globe, Linkedin, Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-development.jpg";

const TeamSection = () => {
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Developers + Back-office professionals"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Technology + Operations expertise"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Operations",
      description: "Never miss a call or opportunity"
    },
    {
      icon: Globe,
      number: "500K+",
      label: "Calls Handled",
      description: "Professional customer interactions"
    }
  ];

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

  return (
    <section className="py-16 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Our Team</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Expert Team</span>
            <span className="block text-foreground">Dedicated to Your Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized team combines technical expertise with operational excellence for luxury transportation.
            From developers to customer service professionals - we're your complete strategic partner for business success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="card-luxury text-center group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-muted-foreground text-sm">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Team Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <img 
                src={teamImage} 
                alt="Development Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full animate-float" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary/30 rounded-full animate-float" style={{animationDelay: "2s"}} />
          </div>

          {/* Team Content */}
          <div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-gradient">Expert Team?</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Technology + Operations Excellence</h4>
                  <p className="text-muted-foreground">Unique combination of technical expertise and professional back-office operations for complete solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Your Strategic Partner</h4>
                  <p className="text-muted-foreground">We seamlessly integrate with your business as a trusted strategic partner, delivering enterprise-level expertise without the overhead costs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Luxury Transportation Specialists</h4>
                  <p className="text-muted-foreground">Deep understanding of Limo Anywhere, GNet, and the unique needs of luxury transportation companies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">24/7 Operations Capability</h4>
                  <p className="text-muted-foreground">Never miss a booking or customer inquiry with our round-the-clock professional support team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative bg-card/40 backdrop-blur-xl border border-border/20 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 hover:bg-card/60 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Avatar with modern design */}
                  <div className="relative mb-6 mx-auto w-fit">
                    <div className={`w-20 h-20 bg-gradient-to-br ${member.bgColor} rounded-2xl flex items-center justify-center text-3xl border ${member.borderColor} group-hover:rotate-3 transition-transform duration-300`}>
                      {member.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Text content with improved contrast */}
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h4>
                  <div className="text-primary font-semibold mb-2 text-base">
                    {member.role}
                  </div>
                  <div className="text-primary/90 text-sm font-medium mb-4 px-3 py-1 bg-primary/10 rounded-full inline-block">
                    {member.specialization}
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed mb-6 font-medium">
                    {member.description}
                  </p>

                  {/* Social links with modern design */}
                  <div className="flex justify-center space-x-3">
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3">
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
