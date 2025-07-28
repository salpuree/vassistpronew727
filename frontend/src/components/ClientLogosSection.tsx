import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

const ClientLogosSection = () => {
  const clientLogos = [
    {
      name: "Elite Transportation Group",
      logo: "🚗",
      industry: "Luxury Ground Transportation",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Metropolitan Limousines",
      logo: "🏙️",
      industry: "Corporate Transportation",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Premier Executive Services",
      logo: "⭐",
      industry: "Executive Transportation",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Luxury Fleet Solutions",
      logo: "💼",
      industry: "Fleet Management",
      bgGradient: "from-amber-500/20 to-orange-500/20"
    },
    {
      name: "Black Car Network",
      logo: "🌟",
      industry: "Premium Transportation",
      bgGradient: "from-indigo-500/20 to-blue-500/20"
    },
    {
      name: "Prestige Transport Co.",
      logo: "👑",
      industry: "VIP Services",
      bgGradient: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const trustStats = [
    {
      icon: Users,
      metric: "500+",
      label: "Trusted Clients",
      description: "Transportation companies nationwide"
    },
    {
      icon: Award,
      metric: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge"
    },
    {
      icon: Shield,
      metric: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service you can count on"
    },
    {
      icon: TrendingUp,
      metric: "100%",
      label: "Success Rate",
      description: "Every project delivered successfully"
    }
  ];

  return (
    <section className="py-12 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Trusted by</span>
            <span className="block text-foreground">Transportation Companies Nationwide</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of luxury transportation companies who trust us with their technology and operations.
          </p>
        </div>

        {/* Trust Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {trustStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-7 h-7 flex items-center justify-center mx-auto mb-1">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient">{stat.metric}</div>
              <div className="text-sm text-foreground font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Some of Our <span className="text-gradient">Valued Clients</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="group cursor-default"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`relative bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl p-4 hover:border-primary/30 transition-all duration-500 hover:bg-card/60 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 text-center`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${client.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Logo */}
                  <div className={`w-12 h-12 bg-gradient-to-br ${client.bgGradient} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:rotate-3 transition-transform duration-300 border border-primary/30`}>
                    <span className="text-xl">{client.logo}</span>
                  </div>

                  {/* Company name */}
                  <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {client.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {client.industry}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            * Client names have been modified for confidentiality. References available upon request.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;