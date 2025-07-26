import { ExternalLink, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import softwareMockup from "@/assets/software-mockup.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Elite Limousine Services",
      category: "Technology + Back-Office",
      description: "Complete Limo Anywhere integration plus 24/7 call answering service. Handled 2,000+ monthly calls while optimizing their booking system.",
      image: softwareMockup,
      results: ["300% booking increase", "Eliminated missed calls", "Reduced operational costs by 40%"],
      technologies: ["Limo Anywhere", "24/7 Call Center", "React", "Real-time APIs"]
    },
    {
      title: "Metropolitan Transportation",
      category: "GNet + Customer Service", 
      description: "Advanced GNet integration with dedicated back-office team managing customer communications, scheduling changes, and support.",
      image: softwareMockup,
      results: ["60% faster customer response", "Streamlined operations", "99.8% customer satisfaction"],
      technologies: ["GNet", "Email Support", "Vue.js", "Customer Service"]
    },
    {
      title: "Luxury Fleet Management",
      category: "Complete Business Solution",
      description: "Full technology platform with comprehensive back-office support including call answering, booking management, and customer service.",
      image: softwareMockup,
      results: ["500% ROI in 6 months", "24/7 operations capability", "Zero missed bookings"],
      technologies: ["React Native", "24/7 Support", "Laravel", "Back-Office Team"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Elite Transportation Group",
      role: "CEO",
      text: "They're not just our tech team, they're our invisible back-office. The 24/7 call service plus Limo Anywhere integration increased our bookings by 300% while reducing our operational costs by 40%.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "Metropolitan Limousines",
      role: "Operations Director", 
      text: "Having them handle our calls and emails while managing our GNet system was a game-changer. We can focus on operations while they handle everything else seamlessly.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Luxury Transport Solutions",
      role: "Founder",
      text: "They're like having a 50-person team without the overhead. From technology development to answering calls at 3 AM - they do it all with luxury-level service standards.",
      rating: 5
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <TrendingUp className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Our Success Stories</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Proven Results</span>
            <span className="block text-foreground">Technology + Operations Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed luxury transportation businesses with our dual expertise in 
            technology solutions AND comprehensive back-office support services.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-luxury group hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">KEY RESULTS</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-foreground">
                        <TrendingUp className="w-4 h-4 text-primary mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-muted-foreground">
              Trusted by luxury transportation companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background/50 border-border/50">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="btn-luxury group">
            Start Your Success Story
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;