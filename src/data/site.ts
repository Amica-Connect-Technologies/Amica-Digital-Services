// Central content for the Amica Digital Services website.
// Edit company details, navigation and services here; every page reads from this file.

export const company = {
  name: 'Amica Digital Services',
  legalName: 'Amica Digital Services Ltd',
  url: 'https://amicadigitalservices.com',
  email: 'info@amicadigitalservices.com',
  founder: 'Shaz Chughtai',
  // Confirmed by Shaz Chughtai on 8 October 2026.
  phone: '+44 7446 981768',
  phoneHref: '+447446981768',
  whatsapp: '447446981768',
  address: '378 Claremont Road, Manchester, M14 7WB, United Kingdom',
  // Leave empty until confirmed; empty values are not shown on the site.
  companyNumber: '17020927',
  icoNumber: '',
  hours: 'Monday to Friday, 08:00 to 17:00 UK time',
  social: {
    linkedin: '',
    facebook: '',
    instagram: '',
    youtube: '',
  },
};

// GoHighLevel embeds (Amica sub-account, location MG2eyE1RSMR55HLKNLIQ)
export const ghl = {
  bookingUrl: 'https://api.leadconnectorhq.com/widget/booking/F7jbFLqYxyDInUGjcOEG',
  contactFormUrl: 'https://api.leadconnectorhq.com/widget/form/W09aF9SXp5iUXiSIKLjL',
  contactFormId: 'W09aF9SXp5iUXiSIKLjL',
  embedScript: 'https://link.msgsndr.com/js/form_embed.js',
};

export const analytics = {
  ga4: 'G-PGDEKR5YCR',
};

export const nav = [
  { label: 'Care Agencies', href: '/care-agency-automation' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Automation', href: '/ai-automation' },
      { label: 'AI Voice Agents', href: '/ai-voice-agents' },
      { label: 'AI Chatbots', href: '/ai-chatbots' },
      { label: 'CRM and GoHighLevel', href: '/crm-gohighlevel' },
      { label: 'Lead Generation', href: '/lead-generation' },
      { label: 'Websites and Software', href: '/websites-software' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms and Conditions', href: '/terms' },
];
