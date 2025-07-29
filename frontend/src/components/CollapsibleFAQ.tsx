import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Settings,
  DollarSign,
  ArrowRight
} from "lucide-react";

const CollapsibleFAQ = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const previewFAQs = [
    {
      question: "How quickly can you implement your services?",
      answer: "Our standard implementation takes 4-6 weeks for complete setup, with expedited 2-week options available for urgent needs."
    },
    {
      question: "Why don't you list specific prices?",
      answer: "Every transportation company has unique needs. We provide custom pricing based on your call volume, service hours, and specific requirements to ensure best value."
    },
    {
      question: "Which software systems do you integrate with?",
      answer: "We specialize in Limo Anywhere and GNet with certified expertise. We also integrate with most major transportation platforms including GroundSpan and custom systems."
    }
  ];

  const fullFAQCategories = [
    {
      category: "Getting Started",
      icon: Settings,
      questions: [
        {
          question: "What information do you need from us to get started?",
          answer: "We'll need your current system details, business procedures, service standards, and access credentials. Our onboarding team guides you through a comprehensive discovery process to understand your unique requirements."
        },
        {
          question: "Can you handle seasonal fluctuations in our business?",
          answer: "Absolutely. We understand the seasonal nature of luxury transportation and can scale our support up or down based on your needs, whether it's prom season, weddings, or holiday corporate events."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      icon: DollarSign,
      questions: [
        {
          question: "What's typically included in your pricing?",
          answer: "All packages include dedicated account management, team training on your procedures, integration setup, ongoing support, performance reporting, and quality monitoring."
        },
        {
          question: "How do costs compare to hiring in-house staff?",
          answer: "Most clients save 40-60% compared to hiring equivalent in-house staff when factoring in salaries, benefits, training, management overhead, and coverage for sick days/vacations."
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">FAQs</span>
            <span className="block text-foreground">To Your Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Find answers to common questions about our services, implementation, and pricing.
          </p>
        </div>

        {/* Preview FAQ Items */}
        <div className="mb-8">
          <div className="space-y-4">
            {previewFAQs.map((faq, index) => (
              <Card key={index} className="card-luxury">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expand/Collapse Button */}
        <div className="text-center mb-8">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="btn-outline-luxury group"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less Questions
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                View All Questions
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-fade-in">
            {fullFAQCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
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
                    const globalIndex = (categoryIndex + 1) * 100 + questionIndex;
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
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="relative white-section-style p-8 w-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 group cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to get personalized answers for your transportation business.
            </p>
            <Button className="btn-luxury group-hover:scale-105 transition-transform duration-300">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleFAQ;
