import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Clock,
  DollarSign,
  Settings,
  Users,
  Shield,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "Getting Started",
      icon: Settings,
      questions: [
        {
          question: "What do you need from us to get started?",
          answer: "Just your platform details (Limo Anywhere, GNet, etc.), SOPs, service standards, contact info, and access credentials. We'll guide you through the onboarding process."
        },
        {
          question: "How fast can you start working with our transportation company?",
          answer: "We can fully onboard you in 24 hours. This includes Limo Anywhere or GNet integration, training our team on your procedures, and a complete operational handoff."
        },
        {
          question: "Do you only support luxury transportation companies?",
          answer: "Luxury transportation is our core focus, but we also support industries like healthcare, handling patient appointment bookings with the same professionalism."
        }
      ]
    },
    {
      category: "Technology & Integration",
      icon: Settings,
      questions: [
        {
          question: "Which software platforms do you integrate with?",
          answer: "We specialize in Limo Anywhere and GNet for dispatching, and support Gmail, Outlook, Helpwise, and Front for email handling. We also work with Slack for team communication, and Dialpad, Vonage, and RingCentral for call management. These are just a few examples. If your platform has an API, we can integrate with it."
        },
        {
          question: "Do you offer technical support and system optimization?",
          answer: "Yes. We monitor, troubleshoot, and optimize your systems while coordinating directly with your software vendors. No need for in-house IT."
        },
        {
          question: "Can you help restructure our current systems for better efficiency and quality control?",
          answer: "Yes. We can help restructure your company by aligning with your preferred email handling tools, team communication apps, and setting up quality assurance monitoring to ensure every interaction is handled correctly."
        }
      ]
    },
    {
      category: "Service Features & Quality",
      icon: Users,
      questions: [
        {
          question: "Do you offer quality control services?",
          answer: "Yes. If needed, we can provide dedicated quality control as part of your plan. Every reservation, call, and email can be monitored and reviewed each time it's handled. You can decide the level of QC during the onboarding or planning phase."
        },
        {
          question: "Can I customize the greeting script for agents?",
          answer: "Yes. You can fully customize greetings, tone, and instructions to match your brand voice and client experience."
        },
        {
          question: "Can I listen to call recordings?",
          answer: "Yes. All inbound and outbound calls are recorded and made available to you for training, QA, or resolving disputes."
        },
        {
          question: "How do you handle seasonal spikes or emergencies?",
          answer: "Your engagement manager will plan ahead for peak seasons like proms, weddings, or holidays. For 24/7 coverage, we offer backup agent add-ons to keep things running smoothly."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      icon: DollarSign,
      questions: [
        {
          question: "How do your prices compare to hiring in-house?",
          answer: "Most clients save 40 to 60 percent compared to hiring internal staff. You avoid the overhead of recruitment, training, benefits, and management while getting trained experts right away."
        },
        {
          question: "What's included in your service packages?",
          answer: "Every plan includes a dedicated account manager, integration setup, team training, quality monitoring, performance reporting, and ongoing support. Custom workflows and 24/7 backup coverage are optional."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards including Amex, Visa, and MasterCard via a secure payment link."
        },
        {
          question: "How does your billing work?",
          answer: "All billing is prepaid."
        }
      ]
    }
  ];

  const quickContacts = [
    {
      type: "Sales Questions",
      icon: Phone,
      contact: "(941) 623-4590",
      description: "Speak with our sales team about packages and pricing"
    },
    {
      type: "Technical Support",
      icon: Mail,
      contact: "support@virtualassistancepro.com", 
      description: "Get help with integrations and technical issues"
    },
    {
      type: "General Inquiries",
      icon: Mail,
      contact: "info@virtualassistancepro.com",
      description: "Ask questions about our services and capabilities"
    }
  ];

  return (
    <section className="py-12 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">FAQs</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">FAQs</span>
            <span className="block text-foreground">To Your Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, implementation, pricing, and support. 
            Don't see your question? Contact us directly for personalized assistance.
          </p>
        </div>

        {/* FAQ Categories */}
        <div>
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex; // Unique index
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="card-luxury overflow-hidden">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-4 hover:bg-card/50 transition-colors duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <CardContent className="pt-0 pb-4 px-4">
                          <div className="border-t border-border/50 pt-4">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact Options */}
        <div className="mt-20">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40 group cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Still Have Questions?</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for personalized answers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{contact.type}</h4>
                  <div className="text-primary font-semibold mb-3">{contact.contact}</div>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40 group cursor-pointer overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a free consultation to discuss your specific needs and get personalized recommendations 
                for your luxury transportation business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-luxury text-lg px-8 py-3">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3">
                  Download FAQ Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
