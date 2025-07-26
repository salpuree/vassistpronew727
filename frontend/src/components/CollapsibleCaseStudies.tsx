import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Star,
  ArrowRight
} from "lucide-react";

const CollapsibleCaseStudies = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewData = {
    title: "Real Results From Real Transportation Companies",
    summary: "See how luxury transportation companies achieved 40-60% revenue growth and 50%+ cost savings with our strategic partnership.",
    quickStats: [
      { metric: "Revenue Growth", value: "40-60%" },
      { metric: "Cost Savings", value: "50%+" },
      { metric: "Response Time", value: "< 15 min" },
      { metric: "Client Satisfaction", value: "9.6/10" }
    ]
  };

  const fullCaseStudies = [
    {
      company: "Elite Transport Miami",
      location: "Miami, FL",
      challenge: "Manual processes causing 30% missed opportunities",
      solution: "Complete Limo Anywhere integration + 24/7 support",
      results: [
        { metric: "Booking Conversion", improvement: "+57%" },
        { metric: "Response Time", improvement: "94% faster" },
        { metric: "Monthly Revenue", improvement: "+58%" }
      ],
      testimonial: "VAssist Pro transformed our entire operation. The ROI was immediate and substantial.",
      client: "Marcus Thompson, CEO",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      company: "Premier Executive Services", 
      location: "New York, NY",
      challenge: "Email delays and lack of after-hours support",
      solution: "Email management + extended hours + automation",
      results: [
        { metric: "Email Response", improvement: "92% faster" },
        { metric: "After-Hours Bookings", improvement: "+35%" },
        { metric: "Operational Costs", improvement: "47% savings" }
      ],
      testimonial: "The email management alone saved us 40 hours per week.",
      client: "Sarah Rodriguez, Operations Director",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section className="py-16 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Proven Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{previewData.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block text-foreground">{previewData.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {previewData.summary}
          </p>
        </div>

        {/* Quick Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {previewData.quickStats.map((stat, index) => (
            <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
              <CardContent className="pt-6">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.metric}</div>
              </CardContent>
            </Card>
          ))}
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
                Show Less Details
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                View Detailed Case Studies
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {fullCaseStudies.map((study, index) => (
                <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${study.bgGradient} rounded-xl flex items-center justify-center text-xl border border-primary/30 mr-4`}>
                        🚗
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{study.company}</CardTitle>
                        <p className="text-primary font-semibold">{study.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {study.results.map((result, rIndex) => (
                            <div key={rIndex} className="flex justify-between items-center bg-primary/5 rounded-lg p-3">
                              <span className="text-sm text-foreground">{result.metric}</span>
                              <span className="text-sm font-bold text-gradient">{result.improvement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <blockquote className="text-sm text-foreground italic mb-2">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="text-xs text-primary font-semibold">— {study.client}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white border border-border/50 rounded-3xl p-8 w-full shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 group cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation to discuss how we can transform your transportation business.
            </p>
            <Button className="btn-luxury group-hover:scale-105 transition-transform duration-300">
              Schedule Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleCaseStudies;
