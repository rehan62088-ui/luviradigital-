import React from 'react';

const STEPS = [
  {
    number: '01',
    phase: 'DISCOVER',
    description: 'Deconstruct the business, audience, and commercial objectives.',
    detail: 'We evaluate your positioning, audit existing customer touchpoints, and define the exact technical and aesthetic scope required.'
  },
  {
    number: '02',
    phase: 'DESIGN',
    description: 'Engineer bespoke typography, spatial rhythm, and interaction.',
    detail: 'We craft unique editorial layouts, real-time 3D environments, high-contrast typography, and prototype interactions with zero generic templates.'
  },
  {
    number: '03',
    phase: 'BUILD',
    description: 'Develop the responsive architecture and booking engines.',
    detail: 'Engineered with clean React/Vite architecture, sub-second load times, fluid mobile viewport adaptation, and robust form lead routing.'
  },
  {
    number: '04',
    phase: 'LAUNCH',
    description: 'Rigorous cross-device audit, production deploy, and handoff.',
    detail: 'Tested across devices, verified for Core Web Vitals and SEO schema, followed by complete master asset delivery and dedicated post-launch support.'
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>05 · WORKFLOW METHODOLOGY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.05]">
            From Idea to Production Launch
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body font-light leading-relaxed">
            A deliberate, stage-gated process engineered for precision, momentum, and complete transparency.
          </p>
        </div>

        {/* 4-step Timeline Grid (Zero Pill Architectural Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-8 bg-[#090b0f] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Step Index & Title */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-3xl font-mono-tech font-bold text-white">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400">
                    PHASE {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white tracking-wide">
                  {step.phase}
                </h3>

                <p className="text-xs font-mono-tech text-slate-300 uppercase leading-relaxed">
                  {step.description}
                </p>

                <p className="text-xs text-slate-400 font-body leading-relaxed pt-2 font-light">
                  {step.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                STAGE GATE APPROVAL REQUIRED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
