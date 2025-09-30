import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Places from "./pages/Places";
import ThingsToDo from "./pages/ThingsToDo";
import AreasToStay from "./pages/AreasToStay";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

// Service Pages
import AirportTransfers from "./pages/services/AirportTransfers";
import CustomTours from "./pages/services/CustomTours";
import WineTours from "./pages/services/WineTours";
import AdventureTrips from "./pages/services/AdventureTrips";

// Place Pages
import CampsBay from "./pages/places/CampsBay";
import Bokaap from "./pages/places/Bokaap";
import Franschhoek from "./pages/places/Franschhoek";
import Capepoint from "./pages/places/Capepoint";
import Tablemountain from "./pages/places/Tablemountain";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/places" element={<Places />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/areas-to-stay" element={<AreasToStay />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Service Detail Pages */}
          <Route path="/services/airport-transfers" element={<AirportTransfers />} />
          <Route path="/services/custom-tours" element={<CustomTours />} />
          <Route path="/services/wine-tours" element={<WineTours />} />
          <Route path="/services/adventure-trips" element={<AdventureTrips />} />
          
          {/* Place Detail Pages */}
          <Route path="/places/camps-bay" element={<CampsBay />} />
          <Route path="/places/bo-kaap" element={<Bokaap />} />
          <Route path="/places/franschhoek" element={<Franschhoek />} />
          <Route path="/places/cape-point" element={<Capepoint />} />
          <Route path="/places/table-mountain" element={<Tablemountain />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
