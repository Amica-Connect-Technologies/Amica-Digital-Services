// Prices shown on /pricing and /google-local-services-ads. Change a price here
// and every card, comparison row and structured-data offer updates with it.
// Care and recruitment prices live on their own pages and are not set here.

export type Billing = 'month' | 'one-off';

export type ServicePrice = {
  /** Value sent with the enquiry form and saved in GHL; must match `serviceOptions`. */
  key: string;
  name: string;
  from: string;
  billing: Billing;
  /** Extra price wording shown after the price, e.g. "plus usage". */
  suffix?: string;
  icon: string;
  includes: string[];
  note: string;
  cta: { label: string; href: string };
};

export const individualServices: ServicePrice[] = [
  {
    key: 'SEO',
    name: 'Search Engine Optimisation',
    from: '£299',
    billing: 'month',
    icon: 'search',
    includes: ['Initial website SEO audit', 'Keyword research', 'On-page optimisation', 'Local SEO improvements', 'Technical SEO recommendations', 'Search Console monitoring', 'Monthly reporting'],
    note: 'Scope depends on website size and competition. Extensive content creation and backlink outreach are quoted separately.',
    cta: { label: 'Explore SEO services', href: '/seo' },
  },
  {
    key: 'Google Local Services Ads',
    name: 'Google Local Services Ads',
    from: '£199',
    billing: 'month',
    icon: 'pin',
    includes: ['Eligibility assessment', 'LSA setup assistance', 'Google Verified application guidance', 'Campaign management', 'Budget monitoring', 'Monthly reporting'],
    note: 'Setup from £249. Google advertising spend is paid separately.',
    cta: { label: 'Explore LSA packages', href: '/google-local-services-ads' },
  },
  {
    key: 'Social Media Management',
    name: 'Social Media Management',
    from: '£199',
    billing: 'month',
    icon: 'megaphone',
    includes: ['Monthly content planning', 'Four branded social media posts', 'Captions and hashtags', 'Publishing to up to two agreed platforms', 'Basic engagement reporting'],
    note: 'Additional videos, paid advertising and community management are quoted separately.',
    cta: { label: 'Explore social media', href: '/social-media-management' },
  },
  {
    key: 'CRM and GoHighLevel',
    name: 'CRM and GoHighLevel',
    from: '£149',
    billing: 'month',
    icon: 'crm',
    includes: ['Contact database', 'One basic sales pipeline', 'Lead capture configuration', 'Enquiry notifications', 'Basic CRM reporting', 'Standard support'],
    note: 'Setup and additional integrations may apply.',
    cta: { label: 'Explore CRM solutions', href: '/crm-gohighlevel' },
  },
  {
    key: 'AI Website Chatbot',
    name: 'AI Website Chatbot',
    from: '£99',
    billing: 'month',
    icon: 'chat',
    includes: ['One website chatbot', 'Approved business knowledge base', 'FAQ responses', 'Lead capture', 'Basic CRM integration where supported', 'Routine monitoring'],
    note: 'Setup and usage charges apply.',
    cta: { label: 'Explore AI chatbots', href: '/ai-chatbots' },
  },
  {
    key: 'AI Receptionist / Voice Agent',
    name: 'AI Receptionist / Voice Agent',
    from: '£199',
    billing: 'month',
    suffix: 'plus usage',
    icon: 'phone',
    includes: ['AI receptionist configuration', 'Approved call scripts', 'Customer enquiry capture', 'Appointment request handling', 'Human handover rules', 'Call summaries where supported'],
    note: 'Setup, call minutes, telephone charges and additional integrations are quoted separately.',
    cta: { label: 'Explore AI voice agents', href: '/ai-voice-agents' },
  },
  {
    key: 'AI Workflow Automation',
    name: 'AI Workflow Automation',
    from: '£199',
    billing: 'month',
    icon: 'bolt',
    includes: ['Workflow discovery', 'One standard automation workflow', 'Trigger and action configuration', 'Testing', 'Routine monitoring', 'Monthly review'],
    note: 'Complex integrations, additional workflows and third-party costs are quoted separately.',
    cta: { label: 'Explore AI automation', href: '/ai-automation' },
  },
  {
    key: 'Lead Generation',
    name: 'Lead Generation Campaign Management',
    from: '£249',
    billing: 'month',
    icon: 'target',
    includes: ['Lead generation strategy', 'Campaign configuration', 'Lead capture funnel', 'CRM lead routing', 'Basic performance reporting'],
    note: 'Advertising spend, creative production and prospect data costs are separate.',
    cta: { label: 'Explore lead generation', href: '/lead-generation' },
  },
  {
    key: 'Business Website',
    name: 'Business Website Development',
    from: '£950',
    billing: 'one-off',
    icon: 'store',
    includes: ['Responsive business website', 'Agreed page design and development', 'Contact form', 'Basic on-page SEO setup', 'Analytics configuration', 'Launch testing'],
    note: 'Hosting, domain, maintenance and additional functionality are quoted separately.',
    cta: { label: 'Request a website quote', href: '/websites-software' },
  },
  {
    key: 'Custom Software and Client Portals',
    name: 'Custom Software and Client Portals',
    from: '£2,500',
    billing: 'one-off',
    icon: 'code',
    includes: ['Requirements discovery', 'User access and permissions', 'Agreed portal features', 'Basic dashboard functionality', 'Testing and deployment'],
    note: 'Price shown is for defined portal projects. Bespoke software, advanced integrations and SaaS platforms are quoted individually; larger projects often start from £4,500.',
    cta: { label: 'Request a technical consultation', href: '/websites-software' },
  },
];

