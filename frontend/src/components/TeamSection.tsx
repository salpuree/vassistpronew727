import React from "react";
import Header from "/components/Header";
import Footer from "/components/Footer";
import PageHeroSection from "/components/PageHeroSection";
import TeamSection from "/components/TeamSection"; // Assuming this is the component from the previous step
import { Linkedin, Mail } from "lucide-react";

// --- Reusable Interactive Card Component ---
// You might want to move this to its own file to share across components
const InteractiveCard = ({ children, className }) => {
    const cardRef = React.useRef(null);
    const [style, setStyle] = React.useState({});
    const [shineStyle, setShineStyle] = React.useState({});

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = ((y - height / 2) / (height / 2)) * -5;
        const rotateY = ((x - width / 2) / (width / 2)) * 5;
        setStyle({ transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`, transition: "transform 0.1s ease-out" });
        setShineStyle({ background: `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255, 255, 255, 0.08), transparent 80%)` });
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

export default TeamSection;