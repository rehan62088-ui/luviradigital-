import React from 'react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-10">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] uppercase tracking-[0.22em] font-mono-tech text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>07 · STUDIO FOUNDATION & ETHICS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.02] text-balance">
            Independent Studio.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Uncompromising Standards.
            </span>
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-slate-300 font-body leading-relaxed max-w-3xl font-light">
            <p>
              Luvira Digital is an independent creative technology and web studio focused on engineering bespoke websites, direct booking systems, brand identities, physical 3D architectural signage, and custom apparel for ambitious businesses and hospitality ventures.
            </p>
            <p className="text-slate-400">
              We reject arbitrary decorative clutter in favor of surgical visual clarity, structural depth, and intentional hierarchy. We work directly with founders and decision-makers to build experiences that stand apart permanently.
            </p>
          </div>

          {/* Genuine Studio Principles & Contact Desk */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono-tech">
            <div className="space-y-1.5 border-l border-white/15 pl-4">
              <span className="text-slate-500 block uppercase">PRIMARY FOCUS</span>
              <span className="text-white font-medium">Bespoke Digital & Physical Systems</span>
            </div>
            <div className="space-y-1.5 border-l border-white/15 pl-4">
              <span className="text-slate-500 block uppercase">DIRECT ENGAGEMENT</span>
              <span className="text-white font-medium">Direct Collaboration with Studio Lead</span>
            </div>
            <div className="space-y-1.5 border-l border-white/15 pl-4">
              <span className="text-slate-500 block uppercase">COMMUNICATION CHANNELS</span>
              <div className="flex flex-col space-y-2 pt-1">
                <a
                  href="mailto:rehan62062@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>rehan62062@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                  <span>WhatsApp: +91 6206242488</span>
                </a>
                <a
                  href="tel:+916206242488"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Direct: +91 6206242488</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
