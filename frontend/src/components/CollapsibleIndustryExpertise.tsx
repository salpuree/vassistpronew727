import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Shield,
  FileText,
  TrendingUp,
  Users,
  CheckCircle
} from "lucide-react";

const CollapsibleIndustryExpertise = () => {

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


  return (
    <section className="py-16 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BookOpen className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Industry Expertise</span>
          </div>
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



      </div>
    </section>
  );
};

export default CollapsibleIndustryExpertise;
