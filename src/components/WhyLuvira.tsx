import React from 'react';
import { Compass, Target, Zap, ShieldCheck } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <Compass className="w-5 h-5 text-white" />,
    number: '01',
    title: 'Purposeful Digital Architecture',
    copy: 'Every visual layout, responsive breakpoint, and 3D architectural element is engineered with clear intent. We eliminate arbitrary decorative bloat in favor of undeniable credibility and brand prestige.'
  },
  {
    icon: <Target className="w-5 h-5 text-slate-200" />,
    number: '02',
    title: 'Conversion & Inbound Focused',
    copy: 'A website should make your services effortless to understand, trust, and contact. We design frictionless booking and inquiry pathways with direct WhatsApp and email lead dispatch.'
  },
  {
    icon: <Zap className="w-5 h-5 text-white" />,
    number: '03',
    title: 'Full-Spectrum Brand Execution',
    copy: 'From high-speed React web applications and hotel reservation systems to physical 3D architectural signboards and custom merchandise, your brand identity remains unified everywhere.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-slate-200" />,
    number: '04',
    title: 'Honest Delivery & Fixed Pricing',
    copy: 'Transparent one-time packages (₹10,000 / ₹20,000 / ₹30,000) with defined deliverable scopes and post-launch support. No surprise retainer bills, no hidden markups, and direct access to senior leadership.'
  }
];

export const WhyLuvira: React.FC = () => {
  return (
    <section id="why-us" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] uppercase tracking-[0.22em] font-mono-tech text-slate-300">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>04 · STUDIO EDGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display uppercase leading-[1.08]">
              Why Businesses Choose Luvira Digital
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed max-w-sm font-light">
              We reject cookie-cutter templates and disposable design. Every digital solution is tailored to move your business forward.
            </p>
          </div>

          {/* Right 4 Editorial Points Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ADVANTAGES.map((adv) => (
              <div
                key={adv.number}
                className="p-8 bg-[#090b0f] border border-white/10 hover:border-white/30 transition-all duration-300 space-y-4 shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="p-2.5 bg-[#050507] border border-white/10">
                    {adv.icon}
                  </div>
                  <span className="text-2xl font-mono-tech font-bold text-white">
                    {adv.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-display text-white">
                  {adv.title}
                </h3>
                <p className="text-sm text-slate-300 font-body leading-relaxed font-light">
                  {adv.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
