import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users, Phone, Mail, ChevronRight, Star, Award } from "lucide-react";

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Elite Transport Miami",
      location: "Miami, FL",
      industry: "Luxury Ground Transportation",
      challenge: "Manual booking processes causing 30% missed opportunities and customer service bottlenecks",
      solution: "Complete Limo Anywhere integration + 24/7 back-office support implementation",
      timeline: "6 weeks",
      results: [
        { metric: "Booking Conversion", before: "60%", after: "94%", improvement: "+57%" },
        { metric: "Response Time", before: "4+ hours", after: "< 15 minutes", improvement: "94% faster" },
        { metric: "Monthly Revenue", before: "$180K", after: "$285K", improvement: "+58%" },
        { metric: "Customer Satisfaction", before: "7.2/10", after: "9.6/10", improvement: "+33%" }
      ],
      testimonial: "VAssist Pro transformed our entire operation. We went from losing calls to never missing an opportunity. The ROI was immediate and substantial.",
      clientName: "Marcus Thompson, CEO",
      image: "🚗",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      tags: ["Limo Anywhere", "24/7 Support", "Revenue Growth"]
    },
    {
      id: 2,
      company: "Premier Executive Services",
      location: "New York, NY",
      industry: "Corporate Transportation",
      challenge: "Struggling with email management, quote processing delays, and lack of after-hours support",
      solution: "Email management system + extended hours support + custom workflow automation",
      timeline: "4 weeks",
      results: [
        { metric: "Email Response Time", before: "6+ hours", after: "< 30 minutes", improvement: "92% faster" },
        { metric: "Quote Processing", before: "2 days", after: "Same day", improvement: "100% faster" },
        { metric: "After-Hours Bookings", before: "0", after: "35% of total", improvement: "+35%" },
        { metric: "Operational Costs", before: "$15K/month", after: "$8K/month", improvement: "47% savings" }
      ],
      testimonial: "The email management alone saved us 40 hours per week. Now we capture business around the clock without hiring additional staff.",
      clientName: "Sarah Rodriguez, Operations Director",
      image: "🏙️",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      tags: ["Email Management", "Cost Reduction", "Extended Hours"]
    },
    {
      id: 3,
      company: "Luxury Rides Network",
      location: "Los Angeles, CA",
      industry: "High-End Transportation",
      challenge: "GNet system integration issues and need for premium customer service standards",
      solution: "GNet system optimization + luxury customer service training + dedicated account management",
      timeline: "8 weeks",
      results: [
        { metric: "System Efficiency", before: "65%", after: "98%", improvement: "+51%" },
        { metric: "Customer Retention", before: "78%", after: "96%", improvement: "+23%" },
        { metric: "Service Quality Score", before: "8.1/10", after: "9.8/10", improvement: "+21%" },
        { metric: "Repeat Business", before: "45%", after: "73%", improvement: "+62%" }
      ],
      testimonial: "They didn't just fix our system - they elevated our entire service standard. Our clients notice the difference immediately.",
      clientName: "David Chen, Founder",
      image: "⭐",
      bgGradient: "from-green-500/20 to-emerald-500/20",
      tags: ["GNet Integration", "Service Excellence", "Client Retention"]
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-15">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Proven Success Stories</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Real Results</span>
            <span className="block text-foreground">From Real Transportation Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how luxury transportation companies across the nation have transformed their operations and achieved remarkable growth with our strategic partnership.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 mt-6">
          {caseStudies.map((study, index) => (
            <Button
              key={study.id}
              onClick={() => setActiveCase(index)}
              variant={activeCase === index ? "default" : "outline"}
              className={`${
                activeCase === index 
                  ? "btn-luxury" 
                  : "btn-outline-luxury"
              } transition-all duration-300`}
            >
              {study.company}
            </Button>
          ))}
        </div>

        {/* Main Case Study Display */}
        <div className="max-w-7xl mx-auto">
          {/* ✅ We apply the white-section-style here */}
          <Card className="white-section-style overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Company Info & Challenge */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${currentCase.bgGradient} rounded-2xl flex items-center justify-center text-2xl border border-primary/30 mr-4`}>
                    {currentCase.image}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{currentCase.company}</h3>
                    <p className="text-primary font-semibold">{currentCase.location}</p>
                    <p className="text-sm text-muted-foreground">{currentCase.industry}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentCase.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <Users className="w-5 h-5 text-primary mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-primary mr-2" />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-2" />
                    <span className="text-foreground font-semibold">Implementation Timeline: </span>
                    <span className="text-primary ml-2">{currentCase.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="p-6 lg:p-8 bg-card/30">
                <h4 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                  <DollarSign className="w-6 h-6 text-primary mr-2" />
                  Results Achieved
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="bg-muted/20 rounded-2xl p-6 border border-border/50">
                      <div className="text-sm text-muted-foreground mb-2">{result.metric}</div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-red-400">Before:</span>
                          <span className="font-medium text-foreground">{result.before}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-green-400">After:</span>
                          <span className="font-medium text-foreground">{result.after}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-2xl font-bold text-primary">{result.improvement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Testimonial */}
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground italic mb-4 leading-relaxed">
                    "{currentCase.testimonial}"
                  </blockquote>
                  <div className="text-primary font-semibold">
                    — {currentCase.clientName}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

       <section className="white-section-style py-4 text-center px-4 sm:px-8 lg:px-16 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40 group cursor-pointer overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
          <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-lg md:text-xl mb-4 max-w-3xl mx-auto">
            Join these successful transportation companies and transform your business operations.
            Let's discuss your specific challenges and create a custom success plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="btn-luxury text-lg px-8 py-3 group-hover:scale-105 transition-transform duration-300">
              Schedule Strategy Call
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3 group-hover:scale-105 transition-transform duration-300">
              📄 Download Full Case Studies
            </Button>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Get detailed PDF case studies with complete implementation details and ROI analysis
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
