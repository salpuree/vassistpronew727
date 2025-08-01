
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users, Phone, Mail, ChevronRight, Star, Award, CheckCircle } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Proven Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Real Results</span>
            <span className="block text-foreground mt-2">From Real Transportation Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how luxury transportation companies across the nation have transformed their operations and achieved remarkable growth with our strategic partnership.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <Button
              key={study.id}
              onClick={() => setActiveCase(index)}
              variant={activeCase === index ? "default" : "outline"}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${
                activeCase === index 
                  ? "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30" 
                  : "bg-card text-foreground border-2 border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {study.company}
            </Button>
          ))}
        </div>

        {/* Main Case Study Display */}
        <div className="max-w-7xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-2 border-border shadow-2xl rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Company Info & Challenge */}
              <div className="p-8 lg:p-12 bg-card/90 backdrop-blur-sm">
                <div className="flex items-center mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${currentCase.bgGradient} rounded-3xl flex items-center justify-center text-3xl border-2 border-primary/30 mr-6 shadow-lg`}>
                    {currentCase.image}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-1">{currentCase.company}</h3>
                    <p className="text-primary font-semibold text-lg">{currentCase.location}</p>
                    <p className="text-muted-foreground">{currentCase.industry}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  {currentCase.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-8">
                  <div className="bg-red-500/10 border-2 border-red-500/20 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="w-6 h-6 text-red-500 mr-3" />
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {currentCase.challenge}
                    </p>
                  </div>

                  <div className="bg-green-500/10 border-2 border-green-500/20 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      Our Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {currentCase.solution}
                    </p>
                  </div>

                  <div className="bg-blue-500/10 border-2 border-blue-500/20 rounded-2xl p-6">
                    <div className="flex items-center">
                      <Clock className="w-6 h-6 text-blue-500 mr-3" />
                      <span className="text-foreground font-semibold text-lg">Implementation Timeline: </span>
                      <span className="text-primary ml-2 font-bold text-lg">{currentCase.timeline}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Results */}
              <div className="p-8 lg:p-12 bg-muted/30">
                <h4 className="text-3xl font-bold text-foreground mb-10 flex items-center">
                  <TrendingUp className="w-8 h-8 text-primary mr-3" />
                  Results Achieved
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {currentCase.results.map((result, index) => (
                    <div key={index} className="bg-card/80 backdrop-blur-sm border-2 border-border rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                      <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wide">{result.metric}</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-red-500 font-medium">Before:</span>
                          <span className="font-semibold text-foreground">{result.before}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-green-500 font-medium">After:</span>
                          <span className="font-semibold text-foreground">{result.after}</span>
                        </div>
                        <div className="text-center pt-2 border-t border-border">
                          <span className="text-2xl font-bold text-primary">{result.improvement}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Testimonial */}
                <div className="bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-foreground text-lg italic mb-6 leading-relaxed">
                    "{currentCase.testimonial}"
                  </blockquote>
                  <div className="text-primary font-bold text-lg">
                    — {currentCase.clientName}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 text-center border-2 border-primary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-blue-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 opacity-50"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-muted-foreground leading-relaxed">
              Join these successful transportation companies and transform your business operations.
              Let's discuss your specific challenges and create a custom success plan.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Schedule Strategy Call
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
              <Button variant="outline" className="bg-card border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
                📄 Download Full Case Studies
              </Button>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                Get detailed PDF case studies with complete implementation details and ROI analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
