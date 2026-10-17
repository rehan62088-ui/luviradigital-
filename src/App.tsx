import React, { useState } from 'react';
import { Project } from './types';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStatement } from './components/EditorialStatement';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { WhyLuvira } from './components/WhyLuvira';
import { PricingSection } from './components/PricingSection';
import { Process } from './components/Process';
import { FAQSection } from './components/FAQSection';
import { AboutStudio } from './components/AboutStudio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialService, setEnquiryInitialService] = useState<string | undefined>(undefined);
  const [enquiryInitialPackage, setEnquiryInitialPackage] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (serviceName?: string, packageName?: string) => {
    setEnquiryInitialService(serviceName);
    setEnquiryInitialPackage(packageName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryInitialService(undefined);
    setEnquiryInitialPackage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 font-body selection:bg-white selection:text-black">
      {/* Viewport Top High-Performance Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 1. Sticky Navigation */}
      <Navbar onStartProject={() => handleOpenEnquiry()} />

      <main>
        {/* 1. Premium Hero Section with Architectural 3D Composition */}
        <Hero onStartProject={() => handleOpenEnquiry()} />

        {/* Agency Manifesto / Positioning Statement */}
        <EditorialStatement />

        {/* 2. Services Overview (9 Actual Disciplines) */}
        <Services onStartProject={(svc) => handleOpenEnquiry(svc)} />

        {/* 3. Selected Work / Portfolio (Curated Concept Showcases) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Why Businesses Choose Luvira Digital */}
        <WhyLuvira />

        {/* 5. Transparent Pricing Packages (Basic ₹10k, Pro ₹20k, Premium ₹30k) */}
        <PricingSection onSelectPackage={(pkg) => handleOpenEnquiry(undefined, pkg)} />

        {/* 6. Project Workflow (From Idea to Launch) */}
        <Process />

        {/* 7. Frequently Asked Questions */}
        <FAQSection />

        {/* 8. Agency Foundation & Honesty */}
        <AboutStudio />

        {/* 8. Contact & Conversion Section */}
        <ContactSection onStartProject={() => handleOpenEnquiry()} />
      </main>

      {/* 9. Professional Footer */}
      <Footer onStartProject={() => handleOpenEnquiry()} />

      {/* Interactive Project Detail Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={(svc) => handleOpenEnquiry(svc)}
      />

      {/* Structured Project Enquiry Experience */}
      <ProjectEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialService={enquiryInitialService}
        initialPackage={enquiryInitialPackage}
      />
    </div>
  );
}
