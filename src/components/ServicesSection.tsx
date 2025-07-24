import { Monitor, Smartphone, Cog, Globe, Zap, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
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
      title: "Premium Website Design",
      description: "Luxury website design and development that reflects your brand's sophistication. Mobile-first, conversion-optimized experiences.",
      features: ["Luxury Design", "Mobile Optimization", "SEO Integration", "Performance Tuning"]
    },
    {
      icon: Zap,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for your transportation business. Customer and driver apps with real-time features.",
      features: ["iOS & Android Apps", "Real-time Tracking", "Push Notifications", "Offline Capability"]
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "24/7 technical support and maintenance services. We ensure your systems run smoothly with proactive monitoring and updates.",
      features: ["24/7 Support", "System Monitoring", "Regular Updates", "Performance Optimization"]
    }
  ];

  return (
    <section className="py-24 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Cog className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Our Expertise</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Premium Services</span>
            <span className="block text-foreground">for Luxury Transportation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in cutting-edge technology solutions specifically designed for luxury transportation companies. 
            From Limo Anywhere integrations to custom mobile apps, we elevate your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-luxury group hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Transportation Business?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our expertise in Limo Anywhere, GNet, and custom development can elevate your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-luxury">
                Schedule Consultation
              </button>
              <button className="btn-outline-luxury">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;