export type Package = {
  key: string;
  name: string;
  tagline: string;
  price: string;
  setup: string;
  waiver: string;
  featured?: boolean;
  intro?: string;
  features: string[];
  notes?: string[];
  cta: string;
};

export const packages: Package[] = [
  {
    key: 'Foundation package',
    name: 'Foundation',
    tagline: 'For small businesses establishing their digital presence.',
    price: '£199',
    setup: '£200',
    waiver: 'Setup fee waived on a 6-month agreement',
    features: [
      'Website and social media lead capture forms',
      'Basic contact database',
      'One CRM lead pipeline',
      'Enquiry notifications',
      'Basic email automation',
      'One basic landing page setup',
      'Basic website conversion recommendations',
      'Four branded social media posts per month',
      'Monthly activity summary',
      'Standard email support',
    ],
    cta: 'Get started with Foundation',
  },
  {
    key: 'Growth package',
    name: 'Growth',
    tagline: 'For growing businesses that want better visibility, lead management and automated follow-up.',
    price: '£490',
    setup: '£990',
    waiver: 'Setup fee waived on a 12-month agreement',
    featured: true,
    intro: 'Everything in Foundation, plus:',
    features: [
      'Local SEO keyword targeting',
      'On-page SEO improvements for up to three agreed pages per month',
      'Basic technical SEO monitoring',
      'Google Business Profile optimisation guidance',
      'Eight branded social media posts per month in total',
      'Multi-step email and supported WhatsApp workflows',
      'CRM pipeline with agreed team access',
      'Automated appointment booking and reminders',
      'Lead routing and qualification workflows',
      'One standard lead capture funnel',
      'LSA eligibility assessment and readiness checklist for eligible businesses',
      'Monthly growth and automation report',
    ],
    notes: ['Growth includes LSA eligibility and readiness support, not ongoing LSA campaign management.'],
    cta: 'Choose Growth',
  },
  {
    key: 'Pro package',
    name: 'Pro',
    tagline: 'For businesses ready to combine SEO, local advertising and AI-powered customer engagement.',
    price: '£690',
    setup: '£990',
    waiver: 'Setup fee waived on a 12-month agreement',
    intro: 'Everything in Growth, plus:',
    features: [
      'Expanded SEO strategy',
      'On-page optimisation for up to five agreed pages per month in total',
      'Monthly SEO content planning',
      'LSA setup assistance and ongoing campaign management for one eligible business account',
      'Advertising budget and lead performance monitoring',
      'Twelve branded social media posts per month in total',
      'One short-form branded video per month, using client-provided or approved assets',
      'One website AI chatbot',
      'AI receptionist setup for one agreed call flow',
      'AI lead qualification and routing',
      'Advanced CRM dashboard',
      'Advanced automation workflows within agreed scope',
      'Monthly strategy and performance review',
      'Priority technical support',
    ],
    notes: [
      'Google advertising spend is separate.',
      'LSA activation depends on Google eligibility and verification.',
      'AI receptionist call minutes, phone numbers and third-party usage are billed separately.',
      'AI chatbot and receptionist capabilities are subject to the agreed technical scope.',
      'Complex API integrations and additional workflows are quoted separately.',
      'Pro is a managed package with defined monthly deliverables, not unlimited development or content creation.',
    ],
    cta: 'Choose Pro',
  },
];

// Comparison table rows: value per package (Foundation, Growth, Pro). true = included, false = not included.
export const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: 'Lead capture forms and contact database', values: [true, true, true] },
  { label: 'CRM pipelines', values: ['One', 'With team access', 'Advanced dashboard'] },
  { label: 'Email automation', values: ['Basic', 'Multi-step, plus WhatsApp', 'Advanced, within agreed scope'] },
  { label: 'Appointment booking and reminders', values: [false, true, true] },
  { label: 'Branded social media posts per month', values: ['4', '8', '12 plus one short video'] },
  { label: 'SEO', values: ['Conversion recommendations', 'Local SEO, up to 3 pages a month', 'Expanded strategy, up to 5 pages a month'] },
  { label: 'Google Local Services Ads', values: [false, 'Eligibility and readiness', 'Setup and ongoing management'] },
  { label: 'AI website chatbot', values: [false, false, true] },
  { label: 'AI receptionist', values: [false, false, 'One agreed call flow'] },
  { label: 'Reporting', values: ['Monthly summary', 'Monthly growth report', 'Monthly strategy review'] },
  { label: 'Support', values: ['Email', 'Email', 'Priority'] },
];

export type LsaPackage = { key: string; name: string; price: string; setup: string; featured?: boolean; summary: string; includes: string[] };

export const lsaPackages: LsaPackage[] = [
  {
    key: 'LSA Starter',
    name: 'LSA Starter',
    price: '£199',
    setup: '£249',
    summary: 'Get set up and managed properly.',
    includes: ['Eligibility assessment', 'Setup assistance', 'Google Verified application guidance', 'Campaign management', 'Budget monitoring', 'Monthly reporting'],
  },
  {
    key: 'LSA Growth',
    name: 'LSA Growth',
    price: '£349',
    setup: '£399',
    featured: true,
    summary: 'Turn LSA enquiries into booked jobs.',
    includes: ['Everything in LSA Starter', 'CRM configuration', 'Lead tracking', 'Automated follow-ups', 'Appointment workflows'],
  },
  {
    key: 'LSA Premium AI',
    name: 'LSA Premium AI',
    price: '£599',
    setup: '£699',
    summary: 'Answer and qualify every enquiry, day and night.',
    includes: ['Everything in LSA Growth', 'AI receptionist configuration', 'Website AI chatbot', 'AI lead qualification', 'Advanced reporting'],
  },
];

// Choices in the "Which service are you interested in?" list on the service enquiry form.
// Must match SERVICE_OPTIONS in the server (src/config/enquiry.js) and the GHL field options.
export const serviceOptions = [
  ...packages.map((p) => p.key),
  ...lsaPackages.map((p) => p.key),
  ...individualServices.map((s) => s.key),
  'Not sure yet',
];

export const lsaCategories = ['Plumbing', 'Heating', 'Electrical', 'Roofing', 'Cleaning', 'Pest control', 'Landscaping', 'Locksmith', 'Other local service'];
export const adBudgets = ['Under £300 a month', '£300-£750 a month', '£750-£1,500 a month', '£1,500+ a month', 'Not sure yet'];

export const toNumber = (p: string) => p.replace(/[£,]/g, '');
