import React from 'react';
import { Mail, ArrowUpRight, MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  onStartProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartProject }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-20 relative bg-[#050507] text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <h3 className="text-xl font-bold tracking-tight text-white font-display">
                LUVIRA DIGITAL
              </h3>
            </div>
            <p className="text-sm text-slate-300 font-body max-w-sm leading-relaxed font-light">
              We craft distinctive digital experiences, premium websites and identities for ambitious businesses.
            </p>
            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono-tech">
              <a
                href="mailto:rehan62062@gmail.com"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>rehan62062@gmail.com</span>
              </a>

              <a
                href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
                <span>WhatsApp: +91 6206242488</span>
              </a>

              <a
                href="tel:+916206242488"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Direct Phone: +91 6206242488</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-xs font-mono-tech">
            <div className="space-y-3">
              <span className="text-white uppercase tracking-widest block font-semibold">Capabilities</span>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Hotel & Booking Systems</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Lead Engines</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Search Engine (SEO)</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">3D Signboards</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-white uppercase tracking-widest block font-semibold">Navigation</span>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#work" className="hover:text-white transition-colors">Selected Work</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Investment Packages</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Methodology</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Direct Desk</a></li>
              </ul>
            </div>
          </div>

          {/* Action Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-mono-tech text-white uppercase tracking-widest block font-semibold">
              Commissions Desk
            </span>
            <p className="text-xs text-slate-400 font-body leading-relaxed font-light">
              Accepting commissions for bespoke web engineering, hotel booking architectures, and full brand transformations.
            </p>
            <button
              onClick={onStartProject}
              className="w-full py-3 px-4 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-slate-500">
          <div>
            © {new Date().getFullYear()} LUVIRA DIGITAL. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>DIRECT ENGAGEMENT · REHAN</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
