import React from 'react';
import { Hero3DCanvas } from './Hero3DCanvas';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  return (
    <section className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#050507] border-b border-white/10">
      {/* 3D Scene Layer: Glossy Black-Chrome & Liquid Silver Artifact */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Hero3DCanvas />
      </div>

      {/* Top Editorial Telemetry & Studio Marker */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono-tech tracking-[0.25em] text-slate-400 border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <span className="text-white font-semibold tracking-wider">LUVIRA DIGITAL</span>
            <span className="text-white/20">/</span>
            <span className="text-slate-300">ARCHITECTURAL ATELIER</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-400">
            <span>DISCIPLINES: BESPOKE WEB · HOTEL TECH · BRAND SYSTEMS</span>
            <span className="text-white/20">/</span>
            <a
              href="tel:+916206242488"
              className="text-slate-300 hover:text-white transition-colors pointer-events-auto"
            >
              +91 6206242488
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span className="tracking-widest">COMMISSIONS OPEN · 2026</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Editorial Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-12 lg:py-20 pointer-events-none">
        <div className="max-w-3xl space-y-7 pointer-events-auto">
          {/* Small Label */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>INDEPENDENT DIGITAL DESIGN STUDIO</span>
          </div>

          {/* Oversized Headline Layered with 3D Centerpiece */}
          <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-bold tracking-tight text-white font-display uppercase leading-[0.94] text-balance drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
            DIGITAL,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              REIMAGINED.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-300 font-body max-w-xl leading-relaxed font-light drop-shadow-md">
            We craft distinctive digital experiences, premium websites and identities for ambitious businesses.
          </p>

          {/* High-End Tactile Action Buttons (Zero Pill Discipline) */}
          <div className="pt-5 flex flex-wrap items-center gap-4">
            <button
              onClick={onStartProject}
              className="px-8 py-4 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 shadow-[0_0_35px_rgba(255,255,255,0.22)] cursor-pointer group active:scale-[0.98]"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#work"
              className="px-8 py-4 bg-[#0a0c10]/90 text-slate-200 hover:text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#121620] transition-all duration-200 border border-white/15 hover:border-white/40 flex items-center gap-3 backdrop-blur-md"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Technical Specifications Ribbon */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="border-t border-white/10 pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono-tech text-slate-400 pointer-events-auto">
          <div className="border-l border-white/15 pl-3">
            <span className="text-slate-500 block text-[9px] uppercase tracking-wider">CENTERPIECE</span>
            <span className="text-white font-medium">BLACK-CHROME ARTIFACT</span>
          </div>
          <div className="border-l border-white/15 pl-3">
            <span className="text-slate-500 block text-[9px] uppercase tracking-wider">CORE ENGINE</span>
            <span className="text-white font-medium">THREE.JS PBR & REACT</span>
          </div>
          <div className="border-l border-white/15 pl-3">
            <span className="text-slate-500 block text-[9px] uppercase tracking-wider">HOSPITALITY SYSTEMS</span>
            <span className="text-white font-medium">DIRECT BOOKING ENGINES</span>
          </div>
          <div className="border-l border-white/15 pl-3">
            <span className="text-slate-500 block text-[9px] uppercase tracking-wider">DIRECT DESK</span>
            <a
              href="mailto:rehan62062@gmail.com"
              className="text-slate-300 hover:text-white transition-colors block font-medium"
            >
              rehan62062@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
