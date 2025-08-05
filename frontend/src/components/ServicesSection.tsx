import React, { useRef, useState } from 'react';

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
        const rotateX = ((y - height / 2) / (height / 2)) * -5; // Reduced rotation for subtlety
        const rotateY = ((x - width / 2) / (width / 2)) * 5;
        setStyle({ transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`, transition: "transform 0.1s ease-out" });
        // EDIT: Reduced the radius of the shine effect from 40% to 20%
        setShineStyle({ background: `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 20%)` });
    };

    const handleMouseLeave = () => {
        setStyle({ transform: "perspective(1500px) rotateX(0) rotateY(0) scale3d(1, 1, 1)", transition: "transform 0.6s ease-in-out" });
        setShineStyle({});
    };

    return (
        <div ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`relative group transition-all duration-300 ${className}`}>
            <div className="absolute -inset-px bg-gradient-to-r from-slate-500/50 to-slate-400/50 rounded-3xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div style={style} className="relative w-full h-full bg-[#172A3A]/50 border border-white/20 rounded-3xl p-8 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={shineStyle} />
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
            services: [
                { title: "24/7 Call Answering", icon: <ServiceIcon d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />, items: ["Inbound Call Handling", "After-Hours Support", "Voicemail Management", "Call Forwarding"] },
                { title: "Email Management", icon: <ServiceIcon d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" />, items: ["Booking Requests", "Quote Generation", "Client Communication", "Inbox Organization"] },
                { title: "Booking & Updates", icon: <ServiceIcon d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />, items: ["Reservation Entry", "Schedule Changes", "Flight Tracking", "Client Confirmations"] },
                { title: "Customer Excellence", icon: <ServiceIcon d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11A4 4 0 1 0 12 3a4 4 0 0 0 0 8z" />, items: ["Feedback Collection", "Issue Resolution", "Post-Trip Follow-ups", "VIP Client Handling"] }
            ]
        }
    ];

    return (
        <section className="py-14 bg-[#0D1B2A]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    
                    <p className="text-lg text-white/70 max-w-3xl mx-auto">
                        In the world of luxury transport, perfection is the only standard. V Assist Pro provides the operational backbone to ensure you meet it, every time. Our skilled remote team handles everything from 24/7 client communications to flawless booking management, freeing you from back-office headaches and empowering you to focus on growth.
                    </p>
                </div>

                <div className="space-y-16 max-w-6xl mx-auto">
                    {serviceCategories.map((category, index) => (
                        <InteractiveCard key={index}>
                            <div className="text-left mb-8">
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                <p className="text-white/60">{category.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {category.services.map((service, i) => (
                                    <div key={i}>
                                        <div className="flex items-center mb-3">
                                            <div className="text-[#06B6D4]" style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))' }}>{service.icon}</div>
                                            <h4 className="text-lg font-bold text-white ml-3">{service.title}</h4>
                                        </div>
                                        <ul className="space-y-2 pl-1">
                                            {service.items.map((item, j) => (
                                                <li key={j} className="flex items-start text-white/70">
                                                    <CheckCircleIconSvg />
                                                    <span className="ml-2 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </InteractiveCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
