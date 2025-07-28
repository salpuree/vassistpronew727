import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Index from "./pages/Index";
import ROICalculatorPage from "./pages/ROICalculatorPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import FAQPage from "./pages/FAQPage";
import IndustryExpertisePage from "./pages/IndustryExpertisePage";
import SocialProofPage from "./pages/SocialProofPage";
import HowWeWorkPage from "./pages/HowWeWorkPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/roi-calculator" element={<ROICalculatorPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us/industry-expertise" element={<IndustryExpertisePage />} />
          <Route path="/about-us/trust-recognition" element={<SocialProofPage />} />
          <Route path="/about-us/our-process" element={<HowWeWorkPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Live Chat Placeholder */}
        <div className="fixed bottom-6 right-6 z-50">
          <Button 
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            onClick={() => {
              // Placeholder action - could open chat widget or redirect to contact
              console.log("Live chat clicked - integrate with chat service");
            }}
          >
            <MessageSquare className="w-6 h-6 text-primary-foreground" />
          </Button>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
