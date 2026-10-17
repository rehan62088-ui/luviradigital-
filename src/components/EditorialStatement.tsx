import React from 'react';

export const EditorialStatement: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative border-b border-white/10 overflow-hidden bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] uppercase tracking-[0.22em] font-mono-tech text-slate-300 sticky top-28">
              <span className="w-1.5 h-1.5 bg-white" />
              <span>00 · STUDIO MANIFESTO</span>
            </div>
          </div>

          {/* Editorial Big Typography & Supporting Text */}
          <div className="lg:col-span-9 space-y-10">
            <h2 className="text-3xl sm:text-5xl lg:text-[4.2rem] font-bold tracking-tight text-white font-display uppercase leading-[1.02] text-balance">
              GOOD DESIGN GETS ATTENTION.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 block sm:inline">
                GREAT DIGITAL EXPERIENCES KEEP IT.
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-white/10">
              <div className="md:col-span-8">
                <p className="text-lg sm:text-xl text-slate-300 font-body leading-relaxed font-light">
                  Luvira Digital unites bespoke web engineering, luxury brand identity, high-conversion hotel booking architectures, 3D spatial signboards, and custom merchandise to engineer undeniable market separation.
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end border-l border-white/15 pl-6">
                <div className="text-xs font-mono-tech text-slate-400 space-y-2.5">
                  <div className="text-white font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-white" />
                    <span>FULL-SPECTRUM ATELIER</span>
                  </div>
                  <div>STANDARDS: 100% BESPOKE ARCHITECTURE</div>
                  <div>DIRECT INQUIRY: rehan62062@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
