import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

const ClientLogosSection = () => {
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

      </div>
    </section>
  );
};

export default ClientLogosSection;