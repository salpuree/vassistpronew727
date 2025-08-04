import React, { useState, useEffect, useRef } from 'react';

// --- UI & Icon Mocks ---
// In your real project, you would import these from your actual component/icon libraries
const Zap = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const ChevronLeft = () => <span>&larr;</span>;
const ChevronRight = () => <span>&rarr;</span>;
const StarIconSvg = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="brand-blue-text brand-blue-glow-icon">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" />
    </svg>
);
const CheckCircleIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="platinumGradientCheck" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: '#E5E7EB', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#9CA3AF', stopOpacity: 1 }} /></linearGradient></defs>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#platinumGradientCheck)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22 4 12 14.01 9 11.01" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const TrendingUpIcon = (props) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;


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
        const rotateX = ((y - height / 2) / (height / 2)) * -6;
        const rotateY = ((x - width / 2) / (width / 2)) * 6;
        setStyle({ transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`, transition: "transform 0.1s ease-out" });
        setShineStyle({ background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 40%)` });
    };

    const handleMouseLeave = () => {
        setStyle({ transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", transition: "transform 0.6s ease-in-out" });
        setShineStyle({});
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`relative group transition-all duration-300 ${className}`}>
            <div className="absolute -inset-px bg-gradient-to-r from-slate-500/50 to-slate-400/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div style={style} className="relative w-full h-full bg-[#172A3A] border border-white/20 rounded-3xl p-8 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={shineStyle} />
                <div className="relative z-10 h-full flex flex-col">{children}</div>
            </div>
        </div>
    );
};

// --- Main SuccessStoriesSection Component ---
const SuccessStoriesSection = () => {
    const caseStudies = [
        { company: "Elite Transport Miami", challenge: "Manual processes were causing a 30% rate of missed opportunities and booking errors.", solution: "A complete Limo Anywhere integration coupled with our 24/7 dispatch and operations support.", results: [{ icon: TrendingUpIcon, metric: "Booking Conversion", improvement: "+57%" }, { icon: Zap, metric: "Response Time", improvement: "94% faster" }, { icon: CheckCircleIconSvg, metric: "Monthly Revenue", improvement: "+58%" }] },
        { company: "Premier Executive Services", challenge: "Significant email delays and a complete lack of after-hours support led to lost clients.", solution: "Advanced email management, extended support hours, and strategic automation workflows.", results: [{ icon: Zap, metric: "Email Response", improvement: "92% faster" }, { icon: TrendingUpIcon, metric: "After-Hours Bookings", improvement: "+35%" }, { icon: CheckCircleIconSvg, metric: "Operational Costs", improvement: "47% savings" }] },
    ];

    const testimonials = [
        { name: "Marcus Thompson", company: "Elite Transportation Services", rating: 5, text: "Their 24/7 support has increased our booking rate by 40%. We never miss a call or opportunity anymore. The level of professionalism is unmatched." },
        { name: "Sarah Rodriguez", company: "Luxury Rides NYC", rating: 5, text: "Working with them has been a game-changer. The team personally ensures every client interaction meets our luxury standards. Couldn't be happier." },
        { name: "David Chen", company: "Premier Limo Solutions", rating: 5, text: "The technology integration exceeded our expectations. Their strategic partnership approach makes them feel like part of our team." },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-24 bg-[#0D1B2A]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold uppercase tracking-widest text-[#C0C0C0] mb-4">Success Stories</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">Real Results, Trusted Voices</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {caseStudies.map((study, index) => (
                        <InteractiveCard key={index}>
                            <div className="mb-4"><h3 className="text-xl font-bold text-white">{study.company}</h3></div>
                            <div className="flex-grow space-y-4 mb-6 border-t border-b border-white/10 py-4 transition-colors duration-300 group-hover:border-white/30">
                                <div><h4 className="font-semibold text-sm text-white/70 mb-1">The Challenge</h4><p className="text-white/60">{study.challenge}</p></div>
                                <div><h4 className="font-semibold text-sm text-white/70 mb-1">Our Solution</h4><p className="text-white/60">{study.solution}</p></div>
                            </div>
                            <div className="mb-6"><h4 className="font-semibold text-sm text-white/70 mb-3 text-center">Key Results</h4>
                                <div className="space-y-2 bg-black/20 p-4 rounded-lg border border-white/10 transition-colors duration-300 group-hover:border-white/30">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <result.icon className="w-5 h-5 brand-blue-text brand-blue-glow-icon mr-3" />
                                                <span className="text-white/70">{result.metric}</span>
                                            </div>
                                            <span className="text-lg font-bold text-[#C0C0C0]">{result.improvement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </InteractiveCard>
                    ))}
                </div>

                <div className="mt-16 pt-16 border-t border-white/10">
                    <div className="relative max-w-5xl mx-auto">
                        <div className="overflow-hidden">
                            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="w-full flex-shrink-0 px-4">
                                        <InteractiveCard>
                                            <div className="text-center h-full flex flex-col justify-center">
                                                <div className="flex justify-center space-x-1 mb-6">
                                                    {[...Array(testimonial.rating)].map((_, i) => <StarIconSvg key={i} />)}
                                                </div>
                                                <blockquote className="text-xl text-white/80 font-medium leading-relaxed mb-8 italic">"{testimonial.text}"</blockquote>
                                                <div>
                                                    <div className="text-lg font-bold text-white">{testimonial.name}</div>
                                                    <div className="text-[#C0C0C0] font-semibold">{testimonial.company}</div>
                                                </div>
                                            </div>
                                        </InteractiveCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button onClick={prevSlide} aria-label="Previous testimonial" className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center z-20"><ChevronLeft /></button>
                        <button onClick={nextSlide} aria-label="Next testimonial" className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center z-20"><ChevronRight /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
