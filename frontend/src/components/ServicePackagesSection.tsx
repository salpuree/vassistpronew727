import { useState, useEffect } from "react";
import { Check, Star, Zap, Clock, Users, Headphones, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const ServicePackagesSection = () => {
  const [expandedPackages, setExpandedPackages] = useState<boolean[]>([false, false, false]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const togglePackageExpansion = (index: number) => {
    setExpandedPackages(prev => 
      prev.map((expanded, i) => i === index ? !expanded : expanded)
    );
  };

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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {isLoading ? (
            // Skeleton Loading State
            [...Array(3)].map((_, index) => (
              <Card key={index} className="card-luxury">
                <CardHeader className="text-center pb-8">
                  <Skeleton className="w-16 h-16 rounded-2xl mx-auto mb-6" />
                  <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
                  <Skeleton className="h-8 w-1/2 mx-auto mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mx-auto" />
                </CardHeader>
                <div className="px-6 pb-4">
                  <Skeleton className="h-10 w-full mb-4" />
                </div>
              </Card>
            ))
          ) : (
            packages.map((pkg, index) => {
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
                  
                  <div className="px-6 pb-4">
                    <Collapsible 
                      open={expandedPackages[index]} 
                      onOpenChange={() => togglePackageExpansion(index)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full mb-4 flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors"
                        >
                          {expandedPackages[index] ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Show Less Details
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              View Full Details
                            </>
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <CardContent className="pt-0 px-4">
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
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;
