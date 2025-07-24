import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-luxury border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2F88da141a3a504a51b2a3ca3584f907d1%2Ff34b048caef549548e025a9d389e4e6d?format=webp&width=800"
              alt="Business Logo" 
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <h3 className="text-xl font-bold text-foreground">VAssist Pro</h3>
              <p className="text-sm text-muted-foreground">Your Invisible Team</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('packages')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+1555123467" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (555) 123-4567
              </a>
              <a href="mailto:hello@vassistpro.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                hello@vassistpro.com
              </a>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="btn-luxury"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-luxury">
            <nav className="flex flex-col space-y-4 p-6">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <div className="border-t border-border/50 pt-4">
                <a href="tel:+1555123467" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </a>
                <a href="mailto:hello@vassistpro.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@vassistpro.com
                </a>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-luxury w-full"
                >
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
