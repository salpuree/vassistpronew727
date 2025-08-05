import { Users, Award, Clock, Globe, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-development.jpg";
import { Link } from "react-router-dom";

const CheckCircleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs><linearGradient id="platinumGradientCheck" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: '#E5E7EB', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#9CA3AF', stopOpacity: 1 }} /></linearGradient></defs>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="url(#platinumGradientCheck)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22 4 12 14.01 9 11.01" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
const TeamSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Team Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Team Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl h-[500px]">
              <img 
                src={teamImage} 
                alt="Development Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div> {/* ✅ CLOSED THIS div properly */}

          {/* Team Content */}
          <div>
            <h3 className="text-4xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-gradient">Expert Team?</span>
            </h3>
            <div className="space-y-6">
              {/* Features */}
              {[
                {
                  title: "Technology + Operations Excellence",
                  desc: "Unique combination of technical expertise and professional back-office operations for complete solutions.",
                },
                {
                  title: "Your Strategic Partner",
                  desc: "We seamlessly integrate with your business as a trusted strategic partner, delivering enterprise-level expertise without the overhead costs.",
                },
                {
                  title: "Luxury Transportation Specialists",
                  desc: "Deep understanding of Limo Anywhere, GNet, and the unique needs of luxury transportation companies.",
                },
                {
                  title: "24/7 Operations Capability",
                  desc: "Never miss a booking or customer inquiry with our round-the-clock professional support team.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link to="/team">
                <Button className="btn-luxury">Meet Our Core Team</Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamSection;
