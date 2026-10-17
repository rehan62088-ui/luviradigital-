import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, X, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (initialService?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#090b0f] border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090b0f]/95 backdrop-blur-md border-b border-white/10">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs uppercase tracking-widest font-mono-tech text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-white" />
            <span>Return to Portfolio Index</span>
          </button>

          {/* Precision metadata */}
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-400 font-mono-tech">
            <span className="text-white font-bold">[{project.number}]</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-slate-300">{project.category}</span>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-white font-medium">CONCEPT DEMONSTRATION</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-8 h-8 border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-12">
          {/* Project Title & Tagline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/15 text-xs uppercase tracking-widest text-slate-300 font-mono-tech">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>Project Concept Blueprint · {project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 font-light max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Mockup Presentation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono-tech flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-white" />
                Live Architecture Preview
              </span>
              {/* Responsive Device View Toggle */}
              <div className="flex items-center border border-white/15 bg-[#050507]">
                <button
                  onClick={() => setActiveDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech transition-colors cursor-pointer ${
                    activeDeviceView === 'desktop'
                      ? 'bg-white text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Desktop Architecture</span>
                </button>
                <button
                  onClick={() => setActiveDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech transition-colors border-l border-white/15 cursor-pointer ${
                    activeDeviceView === 'mobile'
                      ? 'bg-white text-black font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile Viewport</span>
                </button>
              </div>
            </div>

            <div className="border border-white/15 p-4 bg-[#050507]">
              <ProjectMockup project={project} />
            </div>
          </div>

          {/* Architectural Analysis (The Idea & Direction) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div className="space-y-3">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold">
                01 · The Creative Concept
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.theIdea}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold">
                02 · Visual Art Direction
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {project.visualDirection}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <h3 className="text-xs font-mono-tech uppercase tracking-widest text-white font-bold">
              03 · Engineered Capabilities & Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-4 bg-[#050507] border border-white/10 flex items-start gap-3">
                  <div className="w-5 h-5 border border-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white text-xs font-mono-tech">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-light">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Experience */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="text-xs uppercase tracking-widest text-white font-mono-tech font-bold">
              04 · Responsive Ergonomics
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-[#050507] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-white font-bold">
                  <Monitor className="w-4 h-4 text-white" />
                  <span>Desktop Architecture (1440px Baseline)</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {project.responsiveExperience.desktopNotes}
                </p>
              </div>

              <div className="p-5 bg-[#050507] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-white font-bold">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span>Mobile Touchscreen Ergonomics</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {project.responsiveExperience.mobileNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest font-mono-tech text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Return to Portfolio Index
            </button>

            <button
              onClick={() => {
                onClose();
                onStartProject(`Custom concept inspired by ${project.title}`);
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-200 text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Commission a Digital Experience Like This</span>
              <ArrowUpRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
