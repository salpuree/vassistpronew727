import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              {/* 404 Animation/Icon */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-6xl font-bold text-primary">404</span>
                </div>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Page Not Found</span>
              </h1>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/">
                  <Button className="btn-luxury">
                    <Home className="w-5 h-5 mr-2" />
                    Go to Homepage
                  </Button>
                </Link>
                
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>
              </div>
              
              {/* Helpful Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">Looking for something specific?</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/services" className="text-primary hover:text-primary/80 transition-colors">Services</Link>
                  <Link to="/about-us" className="text-primary hover:text-primary/80 transition-colors">About Us</Link>
                  <Link to="/team" className="text-primary hover:text-primary/80 transition-colors">Our Team</Link>
                  <Link to="/contact-us" className="text-primary hover:text-primary/80 transition-colors">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
