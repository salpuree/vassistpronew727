import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Added this import for the new section

// --- Data ---
const testimonials = [
  {
    name: "Marcus Thompson",
    company: "Elite Transportation Services",
    location: "Miami, FL",
    rating: 5,
    text: "The team has been absolutely phenomenal. Their 24/7 operations support has increased our booking rate by 40%. We never miss a call or opportunity anymore. The level of professionalism is unmatched.",
  },
  {
    name: "Sarah Rodriguez",
    company: "Luxury Rides NYC",
    location: "New York, NY",
    rating: 5,
    text: "Working with VAssist Pro has been a game-changer. Their email handling for booking requests is flawless. The team personally ensures every client interaction meets our luxury standards. Couldn't be happier.",
  },
  {
    name: "David Chen",
    company: "Premier Limo Solutions",
    location: "Los Angeles, CA",
    rating: 5,
    text: "The technology integration they provided exceeded our expectations. Our Limo Anywhere system runs perfectly now. Their strategic partnership approach makes them feel like part of our team.",
  },
  {
    name: "Jennifer Walsh",
    company: "Executive Transport Group",
    location: "Chicago, IL",
    rating: 5,
    text: "The leadership in operations management is exceptional. The team handles our customer service with such care and attention to detail. Our client satisfaction scores have never been higher.",
  },
  {
    name: "Robert Martinez",
    company: "Black Car Network",
    location: "Dallas, TX",
    rating: 5,
    text: "The back-office support is incredible. They handle everything from quote requests to schedule updates seamlessly. It's like having a premium operations team without the overhead costs.",
  },
  {
    name: "Amanda Foster",
    company: "Prestige Transportation",
    location: "Seattle, WA",
    rating: 5,
    text: "Their email management system for bookings is fantastic. Every inquiry is handled professionally and promptly. The team truly understands the luxury transportation business.",
  },
];

// --- TestimonialCard Component (Updated) ---
const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});

  const unifiedGradient = {
    from: "rgba(59, 130, 246, 0.15)",
    to: "rgba(6, 182, 212, 0.15)",
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = ((y - height / 2) / (height / 2)) * -8;
    const rotateY = ((x - width / 2) / (width / 2)) * 8;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });

    setShineStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      transition: "transform 0.6s ease-in-out",
    });
    setShineStyle({});
  };

  return (
    <div
      ref={cardRef}
      className="group cursor-default w-full flex-shrink-0 px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={style}
        className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500 overflow-hidden hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10"
      >
        <div
          className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500"
          style={{
            backgroundImage: `linear-gradient(to bottom right, ${unifiedGradient.from}, ${unifiedGradient.to})`,
          }}
        />
        <div
          className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={shineStyle}
        />

        <div className="relative z-10 text-center">
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
            ))}
          </div>
          <blockquote className="text-xl text-gray-200 font-medium leading-relaxed mb-8 italic">
            "{testimonial.text}"
          </blockquote>
          <div>
            <div className="text-lg font-bold text-gray-50">
              {testimonial.name}
            </div>
            <div className="text-blue-400 font-semibold">
              {testimonial.company}
            </div>
            <div className="text-sm text-gray-400">{testimonial.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main TestimonialsSection Component ---
const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(0);

  const startInterval = () => {
    stopInterval();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    startInterval();
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    startInterval();
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    startInterval();
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const touchDiff = touchStartRef.current - touchEnd;
    if (touchDiff > 50) {
      nextSlide();
    } else if (touchDiff < -50) {
      prevSlide();
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gray-900 text-white font-sans overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.08)_0%,_rgba(29,78,216,0)_50%)]"></div>
      </div>

      <div aria-live="polite" className="sr-only">
        Showing testimonial {currentSlide + 1} of {testimonials.length}:{" "}
        {testimonials[currentSlide].name}.
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Users className="w-5 h-5 text-blue-400 mr-2" />
            <span className="text-blue-400 font-semibold">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              What Our Clients
            </span>
            <span className="block text-gray-100">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what luxury transportation
            companies across the nation say about working with us as their
            strategic partner.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={stopInterval}
          onMouseLeave={startInterval}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          {/* Video Testimonial Placeholder */}
          <div className="mb-12">
            <div className="max-w-1xl mx-auto">
              <div className="relative bg-card/60 backdrop-blur-xl border border-border/30 rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Watch Client Success Stories
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Hear directly from transportation company owners about their
                    experience working with VAssist Pro
                  </p>
                  <Badge className="bg-primary/10 text-primary px-4 py-2">
                    Video Testimonials Coming Soon
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
