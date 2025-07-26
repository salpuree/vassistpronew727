import { Check, Star, Zap, Clock, Users, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicePackagesSection = () => {
  const packages = [
    {
      name: "Essential Package",
      price: "Contact for",
      period: "Custom Pricing",
      description: "Perfect for growing transportation companies",
      icon: Clock,
      features: [
        "Business Hours Coverage (8AM-6PM)",
        "Professional Call Answering",
        "Basic Email Support",
        "Booking Management",
        "Quote Processing",
        "Monthly Performance Reports",
        "Dedicated Account Manager",
        "Standard Response Times"
      ],
      popular: false,
      savings: "Significant savings vs in-house team"
    },
    {
      name: "Business Package",
      price: "Contact for",
      period: "Custom Pricing",
      description: "Comprehensive support for established companies",
      icon: Users,
      features: [
        "Extended Hours (7AM-10PM, 7 days)",
        "Advanced Call Management",
        "Complete Email Support", 
        "Booking Changes & Updates",
        "Customer Service Excellence",
        "Real-time Reporting Dashboard",
        "Priority Account Management",
        "Faster Response Times"
      ],
      popular: true,
      savings: "Significant savings vs in-house team"
    },
    {
      name: "Premium 24/7 Package",
      price: "Contact for",
      period: "Custom Pricing",
      description: "Round-the-clock premium support",
      icon: Headphones,
      features: [
        "24/7 Coverage - Never Miss a Call",
        "Complete Business Operations",
        "Advanced Customer Service",
        "Emergency Support Handling",
        "Dedicated Senior Account Manager",
        "Advanced Analytics & Insights",
        "Custom Workflow Integration",
        "Instant Response Guarantees"
      ],
      popular: false,
      savings: "Significant savings vs in-house team"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Service Packages</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Back-Office Support</span>
            <span className="block text-foreground">Packages That Scale With You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the right level of professional back-office support for your luxury transportation business.
            All packages include professional training on your specific procedures and brand standards.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <Card 
                key={index} 
                className={`card-luxury relative group hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl text-foreground mb-2">{pkg.name}</CardTitle>
                  
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                      <span className="text-muted-foreground ml-1">{pkg.period}</span>
                    </div>
                    <div className="text-sm text-primary mt-2">{pkg.savings}</div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-foreground">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={pkg.popular ? "btn-luxury w-full" : "btn-outline-luxury w-full"}
                  >
                    {pkg.popular ? "Get Started Today" : "Choose Package"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What's Included in <span className="text-gradient">Every Package</span>
            </h3>
            <p className="text-xl text-muted-foreground">
              Professional services that integrate seamlessly with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Trained Professionals</h4>
              <p className="text-sm text-muted-foreground">Your procedures, your brand standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quick Setup</h4>
              <p className="text-sm text-muted-foreground">Live in 48 hours or less</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Quality Assurance</h4>
              <p className="text-sm text-muted-foreground">Monitored calls and performance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Luxury Standards</h4>
              <p className="text-sm text-muted-foreground">White-glove customer service</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-luxury">
              Schedule Free Consultation
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Discuss your specific needs and get a custom package recommendation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;
