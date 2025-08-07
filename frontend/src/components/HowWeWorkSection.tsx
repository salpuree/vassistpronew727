import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Settings, 
  Rocket, 
  Monitor, 
  CheckCircle, 
  Clock,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Calendar,
  FileText,
  Headphones
} from "lucide-react";

const HowWeWorkSection = () => {
  const processSteps = [
    {
      phase: "Discovery & Planning",
      duration: "Week 1",
      icon: MessageSquare,
      title: "Understanding Your Business",
      description: "We dive deep into your current operations, challenges, and goals to create a tailored solution.",
      activities: [
        "Comprehensive business assessment",
        "Current system analysis",
        "Pain point identification", 
        "Goal setting and success metrics",
        "Custom solution design"
      ],
      deliverables: ["Detailed assessment report", "Custom solution blueprint", "Implementation timeline"],
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      phase: "Setup & Integration", 
      duration: "Weeks 2-4",
      icon: Settings,
      title: "System Implementation",
      description: "Our technical team handles all integrations while our operations team prepares for your business.",
      activities: [
        "Limo Anywhere/GNet integration",
        "Custom workflow configuration",
        "Team training on your procedures",
        "Quality assurance testing",
        "Security and compliance setup"
      ],
      deliverables: ["Fully integrated systems", "Trained support team", "Testing completion report"],
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      phase: "Launch & Optimization",
      duration: "Weeks 5-6", 
      icon: Rocket,
      title: "Go-Live Support",
      description: "Seamless transition with dedicated support to ensure everything runs perfectly from day one.",
      activities: [
        "Soft launch with monitoring",
        "Full operations handover",
        "Real-time performance tracking",
        "Issue resolution and fine-tuning",
        "Client feedback integration"
      ],
      deliverables: ["Live operational system", "Performance dashboard", "Go-live success report"],
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      phase: "Ongoing Excellence",
      duration: "Ongoing",
      icon: Monitor,
      title: "Continuous Improvement",
      description: "Regular optimization, reporting, and scaling to ensure sustained growth and excellence.",
      activities: [
        "24/7 operations monitoring",
        "Monthly performance reviews",
        "Continuous optimization",
        "Scaling support as you grow",
        "Strategic partnership meetings"
      ],
      deliverables: ["Monthly reports", "Optimization recommendations", "Scaling roadmaps"],
      bgGradient: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const qualityStandards = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SOC 2 Type II compliance, encrypted communications, and full data protection protocols."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "All calls monitored and scored, continuous training programs, and quality improvement initiatives."
    },
    {
      icon: Clock,
      title: "Response Guarantees",
      description: "< 2 rings for calls, < 15 minutes for emails, and immediate escalation for urgent matters."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Assigned account manager, trained specialists familiar with your business, and backup coverage."
    }
  ];

  const supportLevels = [
    {
      level: "Onboarding",
      duration: "First 30 Days",
      features: [
        "Daily check-ins with account manager",
        "Real-time issue resolution",
        "Performance monitoring and optimization",
        "Training refinement and adjustments"
      ]
    },
    {
      level: "Ongoing Operations", 
      duration: "Month 2+",
      features: [
        "Weekly performance reviews",
        "Monthly strategic planning calls",
        "Quarterly business reviews",
        "Continuous improvement initiatives"
      ]
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Our Proven Process</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">How We Transform</span>
            <span className="block text-foreground">Your Transportation Business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our systematic 24-hour implementation process ensures seamless integration and immediate results. 
            Here's exactly how we become your strategic partner for business excellence.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 right-0 w-8 h-0.5 bg-primary/30 transform translate-x-4" />
                  )}
                  
                  <Card className="card-luxury h-full hover-lift transition-all duration-300">
                    <CardHeader className="text-center pb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${step.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-primary/30`}>
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                        {step.duration}
                      </Badge>
                      <CardTitle className="text-xl text-foreground">{step.phase}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-3">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-2">Key Activities:</h5>
                          <ul className="space-y-1">
                            {step.activities.map((activity, actIndex) => (
                              <li key={actIndex} className="flex items-start text-xs text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="text-sm font-semibold text-foreground mb-2">Deliverables:</h5>
                          <ul className="space-y-1">
                            {step.deliverables.map((item, delIndex) => (
                              <li key={delIndex} className="flex items-center text-xs text-primary">
                                <CheckCircle className="w-3 h-3 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Quality Standards</span> & Guarantees
            </h3>
            <p className="text-lg text-muted-foreground">
              We maintain the highest standards in everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">{standard.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {standard.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Levels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Support Levels</span> & Communication
            </h3>
            <p className="text-lg text-muted-foreground">
              Tailored support intensity based on your business phase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportLevels.map((level, index) => (
              <Card key={index} className="card-luxury">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-foreground">{level.level}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {level.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>  
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Guarantee */}
        <div className="text-center">
          <div className="white-section-style p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">6 Weeks</div>
                <div className="text-muted-foreground">Full Implementation</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                <div className="text-muted-foreground">Success Guarantee</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-muted-foreground">Ongoing Support</div>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Our proven process has transformed hundreds of transportation companies. 
              Let's discuss how we can customize our approach for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3">
                Schedule Discovery Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3">
                Download Process Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;