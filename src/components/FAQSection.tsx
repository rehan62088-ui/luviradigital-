import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, MessageCircle, Mail } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Pricing', 'Services', 'Process', 'Support'];

  const filteredItems = selectedCategory === 'All'
    ? FAQ_ITEMS
    : FAQ_ITEMS.filter(item => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>06 · DIRECT ANSWERS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.05]">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body font-light leading-relaxed">
            Direct, transparent specifications regarding our investment scopes, turnaround intervals, deliverables, and technical support.
          </p>

          {/* Filter buttons (Zero Pills) */}
          <div className="pt-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-mono-tech border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-semibold border-white shadow-md'
                    : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white hover:border-white/25'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0e1117] border-white/30 shadow-md'
                    : 'bg-[#090b0f] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono-tech text-slate-500 font-bold shrink-0">
                      [{item.category.toUpperCase()}]
                    </span>
                    <span className="text-base sm:text-lg font-medium text-white font-display">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 font-body leading-relaxed border-t border-white/10 font-light">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact fallback prompt */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider">
            HAVE A QUESTION NOT LISTED HERE?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:rehan62062@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#090b0f] hover:bg-[#11141a] border border-white/15 text-white text-xs font-mono-tech transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span>Email: rehan62062@gmail.com</span>
            </a>
            <a
              href="https://wa.me/916206242488?text=Hi%20Luvira%20Digital,%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#090b0f] hover:bg-[#11141a] border border-white/15 text-slate-200 hover:text-white text-xs font-mono-tech transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-slate-300" />
              <span>WhatsApp: +91 6206242488</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
