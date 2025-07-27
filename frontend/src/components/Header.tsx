import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-luxury border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F88da141a3a504a51b2a3ca3584f907d1%2Ff34b048caef549548e025a9d389e4e6d?format=webp&width=800"
                alt="Business Logo"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/#services"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              Services
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link
              to="/case-studies"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              Case Studies
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link
              to="/roi-calculator"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              ROI Calculator
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link
              to="/#testimonials"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              Reviews
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link
              to="/faq"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              FAQ
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link
              to="/#contact"
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 group"
            >
              Contact
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+19416234590" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                (941) 623-4590
              </a>
              <a href="mailto:info@virtualassistancepro.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@virtualassistancepro.com
              </a>
            </div>
            <Button 
              as={Link}
              to="/#contact"
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
              <Link
                to="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Services
              </Link>
              <Link
                to="/case-studies"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Case Studies
              </Link>
              <Link
                to="/roi-calculator"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                ROI Calculator
              </Link>
              <Link
                to="/#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Reviews
              </Link>
              <Link
                to="/faq"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                FAQ
              </Link>
              <Link
                to="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
              <div className="border-t border-border/50 pt-4">
                <a href="tel:+19416234590" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  (941) 623-4590
                </a>
                <a href="mailto:info@virtualassistancepro.com" className="flex items-center text-muted-foreground hover:text-primary transition-colors mb-4">
                  <Mail className="w-4 h-4 mr-2" />
                  info@virtualassistancepro.com
                </a>
                <Link to="/#contact" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                  className="btn-luxury w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
