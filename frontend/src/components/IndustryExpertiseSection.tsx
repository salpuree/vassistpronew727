import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  FileText, 
  TrendingUp, 
  Users, 
  Clock,
  Zap,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Award,
  Globe,
  Car,
  Building,
  Plane,
  ArrowRight
} from "lucide-react";

const IndustryExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Shield,
      title: "DOT Compliance & Regulations",
      description: "Complete understanding of Department of Transportation requirements, insurance regulations, and safety standards.",
      details: [
        "DOT registration and compliance",
        "Insurance requirement management", 
        "Safety rating optimization",
        "Driver qualification standards",
        "Vehicle inspection protocols"
      ],
      bgGradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: FileText,
      title: "Licensing & Permits",
      description: "Navigate complex licensing requirements across different states and municipalities with confidence.",
      details: [
        "Interstate operating authority",
        "City and county permits",
        "Airport operating permits",
        "Special event licensing",
        "Multi-state compliance tracking"
      ],
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Deep insights into luxury transportation market trends, pricing strategies, and competitive positioning.",
      details: [
        "Market analysis and trends",
        "Competitive pricing strategies",
        "Seasonal demand patterns",
        "Route optimization insights",
        "Revenue maximization tactics"
      ],
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Users,
      title: "Customer Experience Standards",
      description: "Luxury service protocols that meet and exceed high-end clientele expectations.",
      details: [
        "White-glove service standards",
        "VIP handling procedures",
        "Complaint resolution protocols",
        "Luxury amenity standards",
        "Client relationship management"
      ],
      bgGradient: "from-purple-500/20 to-pink-500/20"
    }
  ];

  const industryInsights = [
    {
      category: "Regulatory Updates",
      title: "2025 DOT Safety Requirements",
      summary: "New safety protocols and compliance requirements affecting luxury transportation operators.",
      date: "January 2025",
      impact: "High",
      actionItems: [
        "Update driver training programs",
        "Implement new safety protocols", 
        "Review insurance coverage requirements"
      ]
    },
    {
      category: "Market Trends",
      title: "Corporate Travel Recovery Patterns",
      summary: "Analysis of corporate transportation demand recovery and emerging booking patterns post-2024.",
      date: "December 2024",
      impact: "High",
      actionItems: [
        "Adjust capacity planning",
        "Update corporate pricing strategies",
        "Enhance technology integrations"
      ]  
    },
    {
      category: "Technology",
      title: "Mobile-First Booking Trends",
      summary: "85% of luxury transportation bookings now originate from mobile devices, requiring optimized experiences.",
      date: "November 2024", 
      impact: "Medium",
      actionItems: [
        "Optimize mobile booking flows",
        "Implement mobile payment options",
        "Enhance mobile customer service"
      ]
    }
  ];

  const complianceChecklist = [
    {
      area: "Operating Authority",
      items: [
        "USDOT Number registration",
        "Motor Carrier (MC) Number",
        "Interstate operating authority",
        "Intrastate licensing (as required)"
      ],
      status: "critical"
    },
    {
      area: "Insurance Requirements",
      items: [
        "Commercial auto liability ($1M minimum)",
        "General liability coverage",
        "Garage keeper's liability",
        "Workers' compensation"
      ],
      status: "critical"
    },
    {
      area: "Safety & Maintenance",
      items: [
        "DOT safety rating maintenance",
        "Regular vehicle inspections",
        "Driver qualification files",
        "Hours of service compliance"
      ],
      status: "important"
    },
    {
      area: "Local Permits",
      items: [
        "City business licenses",
        "Airport operating permits",
        "Special event permits",
        "Hotel/venue access permits"
      ],
      status: "recommended"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "text-red-500 bg-red-500/10";
      case "important": return "text-amber-500 bg-amber-500/10";
      case "recommended": return "text-blue-500 bg-blue-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "text-red-500 bg-red-500/10";
      case "Medium": return "text-amber-500 bg-amber-500/10";
      case "Low": return "text-green-500 bg-green-500/10";
      default: return "text-gray-500 bg-gray-500/10";
    }
  };

  return (
    <section className="py-24 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Industry Expertise</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">15+ Years of</span>
            <span className="block text-foreground">Transportation Industry Knowledge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just provide technology and support - we bring deep industry expertise that helps you navigate regulations, 
            optimize operations, and stay ahead of market trends in the luxury transportation sector.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="card-luxury group hover-lift transition-all duration-300">
                <CardHeader>
                  <div className={`w-14 h-14 bg-gradient-to-br ${area.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <area.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-xs text-foreground">
                        <CheckCircle className="w-3 h-3 text-primary mr-2 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}  
          </div>
        </div>

        {/* Industry Insights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Latest Industry Insights</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Stay informed with our analysis of regulations, trends, and market developments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {industryInsights.map((insight, index) => (
              <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {insight.category}
                    </Badge>
                    <Badge className={getImpactColor(insight.impact)}>
                      {insight.impact} Impact
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground mb-2">
                    {insight.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{insight.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {insight.summary}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Action Items:</h5>
                    <ul className="space-y-1">
                      {insight.actionItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-xs text-foreground">
                          <ArrowRight className="w-3 h-3 text-primary mr-2 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Checklist */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Compliance Checklist</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Essential requirements for luxury transportation operators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceChecklist.map((section, index) => (
              <Card key={index} className="card-luxury">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-foreground">{section.area}</CardTitle>
                    <Badge className={getStatusColor(section.status)}>
                      {section.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                <div className="text-muted-foreground">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">50</div>
                <div className="text-muted-foreground">States Covered</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Leverage Our Industry Expertise
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Don't navigate complex regulations and market challenges alone. 
              Our deep industry knowledge becomes your competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3">
                Schedule Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3">
                Download Industry Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryExpertiseSection;