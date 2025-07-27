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
    <section className="py-24 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cog className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Complete Business Solutions</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Technology + Operations</span>
            <span className="block text-foreground">Your Force Behind the Curtains</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide both cutting-edge technology solutions and comprehensive back-office support services.
            From Limo Anywhere integrations to specialized email handling for bookings, quotes, updates, and inquiries - we handle it all so you can focus on growth.
          </p>
        </div>

        {/* Technology Solutions - Collapsible */}
        <Collapsible 
          open={techExpanded} 
          onOpenChange={setTechExpanded}
          className="mb-12"
        >
          <CollapsibleTrigger className="w-full text-left p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 flex items-center justify-between group subtle-default-glow hover-glow">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                <span className="text-gradient">Technology Solutions</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Premium web development and software integration services
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {techExpanded ? (
                <Minus className="w-6 h-6 text-primary" />
              ) : (
                <Plus className="w-6 h-6 text-primary" />
              )}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="mt-8">
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
          <CollapsibleTrigger className="w-full text-left p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:bg-card/50 transition-all duration-300 flex items-center justify-between group subtle-default-glow hover-glow">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                <span className="text-gradient">Back-Office Support Services</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Your strategic partner specializing in email handling for bookings, quotes, updates, inquiries, calls, and customer service
              </p>
            </div>
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              {backOfficeExpanded ? (
                <Minus className="w-6 h-6 text-primary" />
              ) : (
                <Plus className="w-6 h-6 text-primary" />
              )}
            </div>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <div className="mt-8">
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

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="relative white-section-style p-12 w-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 group cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
              Ready to Transform Your Transportation Business?
            </h3>
            <p className="text-xl mb-8">
              Get both premium technology solutions and comprehensive back-office support.
              Let's discuss how we can become your trusted strategic partner for business excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury group-hover:scale-105 transition-transform duration-300">
                Schedule Free Consultation
              </Button>
              <Button className="btn-outline-luxury">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
