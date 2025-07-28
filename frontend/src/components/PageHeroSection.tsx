import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  breadcrumb?: string;
}

const PageHeroSection = ({ title, description, imageUrl, breadcrumb }: PageHeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-primary/20 rounded-full animate-float animate-pulse-soft" />
      <div className="absolute bottom-32 right-4 md:right-16 w-10 md:w-12 h-10 md:h-12 bg-primary/30 rounded-full animate-bounce-soft" style={{animationDelay: "2s"}} />
      <div className="absolute top-1/2 right-8 md:right-32 w-6 md:w-8 h-6 md:h-8 bg-primary/40 rounded-full animate-float animate-glow" style={{animationDelay: "4s"}} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          {breadcrumb && (
            <div className="mb-6 animate-fade-in">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="text-foreground">{breadcrumb}</span>
            </div>
          )}
          
          {/* Main Headline */}
          <h1 className="mb-6 animate-slide-up">
            <span className="text-gradient text-glow">{title}</span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: "0.2s"}}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;