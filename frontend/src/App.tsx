import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
