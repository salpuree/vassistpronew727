import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Clock,
  Users,
  TrendingUp,
  Shield,
  CheckCircle
} from "lucide-react";

const CollapsibleSocialProof = () => {

  const trustIndicators = [
    {
      metric: "24/7",
      label: "Support Available",
      icon: Clock,
      description: "Always here to help"
    },
    {
      metric: "< 1 hour",
      label: "Response Time",
      icon: TrendingUp,
      description: "Quick support"
    },
    {
      metric: "5+",
      label: "Years Experience",
      icon: Heart,
      description: "Growing expertise"
    },
    {
      metric: "50+",
      label: "Happy Clients",
      icon: Users,
      description: "Building trust daily"
    }
  ];


  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Heart className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Reliable Service</span>
            <span className="block text-foreground">& Personal Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're a growing team dedicated to providing excellent virtual assistance services to transportation companies. Our focus is on building lasting relationships and delivering results.
          </p>
        </div>

        {/* Trust Indicators Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <indicator.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{indicator.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{indicator.label}</div>
                <div className="text-xs text-muted-foreground">{indicator.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
};

export default CollapsibleSocialProof;
