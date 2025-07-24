import { ExternalLink, ArrowRight, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import softwareMockup from "@/assets/software-mockup.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Elite Limousine Services",
      category: "Limo Anywhere Integration",
      description: "Complete Limo Anywhere customization with advanced booking system, real-time tracking, and automated dispatch optimization.",
      image: softwareMockup,
      results: ["300% booking increase", "50% faster dispatch", "95% customer satisfaction"],
      technologies: ["Limo Anywhere", "React", "Node.js", "Real-time APIs"]
    },
    {
      title: "Metropolitan Transportation",
      category: "GNet Custom Development", 
      description: "Advanced GNet integration with custom driver management system, route optimization, and comprehensive reporting dashboard.",
      image: softwareMockup,
      results: ["40% operational efficiency", "60% reduced response time", "Streamlined operations"],
      technologies: ["GNet", "Vue.js", "Python", "Machine Learning"]
    },
    {
      title: "Luxury Fleet Management",
      category: "Full-Stack Solution",
      description: "End-to-end transportation management platform with mobile apps, web dashboard, and integrated payment processing.",
      image: softwareMockup,
      results: ["500% ROI in 6 months", "Automated 80% of processes", "24/7 operations capability"],
      technologies: ["React Native", "Laravel", "PostgreSQL", "AWS"]
    }
  ];

  const testimonials = [
    {
      name: "Michael Thompson",
      company: "Elite Transportation Group",
      role: "CEO",
      text: "Their expertise in Limo Anywhere transformed our entire operation. The custom features they developed increased our bookings by 300% in just 6 months.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "Metropolitan Limousines",
      role: "Operations Director", 
      text: "The GNet integration was seamless. Their team understood our complex requirements and delivered a solution that exceeded our expectations.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Luxury Transport Solutions",
      role: "Founder",
      text: "From concept to deployment, they delivered a world-class solution. Our clients love the new booking experience and our efficiency has improved dramatically.",
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
            <span className="block text-foreground">for Transportation Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed luxury transportation businesses with our specialized expertise in 
            Limo Anywhere, GNet, and custom development solutions.
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