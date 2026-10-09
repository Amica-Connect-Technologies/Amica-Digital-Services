// Shared JSON-LD helpers. Every page's structured data is built from site.ts facts.
import { company } from './site';

export type Faq = { q: string; a: string };
export type Crumb = { label: string; href?: string };

export const orgId = `${company.url}/#organization`;
export const founderId = `${company.url}/#founder`;
export const orgRef = { '@id': orgId };

export const areaServed = [
  { '@type': 'Country', name: 'United Kingdom' },
  { '@type': 'City', name: 'Manchester' },
];

export const socialUrls = Object.values(company.social).filter(Boolean) as string[];

export const founderSchema = {
  '@type': 'Person',
  '@id': founderId,
  name: company.founderFullName,
  alternateName: company.founder,
  jobTitle: company.founderRole,
  url: `${company.url}/about`,
  worksFor: orgRef,
};

/** FAQPage schema whose text matches the visible FAQ exactly. */
export function faqSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/** BreadcrumbList matching the visible breadcrumb (Home first, current page last). */
export function breadcrumbSchema(crumbs: Crumb[], currentPath: string) {
  const items = [{ label: 'Home', href: '/' }, ...crumbs];
  const current = currentPath.replace(/\/$/, '') || '/';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: new URL(c.href ?? current, company.url).href,
    })),
  };
}

/** Service schema linked to the sitewide organisation entity. */
export function serviceSchema(opts: { name: string; description: string; serviceType: string; path: string; audience?: string; offers?: unknown[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${company.url}${opts.path}`,
    provider: orgRef,
    areaServed,
    ...(opts.audience ? { audience: { '@type': 'BusinessAudience', audienceType: opts.audience } } : {}),
    ...(opts.offers ? { offers: opts.offers } : {}),
  };
}
