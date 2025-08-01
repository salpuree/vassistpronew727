import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Star, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudiesPreviewSection = () => {
  const previewCaseStudies = [
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
    <section className="py-12 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Real Results</span>
            <span className="block text-foreground">From Real Transportation Companies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See how luxury transportation companies have transformed their operations with our strategic partnership.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-luxury hover-lift transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${previewCaseStudies[0].bgGradient} rounded-xl flex items-center justify-center text-xl border border-primary/30 mr-4`}>
                  🚗
                </div>
                <div>
                  <CardTitle className="text-xl text-foreground">{previewCaseStudies[0].company}</CardTitle>
                  <p className="text-primary font-semibold">{previewCaseStudies[0].location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{previewCaseStudies[0].challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution:</h4>
                  <p className="text-sm text-muted-foreground">{previewCaseStudies[0].solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Results:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {previewCaseStudies[0].results.map((result, rIndex) => (
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
                    "{previewCaseStudies[0].testimonial}"
                  </blockquote>
                  <div className="text-xs text-primary font-semibold">— {previewCaseStudies[0].client}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA to View All Case Studies */}
        <div className="text-center">
          <div className="relative white-section-style p-8 w-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:border-primary/40 group cursor-pointer overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500 group-hover:w-2 transition-all duration-300"></div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-primary/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
              Want to See More Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Explore detailed case studies and see how we've helped transportation companies achieve remarkable growth.
            </p>
            <Link to="/case-studies">
              <Button className="btn-luxury group-hover:scale-105 transition-transform duration-300">
                View All Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreviewSection;