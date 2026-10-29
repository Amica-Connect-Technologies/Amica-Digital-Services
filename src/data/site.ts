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
  chatWidgetId: '6ac4f6d141bf96f2cd128fd4',
};

export const analytics = {
  ga4: 'G-PGDEKR5YCR',
  // Ad pixels. Leave empty to load nothing. When set, they load only after the
  // visitor accepts cookies (see CookieBanner.astro), and the cookie banner,
  // cookie policy and privacy policy then mention them automatically.
  metaPixelId: '',
  linkedinPartnerId: '',
};

// Lead source capture. On the first page view of a browser session we keep the
// UTM tags, click IDs, landing path and referring site in sessionStorage (nothing
// personal), then pass them to the GoHighLevel form and booking iframes.
export const leadTracking = {
  storageKey: 'amica-lead-src-v1',
  // Query string keys read from the landing URL.
  captureKeys: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'],
  // Stored value -> query param name added to the GHL iframe src. GHL hidden
  // fields are filled from matching query params, so change the right-hand names
  // here if the form or calendar field keys differ. Remove a line to stop sending it.
  ghlParams: {
    utm_source: 'utm_source',
    utm_medium: 'utm_medium',
    utm_campaign: 'utm_campaign',
    utm_content: 'utm_content',
    utm_term: 'utm_term',
    landing_page: 'landing_page',
    referrer: 'referrer',
  } as Record<string, string>,
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
      { label: 'Google Local Services Ads (LSA)', href: '/google-local-services-ads' },
      { label: 'Social Media and Content', href: '/social-media-management' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Care and supported living', href: '/industries#care' },
      { label: 'Recruitment and staffing', href: '/industries#recruitment' },
      { label: 'Clinics and healthcare', href: '/industries#clinics' },
      { label: 'Professional services', href: '/industries#professional' },
      { label: 'Local and home services', href: '/industries#local' },
    ],
  },
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

// Native enquiry form (EnquiryForm.astro). It posts JSON to the Express server,
// which saves the lead in GoHighLevel. Option values must match the GHL custom
// field options exactly (and the server's list in src/config/enquiry.js).
export const enquiry = {
  endpoint: '/api/enquiry',
  options: {
    orgType: ['Care or home care provider', 'Recruitment or staffing agency', 'Clinic or healthcare practice', 'Other small business'],
    role: ['Owner or director', 'Registered manager', 'Operations or office manager', 'Other'],
    teamSize: ['1-10', '11-50', '51-200', '200+'],
    mainNeed: ['Missed calls and out-of-hours enquiries', 'Carer recruitment and onboarding', 'Website and SEO', 'CRM and lead follow-up', 'Not sure yet'],
    timing: ['Now', 'Within 1-3 months', 'Just researching'],
    budget: ['Under £200', '£200-£500', '£500-£1,000', '£1,000+'],
    heardFrom: ['Google search', 'Facebook', 'LinkedIn', 'Referral', 'Email from us', 'Other'],
  },
  // Hidden lead source values sent with the form (read from the session capture above).
  sourceKeys: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'landing_page', 'referrer'],
};
