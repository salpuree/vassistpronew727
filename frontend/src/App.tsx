import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Suspense, lazy } from "react";

// Dynamic imports for code splitting
const Index = lazy(() => import("./pages/Index"));
const SuccessStoriesPage = lazy(() => import("./pages/SuccessStoriesPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ServicePackagesPage = lazy(() => import("./pages/ServicePackagesPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));
const ROICalculatorPage = lazy(() => import("./pages/ROICalculatorPage"));
const SocialProofPage = lazy(() => import("./pages/SocialProofPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);
import PerformanceOptimizer from "./components/PerformanceOptimizer";
import SEOHead from "./components/SEOHead";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

// Live Chat Button Component
const LiveChatButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => navigate('/contact-us')}
        title="Contact Us"
      >
        <MessageSquare className="w-6 h-6 text-primary-foreground" />
      </Button>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SEOHead />
      <PerformanceOptimizer />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="overflow-x-hidden">
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service-packages" element={<ServicePackagesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/case-studies" element={<SuccessStoriesPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/social-proof" element={<SocialProofPage />} />
          {/* Legacy routes for backward compatibility */}
          <Route path="/about-us/industry-expertise" element={<AboutUsPage />} />
          <Route path="/about-us/trust-recognition" element={<AboutUsPage />} />
          <Route path="/about-us/our-process" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>

        <LiveChatButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
