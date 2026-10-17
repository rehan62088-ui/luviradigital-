import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight, Hotel, Dumbbell, Utensils, Building, Layers, Eye } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Concept Demonstrations', value: 'all' },
    { label: 'Hotel & Booking Engines', value: 'hotel' },
    { label: 'Wellness & Club Architecture', value: 'fitness' },
    { label: 'Culinary Gastronomy Monograph', value: 'culinary' },
    { label: 'Architectural Real Estate', value: 'editorial' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'hotel') return p.id === 'azure-haven';
    if (activeCategory === 'fitness') return p.id === 'aura-fitness';
    if (activeCategory === 'culinary') return p.id === 'noir-table';
    if (activeCategory === 'editorial') return p.id === 'vanta-realty' || p.id === 'nexa-academy';
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'azure-haven':
        return <Hotel className="w-4 h-4 text-white" />;
      case 'aura-fitness':
        return <Dumbbell className="w-4 h-4 text-slate-300" />;
      case 'noir-table':
        return <Utensils className="w-4 h-4 text-slate-200" />;
      case 'vanta-realty':
        return <Building className="w-4 h-4 text-white" />;
      default:
        return <Layers className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="work" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-14 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>02 · CURATED CONCEPT DEMONSTRATIONS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.05]">
            Selected Digital Architecture
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body font-light leading-relaxed">
            Exploratory project demonstrations designed by Luvira Digital. Every showcase illustrates custom visual art direction, responsive precision, and frictionless booking engineering.
          </p>

          {/* Category Filter Tabs (Zero Pills) */}
          <div className="pt-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 text-xs font-mono-tech border transition-all cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-white text-black font-semibold border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Concept Notice Banner */}
        <div className="p-3.5 bg-[#090b0f] border border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tech text-slate-400 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white" />
            <span className="text-white font-medium">STUDIO TRANSPARENCY NOTICE:</span>
            <span>These project dossiers represent curated concept demonstrations illustrating our design and technical capabilities.</span>
          </div>
          <span className="text-white font-medium whitespace-nowrap">CLICK ANY DOSSIER TO INSPECT</span>
        </div>

        {/* Cinematic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#090b0f] hover:bg-[#101319] border border-white/10 hover:border-white/35 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer shadow-xl relative overflow-hidden"
            >
              {/* Top Card Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-[#050507] border border-white/10 text-slate-300 group-hover:border-white/30 group-hover:text-white transition-colors">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech text-slate-500 font-bold tracking-wider">
                      [{project.number}] · {project.year}
                    </span>
                    <span className="text-xs text-slate-300 font-mono-tech block font-medium">
                      CONCEPT DEMONSTRATION
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono-tech text-slate-400 group-hover:text-white transition-colors">
                  <Eye className="w-3.5 h-3.5 text-slate-300" />
                  <span>Inspect Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest block">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-slate-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 font-body leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>

              {/* Key Architectural Features Chips */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider block">
                  ENGINEERED SPECIFICATIONS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech text-slate-300">
                  {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="p-2.5 bg-[#050507] border border-white/10 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-white" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover indicator line (Chrome metallic) */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
