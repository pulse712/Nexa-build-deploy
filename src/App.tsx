import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import "@/i18n/config";
import Index from "./pages/Index.tsx";
import Auth from "./pages/Auth.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import BlogNews from "./pages/BlogNews.tsx";
import CareersIndex from "./pages/careers/CareersIndex.tsx";
import LifeAtNexaTech from "./pages/careers/LifeAtNexaTech.tsx";
import OpenPositions from "./pages/careers/OpenPositions.tsx";
import InternshipProgram from "./pages/careers/InternshipProgram.tsx";
import HiringProcess from "./pages/careers/HiringProcess.tsx";
import IndustriesIndex from "./pages/industries/IndustriesIndex.tsx";
import BankingFinance from "./pages/industries/BankingFinance.tsx";
import Healthcare from "./pages/industries/Healthcare.tsx";
import RetailEcommerce from "./pages/industries/RetailEcommerce.tsx";
import Logistics from "./pages/industries/Logistics.tsx";
import Education from "./pages/industries/Education.tsx";
import Manufacturing from "./pages/industries/Manufacturing.tsx";
import BlockchainTrading from "./pages/industries/BlockchainTrading.tsx";
import WebAppDevelopment from "./pages/industries/WebAppDevelopment.tsx";
import OurTeam from "./pages/company/OurTeam.tsx";
import MissionVision from "./pages/company/MissionVision.tsx";
import PartnersClients from "./pages/company/PartnersClients.tsx";
import CompanyHistory from "./pages/company/CompanyHistory.tsx";
import Offices from "./pages/company/Offices.tsx";
import Technologies from "./pages/Technologies.tsx";
import SolutionsIndex from "./pages/solutions/SolutionsIndex.tsx";
import EnterpriseSolutions from "./pages/solutions/EnterpriseSolutions.tsx";
import FinTechSolutions from "./pages/solutions/FinTechSolutions.tsx";
import HealthcareSolutions from "./pages/solutions/HealthcareSolutions.tsx";
import EcommerceSolutions from "./pages/solutions/EcommerceSolutions.tsx";
import SaasDevelopment from "./pages/solutions/SaasDevelopment.tsx";
import LegacyModernization from "./pages/solutions/LegacyModernization.tsx";
import AIMLSolutions from "./pages/solutions/AIMLSolutions.tsx";
import CloudNativeSolutions from "./pages/solutions/CloudNativeSolutions.tsx";
import CybersecuritySolutions from "./pages/solutions/CybersecuritySolutions.tsx";
import DataAnalyticsSolutions from "./pages/solutions/DataAnalyticsSolutions.tsx";
import IoTSolutions from "./pages/solutions/IoTSolutions.tsx";
import DevOpsSolutions from "./pages/solutions/DevOpsSolutions.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/news" element={<BlogNews />} />
            <Route path="/careers" element={<CareersIndex />} />
            <Route path="/careers/life" element={<LifeAtNexaTech />} />
            <Route path="/careers/positions" element={<OpenPositions />} />
            <Route path="/careers/internships" element={<InternshipProgram />} />
            <Route path="/careers/hiring" element={<HiringProcess />} />
            <Route path="/industries" element={<IndustriesIndex />} />
            <Route path="/industries/banking-finance" element={<BankingFinance />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/retail-ecommerce" element={<RetailEcommerce />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/blockchain-trading" element={<BlockchainTrading />} />
            <Route path="/industries/web-app-development" element={<WebAppDevelopment />} />
            <Route path="/company/team" element={<OurTeam />} />
            <Route path="/company/mission-vision" element={<MissionVision />} />
            <Route path="/company/partners" element={<PartnersClients />} />
            <Route path="/company/history" element={<CompanyHistory />} />
            <Route path="/company/offices" element={<Offices />} />
            <Route path="/solutions" element={<SolutionsIndex />} />
            <Route path="/solutions/enterprise" element={<EnterpriseSolutions />} />
            <Route path="/solutions/fintech" element={<FinTechSolutions />} />
            <Route path="/solutions/healthcare" element={<HealthcareSolutions />} />
            <Route path="/solutions/ecommerce" element={<EcommerceSolutions />} />
            <Route path="/solutions/saas" element={<SaasDevelopment />} />
            <Route path="/solutions/legacy-modernization" element={<LegacyModernization />} />
            <Route path="/solutions/ai-ml" element={<AIMLSolutions />} />
            <Route path="/solutions/cloud-native" element={<CloudNativeSolutions />} />
            <Route path="/solutions/cybersecurity" element={<CybersecuritySolutions />} />
            <Route path="/solutions/data-analytics" element={<DataAnalyticsSolutions />} />
            <Route path="/solutions/iot" element={<IoTSolutions />} />
            <Route path="/solutions/devops" element={<DevOpsSolutions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
