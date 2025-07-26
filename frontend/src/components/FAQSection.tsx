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
          question: "How quickly can you implement your services for our transportation company?",
          answer: "Our standard implementation takes 4-6 weeks for complete technology integration and back-office support setup. For urgent needs, we offer expedited implementation in as little as 2 weeks. This includes Limo Anywhere/GNet integration, team training on your procedures, and full operational handover with dedicated support."
        },
        {
          question: "What information do you need from us to get started?",
          answer: "We'll need your current system details (Limo Anywhere, GNet, or other platforms), business procedures, service standards, contact information, and access credentials for integration. Our onboarding team will guide you through a comprehensive discovery process to ensure we understand your unique business requirements."
        },
        {
          question: "Do you work with companies outside of luxury transportation?",
          answer: "While we specialize in luxury transportation and have deep expertise in this industry, we do work with related service businesses like corporate transportation, medical transport, and high-end logistics companies. Our specialized knowledge of transportation regulations and customer service standards transfers well to similar industries."
        },
        {
          question: "Can you handle seasonal fluctuations in our business?",
          answer: "Absolutely. We understand the seasonal nature of luxury transportation and can scale our support up or down based on your needs. Whether it's prom season, wedding season, or holiday corporate events, we adjust our capacity to match your demand without you having to manage additional staff."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      icon: DollarSign,
      questions: [
        {
          question: "Why don't you list specific prices on your website?",
          answer: "Every transportation company has unique needs, call volumes, and service requirements. We provide custom pricing based on your specific situation to ensure you get the best value. Our pricing considers factors like call volume, service hours, integration complexity, and special requirements. Most clients find our custom approach saves them money compared to one-size-fits-all pricing."
        },
        {
          question: "What's typically included in your pricing?",
          answer: "All packages include dedicated account management, team training on your procedures, integration setup, ongoing support, performance reporting, and quality monitoring. Technology integrations, custom workflows, and specialized training may have one-time setup fees, but ongoing operations are typically billed monthly."
        },
        {
          question: "Are there any long-term contracts required?",
          answer: "We offer flexible contract terms starting with 3-month agreements for new clients to ensure mutual satisfaction. Most established clients prefer annual agreements for better pricing and priority support. We believe in earning your business through excellent service, not locking you into lengthy contracts."
        },
        {
          question: "How do costs compare to hiring in-house staff?",
          answer: "Most clients save 40-60% compared to hiring equivalent in-house staff when you factor in salaries, benefits, training, management overhead, and coverage for sick days/vacations. Plus, you get immediate expertise without the time and cost of hiring and training staff who may not have transportation industry experience."
        }
      ]
    },
    {
      category: "Technology & Integration",
      icon: Settings,
      questions: [
        {
          question: "Which transportation software systems do you integrate with?",
          answer: "We specialize in Limo Anywhere and GNet systems with certified expertise in both platforms. We also integrate with most major transportation software including GroundSpan, Chauffeur, TaxiCaller, and custom-built systems. If you use a different platform, we'll work with their technical team to establish integration."
        },
        {
          question: "What if our current system isn't working properly?",
          answer: "System optimization is one of our specialties. We can diagnose issues with your current Limo Anywhere, GNet, or other platform setup and implement fixes. Many clients come to us with underperforming systems that we've been able to optimize for significantly better performance and user experience."
        },
        {
          question: "Do you provide ongoing technical support for our systems?",
          answer: "Yes, technical support is included in all our packages. We monitor your systems, perform regular updates, troubleshoot issues, and coordinate with software vendors when needed. You get dedicated technical support without needing an in-house IT person familiar with transportation software."
        },
        {
          question: "Can you help us migrate from one system to another?",
          answer: "Absolutely. We've handled numerous system migrations including data transfer, workflow recreation, and staff training on new platforms. We ensure zero downtime during transitions and can run parallel systems during testing phases to ensure everything works perfectly before full cutover."
        }
      ]
    },
    {
      category: "Service & Support",
      icon: Users,
      questions: [
        {
          question: "How do you train your team on our specific business procedures?",
          answer: "We start with a comprehensive onboarding process where our team learns your booking procedures, pricing structures, service standards, and customer communication style. We create custom scripts and procedures specific to your business, conduct role-playing sessions, and have your team review and approve our approach before going live."
        },
        {
          question: "What happens if there's an issue with call quality or service?",
          answer: "All calls are monitored and scored for quality. If there's ever an issue, we address it immediately with retraining, process adjustments, or team changes as needed. We maintain detailed performance metrics and conduct regular quality reviews to ensure consistently excellent service that represents your brand properly."
        },
        {
          question: "How do you handle after-hours and emergency calls?",
          answer: "Our 24/7 packages include full after-hours coverage with the same high standards as business hours. We have protocols for emergency situations, vehicle breakdowns, flight delays, and other urgent matters. Emergency calls are escalated to supervisors and can be forwarded to you immediately if needed."
        },
        {
          question: "Can clients tell that they're speaking with a virtual assistant?",
          answer: "No. Our team is trained to represent your company as if they're in-house employees. We use your company name, follow your procedures, and maintain your brand standards. Most clients' customers never realize they're speaking with our team rather than direct employees."
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      questions: [
        {
          question: "How do you protect our customer data and business information?",
          answer: "We maintain SOC 2 Type II compliance with bank-level security measures including 256-bit SSL encryption, secure data centers, multi-factor authentication, and comprehensive access controls. All team members sign strict confidentiality agreements and undergo background checks."
        },
        {
          question: "What happens to our data if we stop using your services?",
          answer: "You retain full ownership of all your data. Upon service termination, we provide complete data export in standard formats and securely delete all information from our systems within 30 days. We never hold your data hostage and ensure smooth transitions if you decide to change providers."
        },
        {
          question: "Are you compliant with transportation industry regulations?",
          answer: "Yes, we understand DOT requirements, insurance regulations, and state licensing requirements that affect luxury transportation companies. Our team is trained on privacy requirements for corporate clients and VIP handling procedures that meet luxury service standards."
        },
        {
          question: "Do you have business insurance and liability coverage?",
          answer: "We carry comprehensive business liability insurance, professional indemnity coverage, and cyber liability insurance. We can provide certificates of insurance and include your company as an additional insured if required for your business arrangements."
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
    <section className="py-24 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Get Answers</span>
            <span className="block text-foreground">To Your Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, implementation, pricing, and support. 
            Don't see your question? Contact us directly for personalized assistance.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
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
                        className="w-full text-left p-6 hover:bg-card/50 transition-colors duration-200"
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
                        <CardContent className="pt-0 pb-6 px-6">
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
          <div className="text-center mb-12">
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
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto">
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