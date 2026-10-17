import React, { useState } from 'react';
import { SERVICES } from '../data/services';
import { 
  ArrowUpRight, Check, Monitor, Smartphone, Tablet, Hotel, 
  CalendarCheck, TrendingUp, Search, Palette, Video, Shirt, Building2, 
  Zap
} from 'lucide-react';

interface ServicesProps {
  onStartProject: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onStartProject }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('web-design-dev');
  
  // Interactive states for bespoke service previews
  const [webViewport, setWebViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [hotelRoom, setHotelRoom] = useState<'ocean' | 'cliff' | 'sanctuary'>('ocean');
  const [bookingGuests, setBookingGuests] = useState<number>(2);
  const [signboardMode, setSignboardMode] = useState<'day' | 'night'>('night');
  const [videoLut, setVideoLut] = useState<'raw' | 'graded'>('graded');
  const [apparelColor, setApparelColor] = useState<'black' | 'charcoal' | 'titanium'>('black');

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'web-design-dev':
        return <Monitor className="w-4 h-4 text-white" />;
      case 'hotel-websites-booking':
        return <Hotel className="w-4 h-4 text-white" />;
      case 'booking-enquiry-solutions':
        return <CalendarCheck className="w-4 h-4 text-white" />;
      case 'digital-marketing':
        return <TrendingUp className="w-4 h-4 text-slate-300" />;
      case 'seo':
        return <Search className="w-4 h-4 text-white" />;
      case 'graphic-design-branding':
        return <Palette className="w-4 h-4 text-slate-200" />;
      case 'video-editing':
        return <Video className="w-4 h-4 text-white" />;
      case 'custom-tshirt-printing':
        return <Shirt className="w-4 h-4 text-slate-300" />;
      case '3d-signboards':
        return <Building2 className="w-4 h-4 text-slate-100" />;
      default:
        return <Zap className="w-4 h-4 text-white" />;
    }
  };

  // Bespoke editorial layout preview for each of the 9 disciplines
  const renderBespokeServiceLayout = () => {
    switch (activeService.id) {
      case 'web-design-dev':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">RESPONSIVE VIEWPORT ARCHITECT</span>
              </div>
              {/* Device switcher */}
              <div className="flex items-center gap-1 bg-[#050507] p-1 border border-white/15">
                <button
                  onClick={() => setWebViewport('desktop')}
                  className={`px-2.5 py-1 text-[11px] font-mono-tech transition-colors flex items-center gap-1 cursor-pointer ${
                    webViewport === 'desktop' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3 h-3" />
                  <span>1440px</span>
                </button>
                <button
                  onClick={() => setWebViewport('tablet')}
                  className={`px-2.5 py-1 text-[11px] font-mono-tech transition-colors flex items-center gap-1 cursor-pointer ${
                    webViewport === 'tablet' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Tablet className="w-3 h-3" />
                  <span>768px</span>
                </button>
                <button
                  onClick={() => setWebViewport('mobile')}
                  className={`px-2.5 py-1 text-[11px] font-mono-tech transition-colors flex items-center gap-1 cursor-pointer ${
                    webViewport === 'mobile' ? 'bg-white text-black font-semibold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3 h-3" />
                  <span>375px</span>
                </button>
              </div>
            </div>

            {/* Viewport Simulation Frame */}
            <div className="bg-[#050507] border border-white/15 p-4 sm:p-5 transition-all duration-300">
              <div className={`mx-auto transition-all duration-300 ${
                webViewport === 'desktop' ? 'w-full' : webViewport === 'tablet' ? 'max-w-[480px]' : 'max-w-[280px]'
              }`}>
                {/* Browser Bezel */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px] font-mono-tech text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-neutral-700" />
                    <span className="w-1.5 h-1.5 bg-neutral-700" />
                    <span className="w-1.5 h-1.5 bg-neutral-700" />
                  </div>
                  <span className="text-slate-400">client-experience.com</span>
                  <span className="text-white font-mono-tech">99/100 CWV</span>
                </div>

                {/* Simulated Web Application Layout */}
                <div className="py-4 space-y-3">
                  <div className="h-10 bg-[#0d0f14] border border-white/15 flex items-center justify-between px-3">
                    <span className="text-xs font-bold text-white tracking-wider font-display">LUVIRA MONOLITH</span>
                    <span className="text-[10px] text-slate-300 font-mono-tech">SPA ENGINE</span>
                  </div>
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8 bg-[#090b0f] border border-white/10 p-3 space-y-2">
                      <div className="h-3 w-3/4 bg-white/20" />
                      <div className="h-2 w-1/2 bg-white/10" />
                      <div className="pt-2 flex gap-2">
                        <span className="text-[9px] font-mono-tech text-white bg-white/10 px-2 py-0.5 border border-white/15">TypeScript</span>
                        <span className="text-[9px] font-mono-tech text-slate-300 bg-white/5 px-2 py-0.5 border border-white/10">Tailwind</span>
                      </div>
                    </div>
                    <div className="col-span-4 bg-[#11141a] border border-white/10 p-3 flex flex-col justify-between">
                      <span className="text-[9px] font-mono-tech text-slate-400">FPS RENDER</span>
                      <span className="text-lg font-bold font-mono-tech text-white">60.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-1 text-[11px] font-mono-tech">
              <div className="p-3 bg-[#090b0f] border border-white/10">
                <span className="text-slate-500 block text-[9px]">ARCHITECTURE</span>
                <span className="text-white font-medium">Bespoke SPA / SSR</span>
              </div>
              <div className="p-3 bg-[#090b0f] border border-white/10">
                <span className="text-slate-500 block text-[9px]">RESPONSIVE FIDELITY</span>
                <span className="text-slate-200 font-medium">Fluid Breakpoints</span>
              </div>
              <div className="p-3 bg-[#090b0f] border border-white/10">
                <span className="text-slate-500 block text-[9px]">LOAD TIME</span>
                <span className="text-white font-medium">&lt; 0.8s Baseline</span>
              </div>
            </div>
          </div>
        );

      case 'hotel-websites-booking':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">HOSPITALITY SUITE MONOGRAPH</span>
              </div>
              <span className="text-slate-300">ZERO OTA COMMISSION ROUTE</span>
            </div>

            {/* Room Selector */}
            <div className="flex gap-2 text-xs font-mono-tech">
              <button
                onClick={() => setHotelRoom('ocean')}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  hotelRoom === 'ocean' ? 'bg-white text-black font-semibold border-white' : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Ocean Penthouse
              </button>
              <button
                onClick={() => setHotelRoom('cliff')}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  hotelRoom === 'cliff' ? 'bg-white text-black font-semibold border-white' : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Cliffside Infinity Villa
              </button>
              <button
                onClick={() => setHotelRoom('sanctuary')}
                className={`px-3 py-1.5 border transition-colors cursor-pointer ${
                  hotelRoom === 'sanctuary' ? 'bg-white text-black font-semibold border-white' : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Garden Sanctuary
              </button>
            </div>

            {/* Hotel Presentation Specimen */}
            <div className="bg-[#050507] border border-white/15 p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider block">DIRECT GUEST SUITE</span>
                  <h4 className="text-xl font-display font-bold text-white">
                    {hotelRoom === 'ocean' ? 'The Ocean Penthouse Suite' : hotelRoom === 'cliff' ? 'Cliffside Infinity Villa' : 'Garden Sanctuary Villa'}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 font-mono-tech line-through mr-2">OTA Rate: ₹28,500</span>
                  <span className="text-base font-bold font-mono-tech text-white">Direct: ₹23,500/night</span>
                </div>
              </div>

              {/* Direct Booking Flow Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tech">
                <div className="p-3 bg-[#090b0f] border border-white/10">
                  <span className="text-slate-500 block text-[9px]">DATES</span>
                  <span className="text-white">Oct 24 – Oct 29, 2026</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/10">
                  <span className="text-slate-500 block text-[9px]">OCCUPANCY</span>
                  <span className="text-white">2 Adults · King Bed</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-slate-400 block text-[9px]">WHATSAPP CONCIERGE</span>
                    <span className="text-white font-medium">+91 6206242488</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 flex items-center justify-between text-xs font-mono-tech text-slate-400">
              <span>ESTIMATED ANNUAL OTA COMMISSION SAVINGS:</span>
              <span className="text-white font-bold font-mono-tech">18% – 25% PER BOOKING</span>
            </div>
          </div>
        );

      case 'booking-enquiry-solutions':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">STRUCTURED LEAD & RESERVATION ENGINE</span>
              </div>
              <span className="text-slate-300">DIRECT ROUTING ACTIVE</span>
            </div>

            {/* Interactive Lead Intake Simulator */}
            <div className="bg-[#050507] border border-white/15 p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
                <div className="space-y-1">
                  <label className="text-slate-400 text-[10px]">SELECT PARTY SIZE</label>
                  <div className="flex gap-2">
                    {[1, 2, 4, 8].map(count => (
                      <button
                        key={count}
                        onClick={() => setBookingGuests(count)}
                        className={`flex-1 py-1.5 border text-center transition-colors cursor-pointer ${
                          bookingGuests === count ? 'bg-white text-black font-bold border-white' : 'bg-[#090b0f] text-slate-400 border-white/10 hover:text-white'
                        }`}
                      >
                        {count} Guests
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-400 text-[10px]">TIME WINDOW</label>
                  <div className="p-1.5 bg-[#090b0f] border border-white/10 text-white flex justify-between items-center">
                    <span>19:30 · Dinner Service</span>
                    <span className="text-slate-300 text-[10px]">Confirmed Slot</span>
                  </div>
                </div>
              </div>

              {/* Formatted Payload Dispatch Box */}
              <div className="p-4 bg-[#090b0f] border border-white/10 space-y-2 font-mono-tech text-xs">
                <div className="flex items-center justify-between text-slate-400 text-[10px]">
                  <span>AUTOMATED DISPATCH PAYLOAD</span>
                  <span className="text-white font-medium">Direct Desk: +91 6206242488</span>
                </div>
                <div className="bg-[#050507] p-3 border border-white/10 text-slate-300 text-[11px] leading-relaxed">
                  "Hi Luvira Digital, customer requested reservation for {bookingGuests} guests on Friday 19:30. Inbound contact: rehan62062@gmail.com"
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono-tech">
              <div className="p-3 bg-[#090b0f] border border-white/10">
                <span className="text-slate-500 block text-[9px]">DISPATCH LATENCY</span>
                <span className="text-white font-medium">&lt; 100ms Instant Pre-fill</span>
              </div>
              <div className="p-3 bg-[#090b0f] border border-white/10">
                <span className="text-slate-500 block text-[9px]">LEAD LOSS PREVENTION</span>
                <span className="text-white font-medium">Zero Drop-off Gateways</span>
              </div>
            </div>
          </div>
        );

      case 'digital-marketing':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">TARGETED ACQUISITION MATRIX</span>
              </div>
              <span className="text-slate-300">DATA-BACKED POSITIONING</span>
            </div>

            <div className="bg-[#050507] border border-white/15 p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tech">
                <div className="p-3 bg-[#090b0f] border border-white/10">
                  <span className="text-slate-500 block text-[9px]">SEARCH INTENT</span>
                  <span className="text-white font-medium">High Commercial Value</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/10">
                  <span className="text-slate-500 block text-[9px]">LOCAL TARGETING</span>
                  <span className="text-slate-200 font-medium">25km Geographic Radius</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/10">
                  <span className="text-slate-500 block text-[9px]">TRACKING METRICS</span>
                  <span className="text-white font-medium">Cost-Per-Lead (CPL)</span>
                </div>
              </div>

              {/* Campaign Ad Blueprint Sample */}
              <div className="p-4 bg-[#090b0f] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase">AD SPECIMEN & LANDING ALIGNMENT</span>
                <div className="text-xs text-white font-medium">
                  "Luxury Cliffside Villas in Bali · Direct Reservation Rates & Complimentary Sunset Chauffeur"
                </div>
                <p className="text-[11px] text-slate-400 font-body">
                  Targeted exclusively to travelers searching for private luxury pool villas in your region.
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 flex items-center justify-between text-xs font-mono-tech text-slate-400">
              <span>DELIVERY COMMITMENT:</span>
              <span className="text-white">Full transparent ad accounts owned by client, zero hidden markup</span>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">SEMANTIC SERP & CORE WEB VITALS</span>
              </div>
              <span className="text-slate-300">100% WHITE-HAT STANDARDS</span>
            </div>

            {/* Google SERP Card Preview */}
            <div className="bg-[#050507] border border-white/15 p-5 space-y-3">
              <div className="text-[10px] font-mono-tech text-slate-500">LIVE GOOGLE SEARCH RESULT SNIPPET SIMULATOR</div>
              <div className="p-4 bg-[#090b0f] border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono-tech">
                  <span className="w-4 h-4 bg-white/10 flex items-center justify-center text-[10px]">🌐</span>
                  <span>https://luvira.digital &gt; hotel-booking-solutions</span>
                </div>
                <h5 className="text-base text-white hover:underline font-medium cursor-pointer">
                  Luvira Digital — High-Converting Hotel Websites & Direct Booking
                </h5>
                <p className="text-xs text-slate-300 font-body leading-relaxed">
                  Bespoke website architecture for hotels, luxury hospitality and growing businesses. Direct reservation engines, zero OTA commissions, and high-performance WebGL.
                </p>
              </div>

              {/* Core Web Vitals Metric Tiles */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-xs font-mono-tech">
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">LCP (SPEED)</span>
                  <span className="text-white font-bold">0.82s (Good)</span>
                </div>
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">FID (LATENCY)</span>
                  <span className="text-white font-bold">12ms (Good)</span>
                </div>
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">CLS (STABILITY)</span>
                  <span className="text-white font-bold">0.00 (Zero Shift)</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex justify-between">
              <span>INDEX INTEGRITY:</span>
              <span className="text-slate-200">Semantic H1–H6 hierarchy, Schema.org Hotel & LocalBusiness JSON-LD</span>
            </div>
          </div>
        );

      case 'graphic-design-branding':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">TYPOGRAPHY & BRAND BOOK DOSSIER</span>
              </div>
              <span className="text-slate-300">VECTOR MASTER FILES</span>
            </div>

            <div className="bg-[#050507] border border-white/15 p-5 space-y-4">
              {/* Typographic hierarchy specimen */}
              <div className="space-y-2 border-b border-white/10 pb-4">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase">TYPOGRAPHIC PROPORTION SCALE</span>
                <div className="space-y-1">
                  <div className="text-2xl font-display font-bold text-white tracking-tight">SYNE DISPLAY 64PT</div>
                  <div className="text-sm font-mono-tech text-slate-300">SPACE GROTESK 14PT — MONOSPACED DATA</div>
                  <div className="text-xs text-slate-400 font-body">Inter 11pt — Engineered for maximum readability on mobile screens.</div>
                </div>
              </div>

              {/* Color swatches */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono-tech text-slate-500 uppercase">CURATED BRAND SWATCHES</span>
                <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono-tech">
                  <div className="p-2.5 bg-[#050507] border border-white/20 text-white">
                    <span className="block font-bold">OBSIDIAN</span>
                    <span className="text-slate-500">#050507</span>
                  </div>
                  <div className="p-2.5 bg-[#101319] border border-white/10 text-slate-300">
                    <span className="block font-bold">GRAPHITE</span>
                    <span className="text-slate-500">#101319</span>
                  </div>
                  <div className="p-2.5 bg-[#94a3b8] text-black font-bold">
                    <span>SILVER</span>
                    <span className="block text-slate-800">#94A3B8</span>
                  </div>
                  <div className="p-2.5 bg-[#ffffff] text-black font-bold">
                    <span>PURE WHITE</span>
                    <span className="block text-slate-600">#FFFFFF</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex justify-between">
              <span>DELIVERABLES:</span>
              <span className="text-white">SVG vector logos, Figma design system, business cards & letterheads</span>
            </div>
          </div>
        );

      case 'video-editing':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">4K NLE TIMELINE & COLOR SUITE</span>
              </div>
              {/* LUT grade toggle */}
              <div className="flex items-center gap-1 bg-[#050507] p-1 border border-white/15">
                <button
                  onClick={() => setVideoLut('raw')}
                  className={`px-2 py-0.5 text-[10px] font-mono-tech transition-colors cursor-pointer ${
                    videoLut === 'raw' ? 'bg-white text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  LOG Raw
                </button>
                <button
                  onClick={() => setVideoLut('graded')}
                  className={`px-2 py-0.5 text-[10px] font-mono-tech transition-colors cursor-pointer ${
                    videoLut === 'graded' ? 'bg-white text-black font-bold' : 'text-slate-400'
                  }`}
                >
                  Rec.709 Cinematic
                </button>
              </div>
            </div>

            {/* Video Timeline Mockup */}
            <div className="bg-[#050507] border border-white/15 p-5 space-y-3 font-mono-tech text-xs">
              <div className="h-28 bg-[#090b0f] border border-white/10 p-3 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>TIMECODE: 00:01:24:18</span>
                  <span className="text-white">
                    {videoLut === 'graded' ? 'CINEMATIC CONTRAST APPLIED' : 'FLAT LOG SPECIMEN'}
                  </span>
                </div>

                {/* Timeline Tracks */}
                <div className="space-y-1.5 py-1">
                  <div className="h-4 bg-white/10 border border-white/20 flex items-center px-2 text-[9px] text-white">
                    VIDEO TRACK 1 · 4K 60FPS PRORES
                  </div>
                  <div className="h-4 bg-[#141720] border border-white/10 flex items-center px-2 text-[9px] text-slate-300">
                    B-ROLL CUTS · SOUND DESIGN MASTER
                  </div>
                </div>

                <div className="flex justify-between text-[9px] text-slate-500">
                  <span>AUDIO PEAK: -14 LUFS TARGET</span>
                  <span>9:16 VERTICAL + 16:9 DUAL EXPORT</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-[10px]">
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block">FORMAT</span>
                  <span className="text-white">ProRes 422 / H.265</span>
                </div>
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block">SUBTITLES</span>
                  <span className="text-slate-200">Dynamic Captions</span>
                </div>
                <div className="p-2.5 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block">TURNAROUND</span>
                  <span className="text-white">3–5 Business Days</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex justify-between">
              <span>OUTPUTS:</span>
              <span className="text-white">Instagram Reels, YouTube 4K, Commercial Promos</span>
            </div>
          </div>
        );

      case 'custom-tshirt-printing':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">APPAREL TEXTILE WORKSHOP SPECIFIER</span>
              </div>
              {/* Color switcher */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setApparelColor('black')}
                  className={`w-4 h-4 border cursor-pointer ${apparelColor === 'black' ? 'border-white scale-110' : 'border-white/20'} bg-black`}
                  aria-label="Black colorway"
                />
                <button
                  onClick={() => setApparelColor('charcoal')}
                  className={`w-4 h-4 border cursor-pointer ${apparelColor === 'charcoal' ? 'border-white scale-110' : 'border-white/20'} bg-[#1a1d24]`}
                  aria-label="Charcoal colorway"
                />
                <button
                  onClick={() => setApparelColor('titanium')}
                  className={`w-4 h-4 border cursor-pointer ${apparelColor === 'titanium' ? 'border-white scale-110' : 'border-white/20'} bg-[#cbd5e1]`}
                  aria-label="Titanium colorway"
                />
              </div>
            </div>

            <div className="bg-[#050507] border border-white/15 p-5 space-y-4 font-mono-tech text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="p-4 bg-[#090b0f] border border-white/10 space-y-2">
                  <span className="text-[10px] text-slate-500 uppercase">FABRIC SPECIFICATION</span>
                  <h5 className="text-sm font-bold text-white">240 GSM Super-Combed Cotton</h5>
                  <p className="text-[11px] text-slate-400 font-body leading-relaxed">
                    Bio-washed, pre-shrunk heavyweight fabric engineered for premium durability and luxury retail drape.
                  </p>
                </div>

                <div className="p-4 bg-[#090b0f] border border-white/10 space-y-2 text-[11px]">
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-slate-400">PRINT METHOD:</span>
                    <span className="text-white font-medium">Direct-to-Film (DTF) / Screen</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1">
                    <span className="text-slate-400">PLACEMENT:</span>
                    <span className="text-white">Left Chest + Full Back</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">BATCH QUANTITY:</span>
                    <span className="text-white font-medium">From 25 units upward</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                <div className="p-2 bg-[#090b0f] border border-white/10 text-slate-300">SIZE S (38")</div>
                <div className="p-2 bg-[#090b0f] border border-white/10 text-slate-300">SIZE M (40")</div>
                <div className="p-2 bg-[#090b0f] border border-white/10 text-slate-300">SIZE L (42")</div>
                <div className="p-2 bg-[#090b0f] border border-white/10 text-slate-300">SIZE XL (44")</div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex justify-between">
              <span>USAGE:</span>
              <span className="text-white">Staff uniforms, resort boutique merchandise, event collections</span>
            </div>
          </div>
        );

      case '3d-signboards':
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono-tech text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white" />
                <span className="text-white font-semibold">3D ELEVATION CAD & ILLUMINATION</span>
              </div>
              {/* Day/Night lighting toggle */}
              <button
                onClick={() => setSignboardMode(signboardMode === 'day' ? 'night' : 'day')}
                className="px-3 py-1 bg-[#090b0f] border border-white/20 text-xs font-mono-tech text-slate-200 hover:text-white cursor-pointer"
              >
                Mode: {signboardMode === 'night' ? 'Night Illumination' : 'Daylight Architectural'}
              </button>
            </div>

            {/* Signboard Visual Simulation */}
            <div className={`border p-6 space-y-4 transition-all duration-500 ${
              signboardMode === 'night' 
                ? 'bg-[#050507] border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.08)]' 
                : 'bg-[#141720] border-white/20'
            }`}>
              <div className="text-center py-6">
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-400 block mb-2">
                  50MM ACRYLIC EXTRUSION WITH BACKLIT HALO LED
                </span>
                <div className={`text-3xl sm:text-4xl font-display font-bold tracking-widest uppercase transition-all duration-500 ${
                  signboardMode === 'night'
                    ? 'text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]'
                    : 'text-slate-200 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]'
                }`}>
                  LUVIRA RESORT & SPA
                </div>
                <div className="text-xs font-mono-tech text-slate-400 mt-2">
                  BRUSHED TITANIUM FACING · 3000K WARM WHITE LED CORE
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs font-mono-tech">
                <div className="p-3 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">MATERIAL</span>
                  <span className="text-white">Laser-Cut Metal / Acrylic</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">WEATHERPROOF</span>
                  <span className="text-white">IP65 Exterior Rated</span>
                </div>
                <div className="p-3 bg-[#090b0f] border border-white/10 text-center">
                  <span className="text-slate-500 block text-[9px]">BLUEPRINT</span>
                  <span className="text-slate-300">1:1 CAD Dimension Sheet</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#090b0f] border border-white/10 text-xs font-mono-tech text-slate-400 flex justify-between">
              <span>FABRICATION:</span>
              <span className="text-white">Full engineering dimension blueprints provided for local manufacturing</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-28 sm:py-36 relative border-b border-white/10 bg-[#050507] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/15 text-[11px] font-mono-tech uppercase tracking-[0.22em] text-slate-300">
            <span className="w-1.5 h-1.5 bg-white" />
            <span>01 · NINE CORE DISCIPLINES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display uppercase leading-[1.05]">
            Engineering & Creative Capabilities
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body font-light leading-relaxed">
            From bespoke React web applications and direct hotel booking engines to brand identity, video post-production, custom apparel, and 3D architectural signage.
          </p>
        </div>

        {/* Master Two-Column Interactive Inspection Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: 9 Disciplines Navigation Ledger */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] font-mono-tech uppercase tracking-widest text-slate-500 block mb-3">
              SELECT DISCIPLINE TO INSPECT SPECIFICATIONS:
            </span>
            <div className="space-y-1.5">
              {SERVICES.map((svc) => {
                const isSelected = svc.id === selectedServiceId;
                return (
                  <button
                    key={svc.id}
                    onClick={() => setSelectedServiceId(svc.id)}
                    className={`w-full p-4 text-left transition-all duration-200 border flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#11141a] border-white/40 shadow-[0_5px_20px_rgba(255,255,255,0.06)] text-white'
                        : 'bg-[#090b0f] border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2 border transition-colors ${
                        isSelected ? 'bg-white/10 border-white text-white' : 'bg-white/5 border-white/10 text-slate-400'
                      }`}>
                        {getServiceIcon(svc.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono-tech text-slate-500 font-semibold">{svc.number}</span>
                          <span className={`text-sm font-semibold tracking-wide ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {svc.title}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-mono-tech block">
                          {svc.category}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-white translate-x-0.5 -translate-y-0.5' : 'text-slate-600 group-hover:text-slate-300'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Interactive Specification Viewport */}
          <div className="lg:col-span-7 bg-[#090b0f] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl">
            {/* Header info */}
            <div className="border-b border-white/10 pb-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-tech text-white font-bold uppercase tracking-wider">
                  DISCIPLINE [{activeService.number}] · {activeService.category}
                </span>
                <span className="text-xs font-mono-tech text-slate-500">
                  CONFIRMED STUDIO CAPABILITY
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {activeService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-body leading-relaxed font-light">
                {activeService.description}
              </p>
            </div>

            {/* Bespoke Interactive Visualization Frame */}
            <div className="py-2">
              {renderBespokeServiceLayout()}
            </div>

            {/* Concrete Deliverables Checklist */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-xs font-mono-tech text-slate-400 uppercase tracking-widest font-semibold block">
                Standard Scoped Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3 bg-[#050507] border border-white/10 flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono-tech text-slate-400">
                Commercial Impact: <span className="text-white font-medium">{activeService.businessValue}</span>
              </div>
              <button
                onClick={() => onStartProject(activeService.title)}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-200 text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer shrink-0"
              >
                <span>Enquire About This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
