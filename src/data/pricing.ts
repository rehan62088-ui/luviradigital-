import { PricingPackage } from '../types';

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '₹10,000',
    period: 'one-time investment',
    highlighted: false,
    tagline: 'Ideal for local businesses, clinics, and professionals seeking a solid, credible digital presence.',
    idealFor: 'Local Businesses & Independent Professionals',
    turnaround: '5–7 Business Days',
    features: [
      '5–7 Structured Pages',
      'Home, About, Services, Gallery and Contact',
      'Responsive Mobile & Desktop Design',
      'Direct WhatsApp & Call Buttons (+91 6206242488)',
      'Google Maps Location Integration',
      'Fundamental Search Engine Optimisation (SEO)',
      '1 Month of Technical Support',
      '* Note: Domain, hosting & third-party subscriptions billed separately'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Package',
    price: '₹20,000',
    period: 'one-time investment',
    highlighted: true,
    tagline: 'Tailored for growing businesses requiring custom layouts, multi-page depth, and structured lead capture.',
    idealFor: 'Growing Businesses & Commercial Services',
    turnaround: '10–14 Business Days',
    features: [
      '8–12 Custom Designed Pages',
      'Responsive Custom Layout Architecture',
      'Blog or Article Section Functionality',
      'Custom Enquiry or Booking Lead Forms',
      'WhatsApp and Email Contact Options',
      'Interactive Maps & Verified Social Links',
      'On-Page Search Engine Optimisation (SEO)',
      '2 Months of Dedicated Support',
      '* Note: Domain, hosting & third-party subscriptions billed separately'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: '₹30,000',
    period: 'one-time investment',
    highlighted: false,
    tagline: 'High-end digital experience for hotels, resorts, and brands requiring advanced booking and bespoke features.',
    idealFor: 'Hotels, Luxury Hospitality & E-Commerce',
    turnaround: '18–24 Business Days',
    features: [
      'Comprehensive Multi-Page Experience',
      'Bespoke Visual Design with Architectural 3D Accents',
      'Hotel Website & Direct Room Enquiry Architecture',
      'Advanced Booking Flow (Custom integration scoped upon review)',
      'Payment Gateway Integration (Requires merchant account setup)',
      'Admin Content Desk (Requires headless CMS or database configuration)',
      'WhatsApp Concierge Sync & Direct Lead Routing',
      'Priority Post-Launch Support & Technical Handover',
      '* Note: Advanced integrations require external provider credentials & accounts'
    ]
  }
];
