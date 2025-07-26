import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  Shield,
  FileText,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const CollapsibleIndustryExpertise = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewData = {
    title: "15+ Years of Transportation Industry Knowledge",
    summary: "Deep industry expertise helping you navigate regulations, optimize operations, and stay ahead of market trends.",
    keyStats: [
      { metric: "15+", label: "Years Experience", icon: BookOpen },
      { metric: "500+", label: "Companies Served", icon: Users },
      { metric: "50", label: "States Covered", icon: FileText },
      { metric: "100%", label: "Compliance Rate", icon: CheckCircle }
    ]
  };

  const expertiseAreas = [
    {
      icon: Shield,
      title: "DOT Compliance & Regulations",
      description: "Complete understanding of Department of Transportation requirements and safety standards.",
      highlights: ["DOT registration", "Insurance requirements", "Safety ratings", "Driver qualifications"]
    },
    {
      icon: FileText,
      title: "Licensing & Permits",
      description: "Navigate complex licensing requirements across different states and municipalities.",
      highlights: ["Interstate authority", "City permits", "Airport access", "Multi-state compliance"]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Deep insights into luxury transportation market trends and competitive positioning.",
      highlights: ["Market analysis", "Pricing strategies", "Demand patterns", "Revenue optimization"]
    },
    {
      icon: Users,
      title: "Customer Experience Standards",
      description: "Luxury service protocols that meet high-end clientele expectations.",
      highlights: ["White-glove service", "VIP procedures", "Quality standards", "Client relations"]
    }
  ];

  const industryInsights = [
    {
      title: "2025 DOT Safety Requirements",
      summary: "New safety protocols affecting luxury transportation operators.",
      impact: "High",
      category: "Regulatory"
    },
    {
      title: "Corporate Travel Recovery Patterns", 
      summary: "Analysis of corporate transportation demand recovery trends.",
      impact: "High",
      category: "Market Trends"
    },
    {
      title: "Mobile-First Booking Evolution",
      summary: "85% of bookings now originate from mobile devices.",
      impact: "Medium", 
      category: "Technology"
    }
  ];

  return (
    <section className="py-16 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Industry Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{previewData.title.split(' ').slice(0, 3).join(' ')}</span>
            <span className="block text-foreground">{previewData.title.split(' ').slice(3).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {previewData.summary}
          </p>
        </div>

        {/* Key Stats Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {previewData.keyStats.map((stat, index) => (
            <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
                View Detailed Expertise
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-fade-in space-y-12">
            {/* Expertise Areas */}
            <div>
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-gradient">Core Expertise Areas</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertiseAreas.map((area, index) => (
                  <Card key={index} className="card-luxury group hover-lift transition-all duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <area.icon className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-lg text-foreground">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">{area.description}</p>
                      <ul className="space-y-1">
                        {area.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-xs text-foreground">
                            <CheckCircle className="w-3 h-3 text-primary mr-2 mt-0.5" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Industry Insights */}
            <div>
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-gradient">Latest Industry Insights</span>
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {industryInsights.map((insight, index) => (
                  <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {insight.category}
                        </Badge>
                        <Badge className={
                          insight.impact === 'High' ? 'bg-red-500/10 text-red-500' : 
                          insight.impact === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 
                          'bg-green-500/10 text-green-500'
                        }>
                          {insight.impact} Impact
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground">{insight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{insight.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Compliance Checklist Preview */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground text-center mb-6">
                Transportation Compliance Essentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Badge className="bg-red-500/10 text-red-500 mb-2">Critical</Badge>
                  <h4 className="font-semibold text-foreground mb-2">Operating Authority</h4>
                  <p className="text-sm text-muted-foreground">USDOT & MC Numbers</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-red-500/10 text-red-500 mb-2">Critical</Badge>
                  <h4 className="font-semibold text-foreground mb-2">Insurance Coverage</h4>
                  <p className="text-sm text-muted-foreground">$1M+ Liability Required</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-amber-500/10 text-amber-500 mb-2">Important</Badge>
                  <h4 className="font-semibold text-foreground mb-2">Safety Ratings</h4>
                  <p className="text-sm text-muted-foreground">DOT Safety Compliance</p>
                </div>
                <div className="text-center">
                  <Badge className="bg-blue-500/10 text-blue-500 mb-2">Recommended</Badge>
                  <h4 className="font-semibold text-foreground mb-2">Local Permits</h4>
                  <p className="text-sm text-muted-foreground">City & Airport Access</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Leverage Our Industry Expertise
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't navigate complex regulations alone. Our deep industry knowledge becomes your competitive advantage.
            </p>
            <Button className="btn-luxury">
              Schedule Expert Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleIndustryExpertise;