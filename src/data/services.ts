// Service pages. Each entry becomes a page at /<slug>.

export type Service = {
  slug: string;
  icon: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 on the service page. Cards and navigation keep the shorter `title`. */
  h1: string;
  serviceType: string;
  /** Answer-first definition shown under the H1. */
  answer: string;
  summary: string;
  intro: string;
  image?: string;
  imageAlt: string;
  /** Hand-picked related pages, by slug (service slugs or standalone landing pages). */
  related: string[];
  problems: string[];
  includes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'ai-automation',
    icon: 'bolt',
    title: 'AI Automation',
    metaTitle: "AI Automation Agency UK, Based in Manchester | Amica",
    metaDescription:
      "AI automation for UK businesses: instant enquiry replies, missed-call text-back, reminders and follow-ups built in GoHighLevel. Live in four to six weeks.",
    h1: "AI Automation for UK Businesses",
    serviceType: "AI automation",
    answer:
      "An AI automation agency maps the repetitive tasks in your business and builds workflows that handle the rule-based parts automatically. Amica Digital Services builds AI automation for UK businesses from Manchester, mainly in GoHighLevel, so your team spends less time on admin and more time with customers.",
    summary: 'Take repetitive admin off your team: instant replies, reminders, follow-ups and handovers.',
    intro:
      'Most small teams lose hours each week to the same tasks: replying to enquiries, chasing paperwork, sending reminders and copying details between systems. We map those tasks and automate the ones that follow clear rules, so your people can spend their time on the work that needs a person.',
    image: '/images/recruitment-automation.jpg',
    imageAlt: "Recruitment team reviewing candidate profiles and an automated interview booking workflow on screen",
    related: ["ai-voice-agents", "crm-gohighlevel", "recruitment-agency-automation"],
    problems: [
      'Enquiries wait hours for a reply because the office is busy',
      'Staff re-type the same details into several systems',
      'Follow-ups depend on someone remembering to send them',
      'Managers have no clear view of what happened to each lead',
    ],
    includes: [
      { title: 'Instant enquiry responses', text: 'Every web form, call or message gets a personal reply within moments, by email, SMS or WhatsApp.' },
      { title: 'Missed-call text-back', text: 'If nobody can answer, the caller receives a text straight away so the conversation is not lost.' },
      { title: 'Reminders and follow-ups', text: 'Appointment reminders, document requests and follow-up sequences run on schedule.' },
      { title: 'Process workflows', text: 'Onboarding, review requests and internal task alerts built around how your team already works.' },
      { title: 'Integrations', text: 'We connect your forms, calendar, CRM and other tools using GoHighLevel, APIs and other suitable platforms.' },
      { title: 'Reporting', text: 'Simple dashboards showing enquiries, response times, bookings and outcomes.' },
    ],
    steps: [
      { title: 'Map', text: 'We review how enquiries and admin move through your business today.' },
      { title: 'Build', text: 'We build and test the workflows in your CRM, with your approval at each stage.' },
      { title: 'Launch and improve', text: 'We go live, train your team and refine the automations as results come in.' },
    ],
    faqs: [
      { q: "What is an AI automation agency?", a: "An AI automation agency maps repetitive tasks in your business, such as replying to enquiries, sending reminders and chasing paperwork, and builds workflows that handle the rule-based parts automatically. Amica builds these mainly in GoHighLevel, with APIs and other platforms where they suit the job." },
      { q: "Will automation replace my staff?", a: "No. The aim is to remove repetitive tasks so your team has more time for people and decisions. Your staff stay in control and can step into any conversation." },
      { q: "Which tools do you use?", a: "Mainly GoHighLevel, along with APIs and other platforms where they suit the job. We recommend tools based on your needs, not the other way round." },
      { q: "What is missed-call text-back?", a: "If nobody can answer a call, the caller receives a text message straight away so the conversation is not lost. It is one of the automations included in our AI automation and care agency packages." },
      { q: "How long does it take?", a: "A typical automation project takes four to six weeks, depending on scope and how quickly we receive the information we need." },
    ],
  },
  {
    slug: 'ai-voice-agents',
    icon: 'phone',
    title: 'AI Voice Agents',
    metaTitle: "AI Receptionist UK: AI Voice Agents for Calls | Amica",
    metaDescription:
      "An AI receptionist that answers calls when your team is busy or out of hours, captures details, books appointments and hands over to a person when needed.",
    h1: "AI Receptionists and Voice Agents",
    serviceType: "AI receptionist",
    answer:
      "An AI receptionist is a virtual receptionist that answers your phone in a natural voice, captures caller details and books appointments when your team is busy. Amica Digital Services builds and manages AI receptionists for UK businesses, from Manchester.",
    summary: 'A virtual receptionist that answers when your team cannot, captures details and books calls.',
    intro:
      'Calls arrive at the worst times: during a rota crisis, after hours or when everyone is with a client. An AI voice agent can answer politely, take the caller\'s details, answer common questions from an approved knowledge base and book a call back, then pass everything to your team.',
    image: '/images/ai-receptionist.jpg',
    imageAlt: "Receptionist wearing a headset, supported by an AI voice assistant that routes calls and books appointments",
    related: ["ai-receptionist-care-agencies", "ai-chatbots", "ai-automation"],
    problems: [
      'Calls go to voicemail and callers try a competitor instead',
      'Out-of-hours enquiries wait until the next morning',
      'Receptionists are interrupted by the same questions all day',
    ],
    includes: [
      { title: 'Call answering', text: 'Answers inbound calls in a natural voice, during busy periods or out of hours.' },
      { title: 'Approved answers only', text: 'Uses a knowledge base you approve. It does not invent prices, terms or promises.' },
      { title: 'Booking and messages', text: 'Books appointments into your calendar or takes a detailed message for your team.' },
      { title: 'Human handover', text: 'Clear rules for when a call should go straight to a person.' },
      { title: 'Call summaries', text: 'Each call is logged in your CRM with a short summary and next step.' },
      { title: 'Monitoring', text: 'We review calls regularly and improve the scripts and rules.' },
    ],
    steps: [
      { title: 'Design', text: 'Agree what the agent should handle, what it must never say and when to hand over.' },
      { title: 'Test', text: 'Run test calls with your team before any real caller speaks to it.' },
      { title: 'Go live', text: 'Switch on for agreed hours, then monitor and refine.' },
    ],
    faqs: [
      { q: "What is an AI receptionist?", a: "An AI receptionist (or AI voice agent) is a virtual receptionist that answers phone calls in a natural voice, takes the caller's details, answers common questions from a knowledge base you approve, and books a call back or appointment, then passes everything to your team." },
      { q: "Will callers know they are speaking to an AI?", a: "We recommend the agent says so at the start of the call. Being open builds trust and avoids confusion." },
      { q: "Can it handle sensitive or urgent calls?", a: "It is set up to recognise these and pass them to a person, or give your agreed emergency instructions. It does not give clinical, legal or financial advice." },
      { q: "Do I need a new phone number?", a: "Not usually. Calls can be forwarded to the agent when your team is busy or outside office hours." },
      { q: "How much does an AI receptionist cost?", a: "AI voice agents are quoted individually after a short call, because cost depends on call volume, hours covered and integrations. The Pro plan (£990 per month) includes an AI chatbot and WhatsApp assistant; voice agents are priced separately." },
    ],
  },
  {
    slug: 'ai-chatbots',
    icon: 'chat',
    title: 'AI Chatbots',
    metaTitle: "AI Chatbots for Websites and WhatsApp (UK) | Amica",
    metaDescription:
      "AI chatbots for your website, Facebook, Instagram and WhatsApp that answer questions from approved information, qualify enquiries and book appointments.",
    h1: "AI Chatbots for Websites and WhatsApp",
    serviceType: "AI chatbot",
    answer:
      "An AI chatbot answers website, Facebook, Instagram and WhatsApp messages from information you have approved, asks a few qualifying questions and books the next step. Amica Digital Services builds and manages AI chatbots for UK businesses, with a clear handover to your team.",
    summary: 'Answer questions and qualify enquiries on your website and messaging channels, day and night.',
    intro:
      'Visitors often have a quick question before they are ready to call. A well-built chatbot answers from information you have approved, asks a few qualifying questions and books the next step, so serious enquiries reach your team with the details already captured.',
    image: '/images/ai-chatbot.jpg',
    imageAlt: "Woman using a laptop while chat messages, a lead form and a booking calendar appear beside her",
    related: ["ai-voice-agents", "ai-automation", "crm-gohighlevel"],
    problems: [
      'Website visitors leave without making contact',
      'The same questions arrive by email and messages every day',
      'Enquiries arrive without the details your team needs',
    ],
    includes: [
      { title: 'Website chat', text: 'A chat widget that matches your brand and answers common questions.' },
      { title: 'Messaging channels', text: 'The same assistant on Facebook Messenger, Instagram and WhatsApp where suitable.' },
      { title: 'Qualification', text: 'Asks the questions you choose, such as location, service needed and timescale.' },
      { title: 'Booking', text: 'Offers available slots from your calendar.' },
      { title: 'Handover', text: 'Passes the conversation to a person whenever needed.' },
      { title: 'Logging', text: 'Every conversation is saved to the contact record in your CRM.' },
    ],
    steps: [
      { title: 'Knowledge base', text: 'We write and agree the answers the chatbot may give.' },
      { title: 'Build and test', text: 'We test real scenarios, including difficult and off-topic questions.' },
      { title: 'Launch and review', text: 'We monitor conversations and improve answers each month.' },
    ],
    faqs: [
      { q: "What can an AI chatbot do for my business?", a: "It answers common questions from information you have approved, asks a few qualifying questions, offers available slots from your calendar and passes serious enquiries to your team with the details already captured. Every conversation is saved to the contact record in your CRM." },
      { q: "What if the chatbot does not know the answer?", a: "It says so and offers to pass the question to your team, rather than guessing." },
      { q: "Can it work on WhatsApp?", a: "Yes, where suitable. The same assistant can run on your website, Facebook Messenger, Instagram and WhatsApp." },
      { q: "Can it collect personal data?", a: "Only what is needed for the enquiry, with a link to your privacy policy. We set it up with UK GDPR in mind." },
    ],
  },
  {
    slug: 'crm-gohighlevel',
    icon: 'crm',
    title: 'CRM and GoHighLevel',
    metaTitle: "GoHighLevel Agency UK: CRM Setup and Management | Amica",
    metaDescription:
      "UK GoHighLevel agency based in Manchester. We set up pipelines, calendars, forms, WhatsApp and automations, fix existing accounts and manage them for you.",
    h1: "GoHighLevel CRM Setup and Management",
    serviceType: "CRM setup and management",
    answer:
      "GoHighLevel (also called HighLevel) is an all-in-one CRM and marketing platform. Amica Digital Services is a Manchester-based GoHighLevel agency that sets up pipelines, calendars, forms, WhatsApp and automations for UK businesses, fixes existing accounts and manages them for you.",
    summary: 'One place for every lead, conversation and appointment, set up properly and kept tidy.',
    intro:
      'GoHighLevel can bring your contacts, pipeline, calendars, email, SMS and WhatsApp into one system. Set up well, it shows exactly where every enquiry stands. Set up badly, it becomes another tool nobody trusts. We design it around your sales and onboarding process and keep it working.',
    image: '/images/website-crm.jpg',
    imageAlt: "Two colleagues reviewing a CRM pipeline and booking calendar on a desktop monitor, laptop and phone",
    related: ["ai-automation", "recruitment-agency-automation", "lead-generation"],
    problems: [
      'Leads are spread across inboxes, spreadsheets and phones',
      'Nobody is sure which enquiries have been followed up',
      'An existing CRM was set up but never properly used',
    ],
    includes: [
      { title: 'Pipelines', text: 'Clear stages that match how you actually win and onboard clients.' },
      { title: 'Calendars', text: 'Booking calendars with confirmations, reminders and no-show follow-up.' },
      { title: 'Forms and landing pages', text: 'Forms that feed straight into the right pipeline stage.' },
      { title: 'Conversations', text: 'Email, SMS and WhatsApp in one shared inbox.' },
      { title: 'Data import and clean-up', text: 'Bring in existing contacts, remove duplicates and tag them sensibly.' },
      { title: 'Training and support', text: 'Short training for your team and ongoing management.' },
    ],
    steps: [
      { title: 'Audit', text: 'We review your current process and any existing CRM.' },
      { title: 'Configure', text: 'We build pipelines, calendars, forms and automations.' },
      { title: 'Train and manage', text: 'We train your team and keep the system maintained.' },
    ],
    faqs: [
      { q: "What is GoHighLevel?", a: "GoHighLevel (also called HighLevel) is an all-in-one CRM and marketing platform that brings contacts, pipelines, calendars, email, SMS and WhatsApp into one system. Amica uses it as the main platform for the automations we build for clients." },
      { q: "I already have GoHighLevel. Can you fix it?", a: "Yes. We often start with an audit of an existing account and then tidy pipelines, calendars and workflows." },
      { q: "Do I need to already use GoHighLevel?", a: "No. We can set it up from scratch, or audit and improve an account you already have." },
      { q: "Who owns the data?", a: "You do. Your contacts and records remain your business data." },
    ],
  },
  {
    slug: 'lead-generation',
    icon: 'target',
    title: 'Lead Generation',
    metaTitle: "Lead Generation Agency UK: Ads, SEO and Follow-up | Amica",
    metaDescription:
      "Lead generation that joins SEO, Google and Meta ads, landing pages and automated follow-up, tracked from first click to booked appointment.",
    h1: "Lead Generation Systems for UK Businesses",
    serviceType: "Lead generation",
    answer:
      "A lead generation system joins your marketing channels to a CRM with fast follow-up, so every enquiry is tracked from first click to booked appointment. Amica Digital Services builds and runs these systems for UK businesses from Manchester.",
    summary: 'Campaigns and follow-up that turn attention into booked appointments, measured end to end.',
    intro:
      'More traffic does not help if nobody follows up. We build lead-generation systems where every channel, from search and social to paid ads and outreach, feeds into a CRM with fast follow-up and clear reporting, so you can see which activity produces appointments.',
    image: '/images/ai-chatbot.jpg',
    imageAlt: "Woman on a laptop with an enquiry form, lead filter and appointment calendar connected on screen",
    related: ["seo", "crm-gohighlevel", "social-media-management"],
    problems: [
      'Marketing spend with no clear link to enquiries or sales',
      'Leads arrive but are not followed up quickly enough',
      'No reliable way to tell which channel works',
    ],
    includes: [
      { title: 'SEO and local search', text: 'Technical SEO, content and Google Business Profile optimisation.' },
      { title: 'Paid advertising', text: 'Google and Meta campaigns with agreed budgets and stop-loss rules.' },
      { title: 'Social media', text: 'LinkedIn, Facebook, Instagram and YouTube content planned around your offer.' },
      { title: 'Landing pages', text: 'Focused pages with one clear next step.' },
      { title: 'Email, SMS and WhatsApp nurture', text: 'Sequences that keep in touch until the lead is ready.' },
      { title: 'Attribution and reporting', text: 'Tracking from first click to booked appointment.' },
    ],
    steps: [
      { title: 'Plan', text: 'Agree the audience, offer, channels, budget and success measures.' },
      { title: 'Launch', text: 'Build pages, tracking and follow-up before any spend goes live.' },
      { title: 'Optimise', text: 'Review results and shift effort to what produces appointments.' },
    ],
    faqs: [
      { q: "Do you guarantee a number of leads?", a: "No honest agency can guarantee results. We agree targets, measure them openly and adjust quickly." },
      { q: "Do you manage ad budgets?", a: "Yes, within limits you approve. Ad spend is paid directly to the platform and is separate from our fees." },
      { q: "Which channels do you use?", a: "SEO and local search, Google and Meta ads, LinkedIn, Facebook, Instagram and YouTube content, landing pages, and email, SMS and WhatsApp nurture. Every channel feeds into one CRM so you can see which activity produces appointments." },
    ],
  },
  {
    slug: 'websites-software',
    icon: 'code',
    title: 'Websites and Software',
    metaTitle: "Website Design Manchester for Small Businesses | Amica",
    metaDescription:
      "Fast, search-friendly small business websites, portals and custom software from a Manchester team, with forms and booking that feed your CRM.",
    h1: "Websites, Portals and Custom Software",
    serviceType: "Website design and development",
    answer:
      "Amica Digital Services designs and builds fast, search-friendly websites for small businesses in Manchester and across the UK, with forms and booking that feed your CRM. Where off-the-shelf tools do not fit, we also build portals, dashboards and custom software.",
    summary: 'Fast, search-friendly websites, portals and tools that connect to your CRM.',
    intro:
      'Your website is often the first thing a prospect checks after hearing from you. We build fast, mobile-friendly sites that search engines can read, with forms and booking that feed your CRM. Where off-the-shelf tools do not fit, we build portals, dashboards and custom software.',
    image: '/images/website-crm.jpg',
    imageAlt: "Two colleagues reviewing a business website on a large monitor, with the same site shown on a laptop and phone",
    related: ["seo", "crm-gohighlevel", "lead-generation"],
    problems: [
      'The current site is slow, hard to update or not found on Google',
      'Website enquiries do not reach the CRM',
      'Teams rely on spreadsheets for work that needs a proper system',
    ],
    includes: [
      { title: 'Business websites', text: 'Clear structure, fast loading and built for search engines from day one.' },
      { title: 'Landing pages', text: 'Campaign pages connected to forms, booking and tracking.' },
      { title: 'Client and staff portals', text: 'Secure areas for documents, onboarding and updates.' },
      { title: 'Dashboards', text: 'Reporting views that pull data from your systems.' },
      { title: 'Custom software', text: 'Web applications built around a specific process.' },
      { title: 'Hosting and care', text: 'Updates, backups and monitoring after launch.' },
    ],
    steps: [
      { title: 'Scope', text: 'Agree goals, pages, features and integrations in writing.' },
      { title: 'Design and build', text: 'Review designs and a test version before anything goes live.' },
      { title: 'Launch and support', text: 'Go live with tracking in place, then maintain and improve.' },
    ],
    faqs: [
      { q: "Can I update the website myself?", a: "Yes. Content is kept in simple, well-organised files, and we can make changes for you on request." },
      { q: "Will it work with GoHighLevel?", a: "Yes. Forms, booking and chat can all feed directly into your GoHighLevel account." },
      { q: "Do you build more than websites?", a: "Yes. Where off-the-shelf tools do not fit, we build client and staff portals, dashboards and custom web applications around a specific process." },
    ],
  },
  {
    slug: 'seo',
    icon: 'search',
    title: 'Search Engine Optimisation',
    metaTitle: "SEO Company Manchester for Small Businesses | Amica",
    metaDescription:
      "SEO for Manchester and UK small businesses: technical fixes, local SEO, Google Business Profile, keyword research and content, with plain-English reports.",
    h1: "SEO Services for Small Businesses",
    serviceType: "Search engine optimisation",
    answer:
      "Search engine optimisation (SEO) is the work that helps your website appear when customers search on Google. Amica Digital Services provides technical SEO, local SEO, Google Business Profile optimisation and content for small businesses in Manchester and across the UK.",
    summary: 'Help the right customers find you on Google, then turn that traffic into enquiries.',
    intro:
      'Most buyers search before they call. If your website is slow, hard for search engines to read or missing the pages people look for, those enquiries go to competitors. We fix the technical basics, target the searches that matter to your business and connect your site to your CRM so every visitor has a clear next step.',
    image: '/images/seo.jpg',
    imageAlt: "Team gathered round a laptop reviewing search rankings, a site speed score and traffic charts",
    related: ["websites-software", "lead-generation", "social-media-management"],
    problems: [
      'Your business does not appear when local customers search',
      'The website gets visitors but very few enquiries',
      'Nobody is sure which pages or keywords bring in business',
    ],
    includes: [
      { title: 'Technical SEO', text: 'Site speed, indexing, structured data and fixes that help search engines read your site.' },
      { title: 'Local SEO', text: 'Google Business Profile optimisation and location pages for the areas you serve.' },
      { title: 'Keyword research', text: 'Find the searches your customers actually use and plan pages around them.' },
      { title: 'On-page optimisation', text: 'Titles, headings, copy and internal links improved page by page.' },
      { title: 'Content', text: 'Helpful articles and service pages written for your customers and for search.' },
      { title: 'Reporting', text: 'Monthly reports from Google Search Console and Analytics in plain English.' },
    ],
    steps: [
      { title: 'Audit', text: 'We review your site, rankings and competitors to find the quickest wins.' },
      { title: 'Fix and build', text: 'We fix technical issues and improve or create the pages that matter most.' },
      { title: 'Grow and report', text: 'We publish content, track results monthly and adjust the plan.' },
    ],
    faqs: [
      { q: "How long does SEO take?", a: "Technical fixes can help within weeks, but steady growth in rankings usually takes several months. We report progress every month so you can see what is changing." },
      { q: "Can you guarantee a number one ranking?", a: "No one can honestly guarantee rankings, because Google decides them. We focus on the work that gives you the best chance and measure the results openly." },
      { q: "Do you do local SEO?", a: "Yes. Local SEO includes Google Business Profile optimisation and location pages for the areas you serve, alongside technical SEO and content." },
      { q: "Is SEO included in your monthly plans?", a: "The Growth plan (£490 per month) includes on-page SEO, local keyword targeting and technical SEO improvements. The Pro plan (£990 per month) adds an advanced SEO content strategy." },
    ],
  },
  {
    slug: 'social-media-management',
    icon: 'megaphone',
    title: 'Social Media and Content',
    metaTitle: "Social Media Management Manchester and UK | Amica",
    metaDescription:
      "Branded posts and short-form video for Facebook, Instagram, LinkedIn, TikTok and YouTube, planned monthly and approved by you before publishing.",
    h1: "Social Media Management and Content",
    serviceType: "Social media management",
    answer:
      "Amica Digital Services plans, creates and publishes branded social media posts and short-form video for UK businesses from Manchester, and routes the messages they generate into your CRM so interest turns into enquiries.",
    summary: 'Consistent, branded posts and short videos that keep your business in front of customers.',
    intro:
      'Customers and candidates check your social media to see whether you are active and trustworthy. We plan, create and publish branded content on a regular schedule, and link it to your website and CRM so interest turns into enquiries rather than likes alone.',
    image: '/images/social-media.jpg',
    imageAlt: "Content team planning social media posts and short videos on a large screen, with printed photos and a camera on the desk",
    related: ["seo", "lead-generation", "ai-chatbots"],
    problems: [
      'Your pages have not been updated for weeks or months',
      'Nobody on the team has time to create posts consistently',
      'Social media brings likes but very few enquiries',
    ],
    includes: [
      { title: 'Content planning', text: 'A monthly content calendar built around your services and audience.' },
      { title: 'Branded posts', text: 'Designed graphics and captions in your brand style.' },
      { title: 'Short-form video', text: 'Reels and short videos for Instagram, Facebook, TikTok and YouTube.' },
      { title: 'Publishing', text: 'Scheduled posting across your chosen platforms.' },
      { title: 'LinkedIn', text: 'Company and founder profile optimisation for B2B audiences.' },
      { title: 'Lead capture', text: 'Messages and comments routed to your CRM so enquiries are followed up.' },
    ],
    steps: [
      { title: 'Plan', text: 'Agree your audience, platforms, tone and monthly content plan.' },
      { title: 'Create', text: 'We produce posts and videos for your approval before anything is published.' },
      { title: 'Publish and review', text: 'We publish on schedule and review what performs best each month.' },
    ],
    faqs: [
      { q: "Do I approve posts before they go out?", a: "Yes. You see and approve the content plan and posts before they are published." },
      { q: "Which platforms do you cover?", a: "Usually Facebook, Instagram and LinkedIn, plus TikTok and YouTube where they suit your audience." },
      { q: "How many posts are included?", a: "Foundation includes 4 branded posts per month, Growth 8, and Pro 12 plus Reels and short-form video." },
    ],
  },
];

// Standalone landing pages for the care and recruitment specialism.
export const landingPages = [
  {
    slug: 'care-agency-automation',
    icon: 'heart',
    title: 'Care and Recruitment Automation',
    summary: 'Our complete package for UK care and recruitment agencies, from £490 per month.',
  },
  {
    slug: 'ai-receptionist-care-agencies',
    icon: 'phone',
    title: 'AI Receptionist for Care Agencies',
    summary: 'Answer family enquiries and carer applicants out of hours, with clear rules for handing over to your team.',
  },
  {
    slug: 'recruitment-agency-automation',
    icon: 'briefcase',
    title: 'Recruitment Agency Automation',
    summary: 'Candidate registration, screening, interview booking and compliance chasing, alongside your existing ATS.',
  },
];

/** Card data for a list of related page slugs (services or landing pages). */
export function relatedCards(slugs: string[]) {
  const all = [...services, ...landingPages];
  return slugs
    .map((slug) => all.find((p) => p.slug === slug))
    .filter((p): p is (typeof all)[number] => Boolean(p))
    .map((p) => ({ href: `/${p.slug}`, icon: p.icon, title: p.title, summary: p.summary }));
}
