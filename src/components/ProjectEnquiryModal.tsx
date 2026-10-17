import React, { useState, useEffect } from 'react';
import { ProjectEnquiryData } from '../types';
import { Check, Copy, Mail, MessageCircle, Phone, X, ShieldCheck } from 'lucide-react';

interface ProjectEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialPackage?: string;
}

const BUSINESS_TYPES = [
  'Local Business / Clinic / Store',
  'Hotel / Resort / Hospitality',
  'Restaurant / Cafe / Food',
  'Fitness / Wellness Club',
  'Education / Coaching Academy',
  'Real Estate & Architecture',
  'Creator / Personal Brand',
  'E-commerce & Retail Store',
  'Corporate / Professional Firm',
  'Other'
];

const SERVICES_NEEDED = [
  'Website Design & Development',
  'Business & Hotel Websites',
  'Booking & Enquiry Website Solutions',
  'Digital Marketing',
  'Search Engine Optimisation (SEO)',
  'Graphic Design & Branding',
  'Video Editing & Content Creation',
  'Custom T-Shirt Printing & Design',
  '3D Signboards & Signage',
  'Complete Package'
];

const PACKAGES_OPTIONS = [
  'Basic Package (₹10,000 one-time)',
  'Professional Package (₹20,000 one-time)',
  'Premium Package (₹30,000 one-time)',
  'Custom Scoped Agreement'
];

const BUDGET_RANGES = [
  '₹10,000 (Basic Package)',
  '₹20,000 (Professional Package)',
  '₹30,000 (Premium Package)',
  '₹30,000+ (Custom Scope)',
  'Flexible / Not Sure'
];

const TIMELINES = [
  'ASAP (Immediate Start)',
  '1–2 Weeks',
  '2–4 Weeks',
  'Flexible'
];

