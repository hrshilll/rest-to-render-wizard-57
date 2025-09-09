import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Mentors from "./pages/Mentors";
import Stories from "./pages/Stories";
import Jobs from "./pages/Jobs";
import Events from "./pages/Events";
import Feed from "./pages/Feed";
import Donations from "./pages/Donations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={
              <Layout>
                <Dashboard />
              </Layout>
            } />
            <Route path="/mentors" element={
              <Layout>
                <Mentors />
              </Layout>
            } />
            <Route path="/stories" element={
              <Layout>
                <Stories />
              </Layout>
            } />
            <Route path="/jobs" element={
              <Layout>
                <Jobs />
              </Layout>
            } />
            <Route path="/events" element={
              <Layout>
                <Events />
              </Layout>
            } />
            <Route path="/feed" element={
              <Layout>
                <Feed />
              </Layout>
            } />
            <Route path="/donations" element={
              <Layout>
                <Donations />
              </Layout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
