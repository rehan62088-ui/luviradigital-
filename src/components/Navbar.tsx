import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050507]/92 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.9)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark with Monochromatic Metallic Dot */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white font-display hover:opacity-90 transition-opacity flex items-center gap-2.5"
          >
            <span className="w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <span className="tracking-widest">LUVIRA DIGITAL</span>
          </a>

          {/* Center: Architectural Precision Dock (Zero Pills) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-[#090b0f]/90 border border-white/10 backdrop-blur-xl text-xs font-mono-tech tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Direct Channels + Primary CTA */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/[0.03] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-slate-400" />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+916206242488"
              aria-label="Call Luvira Digital"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech text-slate-300 hover:text-white border border-white/15 hover:border-white/40 bg-white/[0.03] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Call</span>
            </a>

            <button
              onClick={onStartProject}
              className="px-4 py-2 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.18)]"
            >
              <span>Start Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white border border-white/10 bg-white/[0.03] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Monochromatic Architectural Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#050507]/98 backdrop-blur-2xl pt-24 px-6 pb-8 flex flex-col justify-between border-b border-white/10">
          <div className="space-y-6">
            <div className="text-[10px] font-mono-tech uppercase tracking-[0.25em] text-slate-500 border-b border-white/10 pb-2">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold font-display uppercase tracking-tight text-white hover:text-slate-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech">
              <a
                href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%E2%80%99m%20interested%20in%20discussing%20a%20website%20or%20digital%20service%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="p-3 border border-white/15 bg-white/[0.02] text-slate-200 text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-slate-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:+916206242488"
                className="p-3 border border-white/15 bg-white/[0.02] text-slate-200 text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>Call Us</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-4 bg-white text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
