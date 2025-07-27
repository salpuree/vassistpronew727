import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ArrowRight, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@virtualassistancepro.com",
      description: "Get a response within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (941) 623-4590",
      description: "Mon-Fri 8AM-8PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "New York, NY",
      description: "Schedule an in-person meeting"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 Hours",
      description: "Fast, professional responses"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Let's Start Your Project</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Ready to Elevate</span>
            <span className="block text-foreground">Your Transportation Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get a free consultation with our luxury transportation experts. 
            Let's discuss how we can provide both premium technology solutions and comprehensive back-office support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-luxury hover-glow">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground">
                  Tell Us About Your Project
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you with a detailed proposal within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-foreground">Service Needed *</Label>
                      <Select onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="limo-anywhere">Limo Anywhere Integration</SelectItem>
                          <SelectItem value="gnet">GNet Development</SelectItem>
                          <SelectItem value="custom-addons">Custom Add-ons</SelectItem>
                          <SelectItem value="website">Premium Website</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="back-office-support">24/7 Back-Office Support</SelectItem>
                          <SelectItem value="call-answering">Call Answering Service</SelectItem>
                          <SelectItem value="email-support">Email Support Management</SelectItem>
                          <SelectItem value="complete-solution">Complete Tech + Operations Solution</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-foreground">Project Budget *</Label>
                      <Select onValueChange={(value) => handleChange("budget", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small-business">Small Business Budget</SelectItem>
                          <SelectItem value="medium-business">Medium Business Budget</SelectItem>
                          <SelectItem value="large-business">Large Business Budget</SelectItem>
                          <SelectItem value="enterprise">Enterprise Budget</SelectItem>
                          <SelectItem value="custom">Custom Quote Needed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-foreground">Project Timeline *</Label>
                    <Select onValueChange={(value) => handleChange("timeline", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="When do you need this completed?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 Months</SelectItem>
                        <SelectItem value="3-6-months">3-6 Months</SelectItem>
                        <SelectItem value="6-12-months">6-12 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your current setup, challenges, and what you're looking to achieve..."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-luxury w-full group">
                    Send Project Details
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <div className="text-primary font-medium mb-1">{info.details}</div>
                      <div className="text-sm text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Action Cards - Now below the form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
          <div className="group cursor-pointer">
            <div className="relative bg-card/60 backdrop-blur-xl border border-primary/30 rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:bg-card/80 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/30 group-hover:rotate-3 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Free 30-Minute Consultation
                </h3>
                <p className="text-foreground/80 mb-6 font-medium leading-relaxed">
                  Book a free consultation to discuss your transportation technology needs.
                </p>
                <Button className="btn-luxury w-full text-lg py-3 hover:scale-105 transition-transform duration-300">
                  Schedule Call
                </Button>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative bg-card/60 backdrop-blur-xl border border-border/30 rounded-3xl p-8 text-center hover:border-primary/50 transition-all duration-500 hover:bg-card/80 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30 group-hover:rotate-3 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  Emergency Support
                </h3>
                <p className="text-foreground/80 mb-6 font-medium leading-relaxed">
                  Need immediate help with your existing systems? We're here 24/7.
                </p>
                <Button variant="outline" className="btn-outline-luxury w-full text-lg py-3 hover:scale-105 transition-transform duration-300">
                  Get Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="relative white-section-style p-12 w-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 group cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-primary transition-colors duration-300 relative z-10">
              Why Transportation Companies Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">&lt; 15min</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-gray-600">Project Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
