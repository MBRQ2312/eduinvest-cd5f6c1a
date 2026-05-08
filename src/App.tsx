import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Parent from "./pages/Parent.tsx";
import Pitch from "./pages/Pitch.tsx";
import Coach from "./pages/Coach.tsx";
import Teacher from "./pages/Teacher.tsx";
import Principal from "./pages/Principal.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/perele" element={<Parent />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="/treener" element={<Coach />} />
          <Route path="/opetaja" element={<Teacher />} />
          <Route path="/juht" element={<Principal />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
