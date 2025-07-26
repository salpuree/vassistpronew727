import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Star,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Globe,
  ArrowRight
} from "lucide-react";

const CollapsibleSocialProof = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const trustIndicators = [
    {
      metric: "99.9%",
      label: "Uptime Guarantee",
      icon: Clock,
      description: "Proven reliability"
    },
    {
      metric: "< 2 min",
      label: "Response Time",
      icon: TrendingUp,
      description: "Lightning-fast support"
    },
    {
      metric: "15+",
      label: "Years Experience",
      icon: Award,
      description: "Industry expertise"
    },
    {
      metric: "500+",
      label: "Active Clients",
      icon: Users,
      description: "Trusted by leaders"
    }
  ];

  const certifications = [
    {
      name: "SOC 2 Type II",
      description: "Security & availability compliance certified",
      icon: Shield,
      status: "Certified",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Better Business Bureau",
      description: "A+ Rating with BBB accreditation",
      icon: Award,
      status: "A+ Rated",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Google Partner",
      description: "Certified Google technology partner",
      icon: CheckCircle,
      status: "Verified Partner",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Microsoft Certified",
      description: "Azure and Office 365 integration specialist",
      icon: Star,
      status: "Gold Partner",
      bgGradient: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const partnerships = [
    {
      company: "Limo Anywhere",
      relationship: "Certified Integration Partner",
      logo: "🚗",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      company: "GNet",
      relationship: "Premium Solution Provider",
      logo: "🌐",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      company: "Microsoft",
      relationship: "Gold Technology Partner",
      logo: "💼",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      company: "Twilio",
      relationship: "Solutions Partner",
      logo: "📞",
      bgGradient: "from-red-500/20 to-orange-500/20"
    }
  ];

  const awards = [
    {
      year: "2024",
      award: "Transportation Technology Excellence Award",
      organization: "National Limousine Association"
    },
    {
      year: "2023",
      award: "Best Virtual Assistant Service",
      organization: "Business Services Excellence Awards"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Trust & Recognition</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Industry Recognition</span>
            <span className="block text-foreground">& Trusted Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our commitment to excellence is recognized by industry leaders and trusted by hundreds of transportation companies.
          </p>
        </div>

        {/* Trust Indicators Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <indicator.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{indicator.metric}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{indicator.label}</div>
                <div className="text-xs text-muted-foreground">{indicator.description}</div>
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
                View Certifications & Awards
              </>
            )}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="animate-fade-in space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-gradient">Certifications</span> & Compliance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="card-luxury group hover-lift transition-all duration-300">
                    <CardContent className="pt-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${cert.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-primary/30`}>
                        <cert.icon className="w-8 h-8 text-primary" />
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary mb-3">
                        {cert.status}
                      </Badge>
                      <h4 className="font-bold text-foreground mb-2">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategic Partnerships */}
            <div>
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-gradient">Strategic Partnerships</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {partnerships.map((partner, index) => (
                  <Card key={index} className="card-luxury group hover-lift transition-all duration-300">
                    <CardContent className="pt-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${partner.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform border border-primary/30`}>
                        <span className="text-2xl">{partner.logo}</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{partner.company}</h4>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {partner.relationship}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <h3 className="text-3xl font-bold text-foreground text-center mb-8">
                <span className="text-gradient">Awards</span> & Recognition
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="bg-primary/10 text-primary mb-2">
                            {award.year}
                          </Badge>
                          <h4 className="font-bold text-foreground mb-2">{award.award}</h4>
                          <p className="text-primary font-semibold">{award.organization}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Security Statement */}
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  <span className="text-gradient">Bank-Level Security</span>
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your data and clients' information are protected by enterprise-grade security measures and comprehensive data protection protocols.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-green-500/10 text-green-500 px-4 py-2">256-bit SSL Encryption</Badge>
                  <Badge className="bg-blue-500/10 text-blue-500 px-4 py-2">SOC 2 Type II Certified</Badge>
                  <Badge className="bg-purple-500/10 text-purple-500 px-4 py-2">GDPR Compliant</Badge>
                  <Badge className="bg-orange-500/10 text-orange-500 px-4 py-2">24/7 Security Monitoring</Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Trusted Partners
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience the same level of excellence and security that industry leaders trust.
            </p>
            <Button className="btn-luxury">
              Start Partnership Discussion
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleSocialProof;