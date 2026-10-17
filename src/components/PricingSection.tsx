import React from 'react';
import { PRICING_PACKAGES } from '../data/pricing';
import { Check, ArrowUpRight, MessageCircle, ShieldCheck } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>03 · FIXED INVESTMENT SCHEDULE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.05]">
            Transparent Investment Packages
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body font-light leading-relaxed">
            Confirmed one-time pricing with defined deliverable scopes. No hidden retainers, unexpected cost inflation, or unrealistic ranking promises.
          </p>
        </div>

        {/* 3 Pricing Package Columns (Zero Pill Architectural Monoliths) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => {
            const isHighlight = pkg.highlighted;
            const whatsappMessage = encodeURIComponent(
              `Hi Luvira Digital, I'm interested in discussing the ${pkg.name} (${pkg.price} one-time) for my business.`
            );

            return (
              <div
                key={pkg.id}
                className={`relative p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? 'bg-[#11141a] border-2 border-white/40 shadow-[0_20px_60px_rgba(255,255,255,0.06)] lg:-translate-y-2'
                    : 'bg-[#090b0f] border border-white/10 hover:border-white/25 shadow-lg'
                }`}
              >
                {/* Highlight Badge */}
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-white text-black text-[10px] font-mono-tech uppercase font-bold tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center gap-1.5 whitespace-nowrap">
                    <ShieldCheck className="w-3 h-3 text-black" />
                    <span>MOST SELECTED COMMISSIONS</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Tier Title & Price */}
                  <div className="space-y-2 border-b border-white/10 pb-6">
                    <span className="text-xs font-mono-tech uppercase tracking-wider text-slate-400 block">
                      {pkg.idealFor}
                    </span>
                    <h3 className="text-2xl font-bold font-display text-white">
                      {pkg.name}
                    </h3>
                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-mono-tech font-bold text-white tracking-tight">
                        {pkg.price}
                      </span>
                      <span className="text-xs font-mono-tech text-slate-400 uppercase">
                        {pkg.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-body pt-1 leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Turnaround Time */}
                  <div className="p-3 bg-[#050507] border border-white/10 flex items-center justify-between text-xs font-mono-tech">
                    <span className="text-slate-400">ESTIMATED PRODUCTION:</span>
                    <span className="text-white font-semibold">{pkg.turnaround}</span>
                  </div>

                  {/* Confirmed Deliverables List */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-slate-400 font-semibold block">
                      Confirmed Deliverable Scope:
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 shrink-0 mt-0.5 text-white" />
                          <span className={feature.startsWith('*') ? 'text-slate-400 font-mono-tech text-[11px]' : ''}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons (Zero Pill Precision) */}
                <div className="pt-8 space-y-3">
                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className={`w-full py-3.5 px-4 text-xs font-mono-tech font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                      isHighlight
                        ? 'bg-white hover:bg-slate-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                        : 'bg-white/10 hover:bg-white text-white hover:text-black border border-white/15'
                    }`}
                  >
                    <span>Commission {pkg.name}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/916206242488?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-3 text-[11px] font-mono-tech text-slate-300 hover:text-white border border-white/10 hover:border-white/30 bg-[#050507] flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Discuss via WhatsApp (+91 6206242488)</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Clarification Notice */}
        <div className="mt-12 p-4 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>* Direct Senior Engagement: All web engineering and design is directed directly by studio lead Rehan.</span>
          <span className="text-white">EMAIL: rehan62062@gmail.com · WHATSAPP: +91 6206242488</span>
        </div>
      </div>
    </section>
  );
};
