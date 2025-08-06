import React, { useState, useEffect, useRef } from 'react';
import { Zap, ChevronLeft, ChevronRight, Star, TrendingUp, CheckCircle, Award } from 'lucide-react';

// --- Professional SVG Icons ---
const CheckCircleIconSvg = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="platinumGradientCheck" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#E5E7EB', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9CA3AF', stopOpacity: 1 }} />
            </linearGradient>
        </defs>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#platinumGradientCheck)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22 4 12 14.01 9 11.01" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- Reusable Interactive Card Component ---
const InteractiveCard = ({ children, className }) => {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});
    const [shineStyle, setShineStyle] = useState({});

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = ((y - height / 2) / (height / 2)) * -3;
        const rotateY = ((x - width / 2) / (width / 2)) * 3;
        setStyle({ 
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`, 
            transition: "transform 0.1s ease-out" 
        });
        setShineStyle({ 
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)` 
        });
    };

    const handleMouseLeave = () => {
        setStyle({ 
            transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", 
            transition: "transform 0.6s ease-in-out" 
        });
        setShineStyle({});
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`relative group transition-all duration-300 ${className}`}>
            {/* Enhanced glow effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
            
            {/* Main card */}
            <div style={style} className="relative w-full h-full bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500 overflow-hidden hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={shineStyle} />
                <div className="relative z-10 h-full flex flex-col">{children}</div>
            </div>
        </div>
    );
};

// --- Main SuccessStoriesSection Component ---
const SuccessStoriesSection = () => {
    const caseStudies = [
        {
            company: "Elite Transport Miami",
            location: "Miami, FL",
            challenge: "Manual processes were causing a 30% rate of missed opportunities and booking errors.",
            solution: "A complete Limo Anywhere integration coupled with our 24/7 dispatch and operations support.",
            results: [
                { icon: TrendingUp, metric: "Booking Conversion", improvement: "+57%" },
                { icon: Zap, metric: "Response Time", improvement: "94% faster" },
                { icon: CheckCircle, metric: "Monthly Revenue", improvement: "+58%" }
            ]
        },
        {
            company: "Premier Executive Services",
            location: "New York, NY",
            challenge: "Significant email delays and a complete lack of after-hours support led to lost clients.",
            solution: "Advanced email management, extended support hours, and strategic automation workflows.",
            results: [
                { icon: Zap, metric: "Email Response", improvement: "92% faster" },
                { icon: TrendingUp, metric: "After-Hours Bookings", improvement: "+35%" },
                { icon: CheckCircle, metric: "Operational Costs", improvement: "47% savings" }
            ]
        }
    ];

    const testimonials = [
        {
            name: "Marcus Thompson",
            company: "Elite Transportation Services",
            location: "Miami, FL",
            rating: 5,
            text: "Their 24/7 support has increased our booking rate by 40%. We never miss a call or opportunity anymore. The level of professionalism is unmatched."
        },
        {
            name: "Sarah Rodriguez",
            company: "Luxury Rides NYC",
            location: "New York, NY",
            rating: 5,
            text: "Working with them has been a game-changer. The team personally ensures every client interaction meets our luxury standards. Couldn't be happier."
        },
        {
            name: "David Chen",
            company: "Premier Limo Solutions",
            location: "Los Angeles, CA",
            rating: 5,
            text: "The technology integration exceeded our expectations. Their strategic partnership approach makes them feel like part of our team."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

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
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        startInterval();
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        startInterval();
    };

    return (
        <section className="relative py-24 bg-gray-900 text-white font-sans overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.08)_0%,_rgba(29,78,216,0)_50%)]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Award className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-400 font-semibold">Success Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Real Results,
                        </span>
                        <span className="block text-gray-100">Trusted Voices</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        See how luxury transportation companies have transformed their operations with our strategic partnership.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
                    {caseStudies.map((study, index) => (
                        <InteractiveCard key={index}>
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-100 mb-1">{study.company}</h3>
                                <p className="text-blue-400 font-semibold text-sm">{study.location}</p>
                            </div>
                            
                            <div className="flex-grow space-y-6 mb-8 border-t border-b border-gray-700/50 py-6 transition-colors duration-300 group-hover:border-blue-400/30">
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-300 mb-2">The Challenge</h4>
                                    <p className="text-gray-400 leading-relaxed">{study.challenge}</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-gray-300 mb-2">Our Solution</h4>
                                    <p className="text-gray-400 leading-relaxed">{study.solution}</p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-semibold text-sm text-gray-300 mb-4 text-center">Key Results</h4>
                                <div className="space-y-3 bg-gray-900/40 p-6 rounded-xl border border-gray-700/50 transition-colors duration-300 group-hover:border-blue-400/30">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <result.icon className="w-5 h-5 text-blue-400 mr-3" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }} />
                                                <span className="text-gray-300">{result.metric}</span>
                                            </div>
                                            <span className="text-lg font-bold text-blue-400">{result.improvement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="border-t border-gray-700/50 pt-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                            <Star className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 font-semibold">Client Testimonials</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                What Our Clients Say
                            </span>
                        </h3>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Don't just take our word for it. Here's what transportation companies say about working with us.
                        </p>
                    </div>

                    <div 
                        className="relative max-w-4xl mx-auto"
                        onMouseEnter={stopInterval}
                        onMouseLeave={startInterval}
                    >
                        <div className="overflow-hidden">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <InteractiveCard>
                                            <div className="text-center h-full flex flex-col justify-center">
                                                <div className="flex justify-center space-x-1 mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-xl text-gray-200 font-medium leading-relaxed mb-8 italic">
                                                    "{testimonial.text}"
                                                </blockquote>
                                                <div>
                                                    <div className="text-lg font-bold text-gray-100">{testimonial.name}</div>
                                                    <div className="text-blue-400 font-semibold">{testimonial.company}</div>
                                                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                                                </div>
                                            </div>
                                        </InteractiveCard>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation buttons */}
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

                    {/* Slide indicators */}
                    <div className="flex justify-center space-x-3 mt-8">
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
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
