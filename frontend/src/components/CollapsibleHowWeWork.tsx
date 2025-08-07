import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Clock,
  CheckCircle,
  Settings,
  Rocket,
  Monitor,
  ArrowRight
} from "lucide-react";

const CollapsibleHowWeWork = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewData = {
    title: "Our Proven 24-Hour Process",
    summary: "Rapid implementation ensuring seamless integration and immediate results for your transportation business.",
    keyPoints: [
      { icon: Clock, title: "24 Hour Implementation", desc: "Complete setup in 24 hours" },
      { icon: CheckCircle, title: "100% Success Rate", desc: "Guaranteed results" },
      { icon: Settings, title: "Custom Integration", desc: "Tailored to your business" }
    ]
  };

  const fullProcess = [
    {
      phase: "Discovery & Planning",
      duration: "Week 1",
      icon: Settings,
      title: "Understanding Your Business",
      description: "Comprehensive assessment and custom solution design",
      activities: [
        "Business assessment and analysis",
        "System evaluation and planning", 
        "Custom solution blueprint creation"
      ]
    },
    {
      phase: "Setup & Integration",
      duration: "Weeks 2-4", 
      icon: Rocket,
      title: "System Implementation",
      description: "Technical integration and team training",
      activities: [
        "Limo Anywhere/GNet integration",
        "Team training on procedures",
        "Quality assurance testing"
      ]
    },
    {
      phase: "Launch & Optimization",
      duration: "Weeks 5-6",
      icon: Monitor,
      title: "Go-Live Support", 
      description: "Seamless transition with dedicated support",
      activities: [
        "Soft launch with monitoring",
        "Performance optimization",
        "Full operations handover"
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Our Proven Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{previewData.title.split(' ').slice(0, 2).join(' ')}</span>
            <span className="block text-foreground">{previewData.title.split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {previewData.summary}
          </p>
        </div>

        {/* Key Points Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewData.keyPoints.map((point, index) => (
            <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{point.title}</h4>
                <p className="text-sm text-muted-foreground">{point.desc}</p>
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
                View Detailed Process
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {fullProcess.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                        {step.duration}
                      </Badge>
                      <CardTitle className="text-xl text-foreground">{step.phase}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-3">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Activities:</h5>
                        <ul className="space-y-2">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start text-xs text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary mr-2 mt-0.5" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Process Details */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">6 Weeks</div>
                  <div className="text-muted-foreground">Full Implementation</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-muted-foreground">Success Guarantee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-muted-foreground">Ongoing Support</div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CollapsibleHowWeWork;
