import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Professional SVG Icons ---
const CheckCircleIconSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const ServiceIcon = ({ d }) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;

// --- Enhanced Interactive Card Component ---
const InteractiveCard = ({ children, className, delay = 0 }) => {
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
            transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`, 
            transition: "transform 0.1s ease-out" 
        });
        setShineStyle({ 
            background: `radial-gradient(circle 200px at ${x}px ${y}px, rgba(255, 255, 255, 0.1), transparent 70%)` 
        });
    };

    const handleMouseLeave = () => {
        setStyle({ 
            transform: "perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", 
            transition: "transform 0.6s ease-in-out" 
        });
        setShineStyle({});
    };

    return (
        <div 
            ref={cardRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            className={`relative group transition-all duration-500 animate-fade-in ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Enhanced glow effect */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-40"></div>
            
            {/* Main card */}
            <div 
                style={style} 
                className="relative w-full h-full bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500 overflow-hidden hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div 
                    className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-3xl" 
                    style={shineStyle} 
                />
                <div className="relative z-10 h-full flex flex-col">{children}</div>
            </div>
        </div>
    );
};


// --- Main ServicesSection Component ---
const ServicesSection = () => {
    const serviceCategories = [
        {
            title: "Technology Solutions",
            description: "Complete technology solutions and comprehensive back-office support services for luxury transportation providers.",
            icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6",
            services: [
                { title: "Limo Anywhere", icon: <ServiceIcon d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M12 18v-6 M9 15h6" />, items: ["Setup & Configuration", "System Management", "Driver App Support", "Automation & Workflows"] },
                { title: "GNet & Farm-out", icon: <ServiceIcon d="M2 12h20 M12 2v20" />, items: ["Network Setup", "Affiliate Management", "Rate Configuration", "Real-time Tracking"] },
                { title: "Custom App Development", icon: <ServiceIcon d="M16 18 22 12 16 6 M8 6 2 12 8 18" />, items: ["Booking Apps", "Driver Apps", "Admin Dashboards", "API Integrations"] },
                { title: "Website Design & Dev", icon: <ServiceIcon d="M20 12 L4 12 M12 20 L12 4" />, items: ["Luxury Branding", "Booking Engine Integration", "SEO Optimization", "Mobile-First Design"] }
            ]
        },
        {
            title: "Back-Office Support Services",
            description: "Your dedicated virtual assistant team handling bookings, quotes, updates, follow-ups, calls, and more.",
            icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            services: [
                { title: "24/7 Call Answering", icon: <ServiceIcon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />, items: ["Inbound Call Handling", "After-Hours Support", "Voicemail Management", "Call Forwarding"] },
                { title: "Email Management", icon: <ServiceIcon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />, items: ["Booking Requests", "Quote Generation", "Client Communication", "Inbox Organization"] },
                { title: "Booking & Updates", icon: <ServiceIcon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />, items: ["Reservation Entry", "Schedule Changes", "Flight Tracking", "Client Confirmations"] },
                { title: "Customer Excellence", icon: <ServiceIcon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11A4 4 0 1 0 12 3a4 4 0 0 0 0 8z" />, items: ["Feedback Collection", "Issue Resolution", "Post-Trip Follow-ups", "VIP Client Handling"] }
            ]
        }
    ];

    return (
        <section className="relative py-24 bg-gray-900 text-white font-sans overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.08)_0%,_rgba(29,78,216,0)_50%)]"></div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-blue-500/20 rounded-full animate-float animate-pulse-soft" />
            <div className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-cyan-500/30 rounded-full animate-bounce-soft" style={{animationDelay: "2s"}} />
            <div className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-blue-400/40 rounded-full animate-float animate-glow" style={{animationDelay: "4s"}} />

            <div className="relative z-10 container mx-auto px-4">

                {/* Service Categories */}
                <div className="space-y-12 max-w-6xl mx-auto">
                    {serviceCategories.map((category, index) => (
                        <InteractiveCard key={index} delay={index * 200}>
                            {/* Category Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex-1">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mr-4">
                                            <ServiceIcon d={category.icon} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-100">{category.title}</h2>
                                    </div>
                                    <p className="text-lg text-gray-300 leading-relaxed">{category.description}</p>
                                </div>
                            </div>

                            {/* Services Grid */}
                            <div className="border-t border-gray-700/50 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                {category.services.map((service, i) => (
                                    <div
                                        key={i}
                                        className="group/service bg-gray-800/30 rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/30"
                                        style={{ border: '0.5px solid rgba(55, 65, 81, 0.3)' }}
                                    >
                                        {/* Service Header */}
                                        <div className="flex items-center mb-4">
                                            <div className="text-blue-400 group-hover/service:text-cyan-400 transition-colors" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.4))' }}>
                                                {service.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-100 ml-3 group-hover/service:text-blue-400 transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Service Items */}
                                        <ul className="space-y-3">
                                            {service.items.map((item, j) => (
                                                <li key={j} className="flex items-start text-gray-300 group-hover/service:text-gray-200 transition-colors">
                                                    <div className="mt-1 mr-3 flex-shrink-0">
                                                        <CheckCircleIconSvg />
                                                    </div>
                                                    <span className="text-sm leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </InteractiveCard>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-20 animate-fade-in">
                    <div className="bg-gray-800/40 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/30 max-w-4xl mx-auto">
                        <h3 className="text-3xl font-bold text-gray-100 mb-4">
                            Ready to Transform Your Operations?
                        </h3>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of luxury transportation companies who trust us with their back-office operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium px-8 py-3 shadow-lg hover:shadow-cyan-500/40">
                                Schedule Consultation
                            </Button>
                            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-all duration-300 px-8 py-3">
                                View Case Studies
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
