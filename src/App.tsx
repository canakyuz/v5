import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ProjectDetail from "@/pages/project/ProjectDetail";
import PostDetail from "@/pages/post/PostDetail";
import { MainLayout } from "@/layouts/main/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <MainLayout>
                <Index />
              </MainLayout>
            } />
            <Route path="/project/:id" element={
              <MainLayout>
                <ProjectDetail />
              </MainLayout>
            } />
            <Route path="/post/:id" element={
              <MainLayout>
                <PostDetail />
              </MainLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <MainLayout>
                <NotFound />
              </MainLayout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