export const ProjectEnquiryModal: React.FC<ProjectEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialPackage
}) => {
  const [formData, setFormData] = useState<ProjectEnquiryData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: 'Local Business / Clinic / Store',
    serviceNeeded: initialService || 'Website Design & Development',
    selectedPackage: initialPackage || 'Professional Package (₹20,000 one-time)',
    budget: initialPackage?.includes('10,000')
      ? '₹10,000 (Basic Package)'
      : initialPackage?.includes('30,000')
      ? '₹30,000 (Premium Package)'
      : '₹20,000 (Professional Package)',
    timeline: '2–4 Weeks',
    details: '',
    referenceUrl: ''
  });

  const [isReadyForDispatch, setIsReadyForDispatch] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceNeeded: initialService }));
    }
    if (initialPackage) {
      setFormData(prev => ({
        ...prev,
        selectedPackage: initialPackage,
        budget: initialPackage.includes('10,000')
          ? '₹10,000 (Basic Package)'
          : initialPackage.includes('30,000')
          ? '₹30,000 (Premium Package)'
          : '₹20,000 (Professional Package)'
      }));
    }
  }, [initialService, initialPackage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) errs.email = 'Please provide an email address.';
    if (!formData.businessName.trim()) errs.businessName = 'Please specify your business or venture.';
    if (!formData.details.trim()) errs.details = 'Please describe your project scope.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleReviewAndSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsReadyForDispatch(true);
  };

  const getBriefSummaryText = () => {
    return `PROJECT COMMISSION BRIEF — LUVIRA DIGITAL
========================================
Client Representative: ${formData.name}
Email Address: ${formData.email}
Phone / WhatsApp: ${formData.phone || 'Not provided'}
Business / Venture: ${formData.businessName}
Industry Classification: ${formData.businessType}
Primary Discipline: ${formData.serviceNeeded}
Investment Specification: ${formData.selectedPackage || 'Custom Scoped'}
Budget Allocation: ${formData.budget}
Production Window: ${formData.timeline}
Reference Material: ${formData.referenceUrl || 'None'}

PROJECT SPECIFICATION & SCOPE:
${formData.details}
========================================
Direct Studio Desk: rehan62062@gmail.com | WhatsApp: +91 6206242488`;
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getBriefSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Project Commission: ${formData.businessName} - ${formData.serviceNeeded}`);
    const body = encodeURIComponent(getBriefSummaryText());
    window.location.href = `mailto:rehan62062@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(getBriefSummaryText());
    window.open(`https://wa.me/916206242488?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/92 backdrop-blur-md flex justify-center p-3 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#090b0f] border border-white/15 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#090b0f]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <div>
              <span className="text-xs font-mono-tech uppercase tracking-widest text-slate-400 block">
                COMMISSION DOSSIER · LUVIRA DIGITAL
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white font-display">
                Initiate Project Specification
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 border border-white/15 flex items-center justify-center text-slate-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {!isReadyForDispatch ? (
            <div className="space-y-6">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <p className="text-xs sm:text-sm text-slate-300 font-light">
                  Complete the technical brief below. This will format a structured dossier ready to transmit via email (<span className="text-white">rehan62062@gmail.com</span>) or WhatsApp (<span className="text-white">+91 6206242488</span>).
                </p>
              </div>

              <form onSubmit={handleReviewAndSend} className="space-y-6">
                {/* Contact Basics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                      Your Full Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Julian Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#050507] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.name && <p className="text-xs text-slate-400 font-mono-tech">{errors.name}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                      Email Address <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#050507] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors"
                    />
                    {errors.email && <p className="text-xs text-slate-400 font-mono-tech">{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#050507] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Business / Hotel / Brand Entity <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grand Vista Resort or Horizon Medical Clinic"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#050507] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors"
                  />
                  {errors.businessName && <p className="text-xs text-slate-400 font-mono-tech">{errors.businessName}</p>}
                </div>

                {/* Business Type */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Sector Classification
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUSINESS_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, businessType: type })}
                        className={`px-3 py-1.5 text-xs font-mono-tech border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.businessType === type
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#050507] text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service Needed */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Target Discipline
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES_NEEDED.map((svc) => (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => setFormData({ ...formData, serviceNeeded: svc })}
                        className={`px-3 py-1.5 text-xs font-mono-tech border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.serviceNeeded === svc
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#050507] text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Package Tier Selection */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Investment Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PACKAGES_OPTIONS.map((pkg) => (
                      <button
                        type="button"
                        key={pkg}
                        onClick={() => setFormData({ ...formData, selectedPackage: pkg })}
                        className={`px-3 py-2 text-xs font-mono-tech border text-left transition-colors cursor-pointer ${
                          formData.selectedPackage === pkg
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#050507] text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {pkg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Budget Allocation
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_RANGES.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 text-xs font-mono-tech border transition-colors whitespace-nowrap cursor-pointer ${
                          formData.budget === b
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#050507] text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Desired Timeline */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Production Timeline
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIMELINES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setFormData({ ...formData, timeline: t })}
                        className={`px-3 py-2 text-xs font-mono-tech border text-center transition-colors cursor-pointer ${
                          formData.timeline === t
                            ? 'bg-white text-black border-white font-bold'
                            : 'bg-[#050507] text-slate-400 border-white/10 hover:text-white hover:border-white/30'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-300">
                    Project Requirements & Brief <span className="text-white">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your commercial objectives, desired brand position, key functional features (e.g. reservation engine, dynamic catalog, custom animations), and target launch milestone..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-[#050507] border border-white/15 p-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors leading-relaxed"
                  />
                  {errors.details && <p className="text-xs text-slate-400 font-mono-tech">{errors.details}</p>}
                </div>

                {/* Reference URL */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono-tech uppercase tracking-wider text-slate-400">
                    Reference Website or Link <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    value={formData.referenceUrl}
                    onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                    className="w-full bg-[#050507] border border-white/15 px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 font-mono-tech">
                    Direct studio response within 24 hours
                  </span>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-200 text-black font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Format & Review Brief ↗</span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Dispatch Ready View */
            <div className="py-6 space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Commission Brief Formatted
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-light">
                    Select your preferred transmission protocol to dispatch this brief directly to Luvira Digital.
                  </p>
                </div>
              </div>

              {/* Formatted Brief Preview */}
              <div className="p-5 bg-[#050507] border border-white/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tech text-slate-400">
                  <span>Structured Transmission Dossier</span>
                  <span>Recipient: rehan62062@gmail.com</span>
                </div>
                <div className="text-xs font-mono-tech text-slate-300 whitespace-pre-wrap bg-[#090b0f] p-4 border border-white/10 max-h-56 overflow-y-auto leading-relaxed">
                  {getBriefSummaryText()}
                </div>
              </div>

              {/* Functional Transmission Triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleOpenWhatsApp}
                  className="py-3 px-4 bg-[#11141a] hover:bg-[#181c24] text-white border border-white/20 text-xs font-mono-tech font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-slate-300" />
                  <span>Transmit via WhatsApp (+91 6206242488)</span>
                </button>

                <button
                  onClick={handleOpenMailto}
                  className="py-3 px-4 bg-white text-black hover:bg-slate-200 text-xs font-mono-tech font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Mail className="w-4 h-4 text-black" />
                  <span>Open via Mail (rehan62062@gmail.com)</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={handleCopyBrief}
                  className="px-4 py-2 bg-white/5 text-white text-xs font-mono-tech hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/10 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Dossier Copied to Clipboard!' : 'Copy Formatted Text'}</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsReadyForDispatch(false)}
                    className="text-xs text-slate-400 hover:text-white font-mono-tech cursor-pointer"
                  >
                    ← Edit Specifications
                  </button>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-mono-tech uppercase bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              </div>

              {/* Direct Transparency Notice */}
              <div className="text-[11px] font-mono-tech text-slate-500 border-t border-white/10 pt-3">
                * Note: Direct client transmission ensures immediate receipt without third-party email tracking or unnecessary data storage.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
