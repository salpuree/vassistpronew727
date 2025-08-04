import { Users, Award, Clock, Globe, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-development.jpg";
import { Link } from "react-router-dom";

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
