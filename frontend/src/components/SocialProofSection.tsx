import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Users, 
  Star,
  CheckCircle,
  TrendingUp,
  Clock,
  Globe
} from "lucide-react";

const SocialProofSection = () => {
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

  const awards = [
    {
      year: "2024",
      award: "Transportation Technology Excellence Award",
      organization: "National Limousine Association",
      description: "Outstanding innovation in transportation technology solutions"
    },
    {
      year: "2023",
      award: "Best Virtual Assistant Service",
      organization: "Business Services Excellence Awards",
      description: "Recognized for exceptional back-office support services"
    },
    {
      year: "2023",
      award: "Client Satisfaction Excellence",
      organization: "Service Industry Awards",
      description: "Highest client satisfaction rating in virtual assistance category"
    },
    {
      year: "2022",
      award: "Innovation in Business Support",
      organization: "Tech Service Awards",
      description: "Revolutionary approach to business operations support"
    }
  ];

  const partnerships = [
    {
      company: "Limo Anywhere",
      relationship: "Certified Integration Partner",
      logo: "🚗",
      description: "Official certified partner for Limo Anywhere implementations and integrations",
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      company: "GNet",
      relationship: "Premium Solution Provider", 
      logo: "🌐",
      description: "Authorized GNet system implementation and optimization specialist",
      bgGradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      company: "Microsoft",
      relationship: "Gold Technology Partner",
      logo: "💼",
      description: "Advanced Microsoft technology integration and cloud solutions",
      bgGradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      company: "Twilio",
      relationship: "Solutions Partner",
      logo: "📞",
      description: "Communication platform integration for call and messaging services",
      bgGradient: "from-red-500/20 to-orange-500/20"
    }
  ];

  const mediaFeatures = [
    {
      publication: "Transportation Today",
      title: "How VAssist Pro Is Revolutionizing Luxury Transportation Operations",
      date: "January 2024",
      type: "Feature Article"
    },
    {
      publication: "Business Service Weekly",
      title: "The Rise of Specialized Virtual Assistance in Luxury Markets",
      date: "November 2023",
      type: "Cover Story"
    },
    {
      publication: "Tech Solutions Magazine",
      title: "Integration Excellence: Limo Anywhere Success Stories",
      date: "September 2023",
      type: "Case Study"
    },
    {
      publication: "Limousine & Chauffeur",
      title: "Technology Partners That Make a Difference",
      date: "June 2023",
      type: "Industry Spotlight"
    }
  ];

  const trustIndicators = [
    {
      metric: "99.9%",
      label: "Uptime Guarantee",
      icon: Clock,
      description: "Proven reliability across all services"
    },
    {
      metric: "< 2 min",
      label: "Average Response Time",
      icon: TrendingUp,
      description: "Lightning-fast customer support"
    },
    {
      metric: "15+",
      label: "Years in Business",
      icon: Award,
      description: "Established industry expertise"
    },
    {
      metric: "500+",
      label: "Active Clients",
      icon: Users,
      description: "Trusted by transportation leaders"
    },
    {
      metric: "50",
      label: "States Covered",
      icon: Globe,
      description: "Nationwide service capability"
    },
    {
      metric: "24/7",
      label: "Support Available",
      icon: Shield,
      description: "Always here when you need us"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Award className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Trust & Recognition</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Industry Recognition</span>
            <span className="block text-foreground">& Trusted Partnerships</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is recognized by industry leaders, certified by security standards, 
            and trusted by hundreds of luxury transportation companies nationwide.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustIndicators.map((indicator, index) => (
              <Card key={index} className="card-luxury text-center hover-lift transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <indicator.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">{indicator.metric}</div>
                  <div className="text-sm font-semibold text-foreground mb-2">{indicator.label}</div>
                  <div className="text-xs text-muted-foreground">{indicator.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Certifications</span> & Compliance
            </h3>
            <p className="text-lg text-muted-foreground">
              Maintaining the highest standards of security, quality, and professional excellence
            </p>
          </div>

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
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Strategic Partnerships</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Official partnerships with industry-leading technology platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="card-luxury group hover-lift transition-all duration-300">
                <CardContent className="pt-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${partner.bgGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform border border-primary/30`}>
                    <span className="text-2xl">{partner.logo}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{partner.company}</h4>
                  <Badge variant="secondary" className="bg-primary/10 text-primary mb-3 text-xs">
                    {partner.relationship}
                  </Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Awards</span> & Recognition
            </h3>
            <p className="text-lg text-muted-foreground">
              Industry recognition for excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {award.year}
                        </Badge>
                      </div>
                      <h4 className="font-bold text-foreground mb-2">{award.award}</h4>
                      <p className="text-primary font-semibold mb-2">{award.organization}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Media Coverage</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Featured in leading industry publications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="card-luxury hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {feature.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{feature.date}</span>
                  </div>
                  <h4 className="font-bold text-foreground mb-2 leading-tight">{feature.title}</h4>
                  <p className="text-primary font-semibold">{feature.publication}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Security & Compliance Statement */}
        <div className="text-center">
          <div className="white-section-style p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Enhanced visual elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="text-gradient">Bank-Level Security</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Your data and your clients' information are protected by enterprise-grade security measures, 
              including SOC 2 Type II compliance, encrypted communications, and comprehensive data protection protocols.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge className="bg-green-500/10 text-green-500 px-6 py-3 text-sm font-semibold hover:bg-green-500/20 transition-colors cursor-default">
                🔒 256-bit SSL Encryption
              </Badge>
              <Badge className="bg-blue-500/10 text-blue-500 px-6 py-3 text-sm font-semibold hover:bg-blue-500/20 transition-colors cursor-default">
                ✅ SOC 2 Type II Certified
              </Badge>
              <Badge className="bg-purple-500/10 text-purple-500 px-6 py-3 text-sm font-semibold hover:bg-purple-500/20 transition-colors cursor-default">
                🌍 GDPR Compliant
              </Badge>
              <Badge className="bg-orange-500/10 text-orange-500 px-6 py-3 text-sm font-semibold hover:bg-orange-500/20 transition-colors cursor-default">
                🛡️ 24/7 Security Monitoring
              </Badge>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 italic">
                Independently verified security standards protecting your business data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;