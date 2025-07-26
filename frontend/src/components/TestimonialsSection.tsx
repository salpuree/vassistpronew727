import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Marcus Thompson",
      company: "Elite Transportation Services",
      location: "Miami, FL",
      rating: 5,
      text: "The team has been absolutely phenomenal. Their 24/7 operations support has increased our booking rate by 40%. We never miss a call or opportunity anymore. The level of professionalism is unmatched.",
      avatar: "🚗",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Sarah Rodriguez",
      company: "Luxury Rides NYC",
      location: "New York, NY", 
      rating: 5,
      text: "Working with VAssist Pro has been a game-changer. Their email handling for booking requests is flawless. The team personally ensures every client interaction meets our luxury standards. Couldn't be happier.",
      avatar: "🏙️",
      bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "David Chen",
      company: "Premier Limo Solutions",
      location: "Los Angeles, CA",
      rating: 5,
      text: "The technology integration they provided exceeded our expectations. Our Limo Anywhere system runs perfectly now. Their strategic partnership approach makes them feel like part of our team.",
      avatar: "⭐",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      name: "Jennifer Walsh",
      company: "Executive Transport Group",
      location: "Chicago, IL",
      rating: 5,
      text: "The leadership in operations management is exceptional. The team handles our customer service with such care and attention to detail. Our client satisfaction scores have never been higher.",
      avatar: "🏆",
      bgColor: "from-amber-500/20 to-orange-500/20"
    },
    {
      name: "Robert Martinez",
      company: "Black Car Network",
      location: "Dallas, TX",
      rating: 5,
      text: "The back-office support is incredible. They handle everything from quote requests to schedule updates seamlessly. It's like having a premium operations team without the overhead costs.",
      avatar: "💼",
      bgColor: "from-indigo-500/20 to-blue-500/20"
    },
    {
      name: "Amanda Foster",
      company: "Prestige Transportation",
      location: "Seattle, WA",
      rating: 5,
      text: "Their email management system for bookings is fantastic. Every inquiry is handled professionally and promptly. The team truly understands the luxury transportation business.",
      avatar: "📧",
      bgColor: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Client Success Stories</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">What Our Clients</span>
            <span className="block text-foreground">Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what luxury transportation companies across the nation 
            say about working with VAssist Pro as their strategic partner.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="group cursor-default">
                    <div className={`relative bg-card/60 backdrop-blur-xl border border-border/30 rounded-3xl p-12 hover:border-primary/30 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-primary/20`}>
                      {/* Default background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.bgColor} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-8">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <Quote className="w-8 h-8 text-primary" />
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex justify-center space-x-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xl text-foreground/90 font-medium leading-relaxed text-center mb-8 italic">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center space-x-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.bgColor} rounded-2xl flex items-center justify-center text-2xl border border-primary/30`}>
                            {testimonial.avatar}
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-foreground">{testimonial.name}</div>
                            <div className="text-primary font-semibold">{testimonial.company}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the same level of excellence and professional service that has made our clients successful. 
              Let's discuss how we can become your strategic partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3">
                Start Your Success Story
              </Button>
              <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3">
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
