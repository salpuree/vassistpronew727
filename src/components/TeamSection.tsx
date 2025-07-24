import { Users, Award, Clock, Globe, Linkedin, Github, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-development.jpg";

const TeamSection = () => {
  const stats = [
    {
      icon: Users,
      number: "75+",
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
      name: "Alex Rodriguez",
      role: "Lead Developer",
      specialization: "Limo Anywhere Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "10+ years specializing in Limo Anywhere integrations and custom development."
    },
    {
      name: "Linta T.",
      role: "Operations Director",
      specialization: "Back-Office Operations",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Manages our 24/7 call center and back-office operations team."
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      specialization: "GNet & Mobile Apps",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in GNet systems and mobile app development for transportation."
    },
    {
      name: "Emaan A.",
      role: "Customer Service Manager",
      specialization: "Luxury Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Ensures all customer interactions meet luxury transportation standards."
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient">
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
            From developers to customer service professionals - we're your complete invisible team.
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
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
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
                  <h4 className="text-xl font-semibold text-foreground mb-2">Your Invisible Team</h4>
                  <p className="text-muted-foreground">We seamlessly integrate with your business, acting as your in-house team without the overhead costs.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="card-luxury text-center group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-1">{member.name}</h4>
                <div className="text-primary font-medium mb-1">{member.role}</div>
                <div className="text-sm text-primary/80 mb-4">{member.specialization}</div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
