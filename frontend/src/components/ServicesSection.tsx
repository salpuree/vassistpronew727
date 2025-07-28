import { useState } from "react";
import { Monitor, Smartphone, Cog, Globe, Zap, Shield, Phone, Mail, Clock, Users, Headphones, Settings } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const ServicesSection = () => {
  const [techExpanded, setTechExpanded] = useState(false);
  const [backOfficeExpanded, setBackOfficeExpanded] = useState(false);

  const techServices = [
    {
      icon: Monitor,
      title: "Limo Anywhere Integration",
      description: "Complete integration and customization of Limo Anywhere systems. From booking interfaces to dispatch management, we optimize your operations.",
      features: ["Custom Booking Forms", "Dispatch Optimization", "Payment Integration", "Reporting Dashboards"]
    },
    {
      icon: Globe,
      title: "GNet System Expertise", 
      description: "Advanced GNet implementations and customizations for luxury transportation companies. Seamless data flow and enhanced functionality.",
      features: ["System Integration", "Data Migration", "Custom Workflows", "API Development"]
    },
    {
      icon: Cog,
      title: "Custom Add-ons Development",
      description: "Bespoke add-ons and extensions tailored to your unique business needs. Enhance your existing systems with powerful custom features.",
      features: ["Custom Modules", "Third-party Integrations", "Workflow Automation", "Business Logic"]
    },
    {
      icon: Smartphone,
      title: "Premium Website & Mobile Apps",
      description: "Luxury website design and mobile applications that reflect your brand's sophistication. Mobile-first, conversion-optimized experiences.",
      features: ["Luxury Design", "Mobile Apps", "SEO Integration", "Performance Tuning"]
    }
  ];

  const backOfficeServices = [
    {
      icon: Phone,
      title: "24/7 Call Answering",
      description: "Professional call answering service handling bookings, quotes, and customer inquiries. We become your invisible in-house team.",
      features: ["Booking Management", "Quote Processing", "Customer Service", "Professional Scripts"]
    },
    {
      icon: Mail,
      title: "Email Support & Management",
      description: "Specialized email handling for booking requests, quote inquiries, schedule updates, and customer support. We manage your entire email workflow seamlessly.",
      features: ["Booking Email Processing", "Quote Request Handling", "Schedule Update Management", "Customer Inquiry Response", "Administrative Correspondence"]
    },
    {
      icon: Settings,
      title: "Booking Changes & Updates",
      description: "Handle all booking modifications, cancellations, and updates seamlessly. Your customers get immediate professional assistance.",
      features: ["Schedule Changes", "Cancellations", "Route Updates", "Special Requests"]
    },
    {
      icon: Headphones,
      title: "Customer Service Excellence",
      description: "Trained professionals who understand luxury transportation standards. We represent your brand with the highest level of service.",
      features: ["Luxury Standards", "Brand Representation", "Problem Resolution", "Quality Assurance"]
    }
  ];



  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Technology Solutions - Collapsible */}
        <Collapsible 
          open={techExpanded} 
          onOpenChange={setTechExpanded}
          className="mb-12"
        >
          <CollapsibleTrigger className={`w-full text-left p-6 bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 flex items-center justify-between group subtle-default-glow hover-glow ${
            techExpanded ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                <span className="text-gradient">Technology Solutions</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Premium web development and software integration services
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-glow animate-pulse-soft">
              {techExpanded ? (
                <Minus className="w-6 h-6 text-primary" />
              ) : (
                <Plus className="w-6 h-6 text-primary" />
              )}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 border-t-0 rounded-b-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techServices.map((service, index) => (
                  <Card
                    key={index}
                    className="card-luxury group hover-lift hover-glow transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Back-Office Support Services - Collapsible */}
        <Collapsible 
          open={backOfficeExpanded} 
          onOpenChange={setBackOfficeExpanded}
          className="mb-20"
        >
          <CollapsibleTrigger className={`w-full text-left p-6 bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 flex items-center justify-between group subtle-default-glow hover-glow ${
            backOfficeExpanded ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                <span className="text-gradient">Back-Office Support Services</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Your strategic partner specializing in email handling for bookings, quotes, updates, inquiries, calls, and customer service
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors animate-glow animate-pulse-soft">
              {backOfficeExpanded ? (
                <Minus className="w-6 h-6 text-primary" />
              ) : (
                <Plus className="w-6 h-6 text-primary" />
              )}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 border-t-0 rounded-b-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {backOfficeServices.map((service, index) => (
                  <Card
                    key={index}
                    className="card-luxury group hover-lift hover-glow transition-all duration-300"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};

export default ServicesSection;
