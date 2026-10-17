import React from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';

interface ContactSectionProps {
  onStartProject: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onStartProject }) => {
  return (
    <section id="contact" className="py-32 sm:py-44 relative overflow-hidden border-b border-white/10 bg-[#050507]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 z-10">
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] uppercase tracking-[0.22em] font-mono-tech text-slate-300">
          <span className="w-1.5 h-1.5 bg-white" />
          <span>08 · DIRECT INQUIRIES & COMMISSIONS</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display text-balance max-w-4xl mx-auto uppercase leading-[0.98]">
          Have an idea?<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            Let’s build something.
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 font-body max-w-xl mx-auto font-light leading-relaxed">
          Websites, branding and digital experiences crafted to help ambitious businesses stand out. Start with a direct conversation.
        </p>

        {/* Display email, WhatsApp and Phone with zero-pill architectural styling */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:rehan62062@gmail.com"
            className="inline-flex items-center gap-3 px-6 py-4 bg-[#090b0f] hover:bg-[#11141a] border border-white/15 hover:border-white/40 text-white font-mono-tech text-sm sm:text-base transition-all group shadow-lg"
          >
            <Mail className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
            <span className="tracking-wide">rehan62062@gmail.com</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#090b0f] hover:bg-[#11141a] border border-white/15 hover:border-white/40 text-slate-200 hover:text-white font-mono-tech text-sm sm:text-base transition-all group shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
            <span>WhatsApp +91 6206242488</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-all" />
          </a>

          <a
            href="tel:+916206242488"
            className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#090b0f] hover:bg-[#11141a] border border-white/15 hover:border-white/40 text-slate-300 hover:text-white font-mono-tech text-sm sm:text-base transition-all group shadow-lg"
          >
            <Phone className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            <span>Call: +91 6206242488</span>
          </a>
        </div>

        {/* Primary Project Enquiry Trigger */}
        <div className="pt-2">
          <button
            onClick={onStartProject}
            className="px-8 py-4 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 inline-flex items-center gap-2.5 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            <span>Open Project Inquiry Form</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};
