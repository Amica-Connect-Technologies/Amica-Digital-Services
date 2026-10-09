// Central content for the Amica Digital Services website.
// Edit company details, navigation and services here; every page reads from this file.

export const company = {
  name: 'Amica Digital Services',
  legalName: 'Amica Digital Services Ltd',
  url: 'https://amicadigitalservices.com',
  email: 'shaz@amicadigitalservices.com',
  founder: 'Shaz Chughtai',
  founderFullName: 'Muhammad Shahzad Chughtai',
  founderRole: 'Founder',
  // Confirmed by Shaz Chughtai on 8 October 2026.
  phone: '+44 7446 981768',
  phoneHref: '+447446981768',
  whatsapp: '447446981768',
  address: '378 Claremont Road, Manchester, M14 7WB, United Kingdom',
  addressParts: {
    streetAddress: '378 Claremont Road',
    addressLocality: 'Manchester',
    postalCode: 'M14 7WB',
    addressCountry: 'GB',
  },
  // Leave empty until confirmed; empty values are not shown on the site.
  companyNumber: '17020927',
  icoNumber: '',
  hours: 'Monday to Friday, 08:00 to 17:00 UK time',
  // Only verified profile URLs. Empty values are not shown and are left out of the schema.
  social: {
    linkedin: 'https://www.linkedin.com/company/112604923',
    facebook: 'https://www.facebook.com/922791870926750',
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
  // "whatsapp chat widget" in GHL → Sites → Chat Widget (the account default).
  chatWidgetId: '69df58aed69ee8616381a214',
};

export const analytics = {
  ga4: 'G-PGDEKR5YCR',
};

export const nav = [
  { label: 'Home', href: '/' },
  {
    label: 'Care and Recruitment',
    href: '/care-agency-automation',
    children: [
      { label: 'Care and Recruitment Package', href: '/care-agency-automation' },
      { label: 'AI Receptionist for Care Agencies', href: '/ai-receptionist-care-agencies' },
      { label: 'Recruitment Agency Automation', href: '/recruitment-agency-automation' },
    ],
  },
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
      { label: 'SEO', href: '/seo' },
      { label: 'Social Media and Content', href: '/social-media-management' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Terms and Conditions', href: '/terms' },
];
