
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CoachingPersonnel from "./pages/CoachingPersonnel";
import CoachingProfessionnel from "./pages/CoachingProfessionnel";
import CoachingEnLigne from "./pages/CoachingEnLigne";
import BilanCompetences from "./pages/BilanCompetences";
import PrestationsBienEtre from "./pages/PrestationsBienEtre";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coaching-personnel" element={<CoachingPersonnel />} />
          <Route path="/coaching-professionnel" element={<CoachingProfessionnel />} />
          <Route path="/coaching-en-ligne" element={<CoachingEnLigne />} />
          <Route path="/bilan-competences" element={<BilanCompetences />} />
          <Route path="/prestations-bien-etre" element={<PrestationsBienEtre />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
