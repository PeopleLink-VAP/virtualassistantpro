
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

import Seo from "./components/Seo";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import CoursesViewPage from "./pages/TrainingPage";
import FreeResourcesPage from "./pages/FreeResourcesPage";
import TeamPage from "./pages/TeamPage";
import TrainingProgramPage from "./pages/TrainingProgramPage";
import CareerOpportunitiesPage from "./pages/CareerOpportunitiesPage";

import BookMeetingPage from "./pages/BookMeetingPage";
import ServicesPage from "./pages/ServicesPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import StudentSuccessStoriesPage from "./pages/StudentSuccessStoriesPage";
import RegisterPage from "./pages/RegisterPage";
import VAJourneyPage from "./pages/VAJourneyPage";
import GameOfTheWeekPage from "./pages/GameOfTheWeekPage";

import MembersDashboard from "./pages/MembersDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <TooltipProvider>
        <Seo />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/va-journey" element={<VAJourneyPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/courses-view" element={<CoursesViewPage />} />
            <Route path="/free-resources" element={<FreeResourcesPage />} />
            <Route path="/e-learning" element={<CoursesViewPage />} />
            <Route path="/vap-course" element={<CoursesViewPage />} />
            <Route path="/training" element={<Navigate to="/vap-course" replace />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/training-program" element={<TrainingProgramPage />} />
            <Route path="/career-opportunities" element={<CareerOpportunitiesPage />} />
            <Route path="/success-stories" element={<StudentSuccessStoriesPage />} />
                        <Route path="/book-meeting" element={<BookMeetingPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/games/game-of-the-week" element={<GameOfTheWeekPage />} />

            <Route path="/members" element={<MembersDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
