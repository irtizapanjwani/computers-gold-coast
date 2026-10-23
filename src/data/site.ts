// Shared content for the redesigned Home, About and Reviews pages.

export const regions = [
  { name: 'Northern Gold Coast', suburbs: [['Coomera', '4209'], ['Helensvale', '4212'], ['Hope Island', '4212'], ['Labrador', '4215'], ['Southport', '4215']] },
  { name: 'Central Gold Coast', suburbs: [['Ashmore', '4214'], ['Surfers Paradise', '4217'], ['Bundall', '4217'], ['Benowa', '4217'], ['Broadbeach', '4218']] },
  { name: 'Southern Gold Coast', suburbs: [['Burleigh Heads', '4220'], ['Palm Beach', '4221'], ['Currumbin', '4223'], ['Tugun', '4224'], ['Coolangatta', '4225']] },
  { name: 'West & Hinterland', suburbs: [['Nerang', '4211'], ['Mudgeeraba', '4213'], ['Robina', '4226'], ['Varsity Lakes', '4227'], ['Tamborine Mountain', '4272']] },
] as const;

export const suburbs = regions.flatMap((r) => r.suburbs.map(([s]) => s));

export const brands = [
  ['Apple', '/apple-repairs-gold-coast'], ['Acer', '/acer-repairs-gold-coast'], ['Asus', '/asus-repairs-gold-coast'],
  ['Dell', '/dell-repairs-gold-coast'], ['HP', '/hp-repairs-gold-coast'], ['Lenovo', '/lenovo-repairs-gold-coast'],
  ['MSI', '/msi-repairs-gold-coast'], ['Samsung', '/samsung-repairs-gold-coast'], ['Sony', '/sony-repairs-gold-coast'],
  ['Toshiba', '/toshiba-repairs-gold-coast'],
] as const;

export const services = [
  { icon: 'monitor', name: 'Computer Repairs', text: 'Slow, crashing or dead desktop PCs, all brands.', href: '/computer-repairs-gold-coast' },
  { icon: 'laptop', name: 'Laptop Repairs', text: 'Batteries, hinges, keyboards, DC jacks and motherboards.', href: '/laptop-repairs-gold-coast' },
  { icon: 'command', name: 'Mac Repairs', text: 'MacBook, iMac and Mac mini faults diagnosed and fixed.', href: '/mac-repairs-gold-coast' },
  { icon: 'screen', name: 'Laptop Screen Replacement', text: 'Cracked, flickering or dead laptop screens replaced.', href: '/laptop-screen-replacement-gold-coast' },
  { icon: 'shield', name: 'Virus & Spyware Removal', text: 'Pop-ups, hijacked browsers and suspicious slowdowns cleaned up.', href: '/virus-spyware-removal-gold-coast' },
  { icon: 'drive', name: 'Data Recovery', text: 'Files back from failed drives, deleted folders and dead laptops.', href: '/data-recovery-gold-coast' },
  { icon: 'wifi', name: 'WiFi & Mesh Networks', text: 'Dead zones and dropouts fixed in homes and high-rise units.', href: '/network-optimisation-mesh-wifi-gold-coast' },
  { icon: 'briefcase', name: 'Business IT Support', text: 'Help for Gold Coast offices, shops and sole traders.', href: '/business-it-support-gold-coast' },
  { icon: 'camera', name: 'CCTV Installation', text: 'Hard-wired security cameras for homes and businesses.', href: '/services/cctv-security-cameras-gold-coast' },
] as const;

// "What needs fixing?" chips in the homepage hero. Icons are ids from components/redesign/Icons.astro.
export const quickFixes = [
  { label: 'Laptop', icon: 'laptop', href: '/laptop-repairs-gold-coast' },
  { label: 'MacBook / Mac', icon: 'command', href: '/mac-repairs-gold-coast' },
  { label: 'Desktop PC', icon: 'monitor', href: '/computer-repairs-gold-coast' },
  { label: 'Wi-Fi & Internet', icon: 'wifi', href: '/wireless-networks-setup-gold-coast' },
  { label: 'Virus Removal', icon: 'shield', href: '/virus-spyware-removal-gold-coast' },
  { label: 'Data Recovery', icon: 'drive', href: '/data-recovery-gold-coast' },
] as const;

// Brand logo carousel in the homepage hero. White PNGs in public/brands/. Only brands the
// site already mentions; href only where a brand repair page exists.
export const brandLogos: { name: string; src: string; href?: string }[] = [
  { name: 'Apple', src: '/brands/logo-apple.png', href: '/apple-repairs-gold-coast' },
  { name: 'Dell', src: '/brands/logo-dell.png', href: '/dell-repairs-gold-coast' },
  { name: 'HP', src: '/brands/logo-hp.png', href: '/hp-repairs-gold-coast' },
  { name: 'Lenovo', src: '/brands/logo-lenovo.png', href: '/lenovo-repairs-gold-coast' },
  { name: 'Asus', src: '/brands/logo-asus.png', href: '/asus-repairs-gold-coast' },
  { name: 'Acer', src: '/brands/logo-acer.png', href: '/acer-repairs-gold-coast' },
  { name: 'Toshiba', src: '/brands/logo-toshiba.png', href: '/toshiba-repairs-gold-coast' },
  { name: 'Sony', src: '/brands/logo-sony.png', href: '/sony-repairs-gold-coast' },
  { name: 'Fujitsu', src: '/brands/logo-fujitsu.png' },
  { name: 'IBM', src: '/brands/logo-ibm.png' },
  { name: 'Compaq', src: '/brands/logo-compaq.png' },
];

// TODO: fill in from the client's Google Business Profile. The rating line under the
// homepage quote form stays hidden until both values are set. Never estimate these.
export const googleReviews: { rating: number | null; count: number | null } = { rating: null, count: null };

// Every review the site has. Only the first three were published as Google reviews.
export const reviews = [
  { quote: 'Terrific service, very affordable, has fixed my problems every single time, have already recommended him to friends of mine.', google: true, tag: 'Computer Repairs', href: '/computer-repairs-gold-coast' },
  { quote: "Punctual, on time, explained in depth what he was doing, I felt that I could trust him and I'll be recommending him to friends and family.", google: true, tag: 'Onsite Service', href: '/computer-repairs-gold-coast' },
  { quote: "Fixed our PC issues easily and gave great explanations on how to prevent issues in the future. His hourly rate is the cheapest we've found.", google: true, tag: 'PC Repairs & Advice', href: '/preventative-maintenance-gold-coast' },
  { quote: 'Having dealt with a number of questionable repair people, I was shocked at how quick, flexible and affordable these guys were.', google: false, tag: 'Computer Repairs', href: '/computer-repairs-gold-coast' },
  { quote: 'I felt the technician was really thorough, solved a lot of my issues remotely on the same day, and had patience with getting the remote session set up.', google: false, tag: 'Remote Support', href: '/general-troubleshooting-gold-coast' },
  { quote: 'Really happy with the service. Unfortunately my PC had come to the end of its life. Got helpful advice on a replacement to meet my computing needs. Will use these guys again in the future.', google: false, tag: 'Replacement Advice', href: '/laptop-buying-service-gold-coast' },
  { quote: 'Highly professional and very alert to my computer problems. Very highly recommended.', google: false, tag: 'Diagnostics', href: '/hardware-repair-diagnostics-gold-coast' },
] as const;

export type Faq = { q: string; a: string };

/** FAQPage JSON-LD from the same items the page renders. */
export function faqSchema(items: readonly Faq[], url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
    })),
  };
}

export const SITE = 'https://computersgoldcoast.com.au';

export const businessSchema = {
  '@type': 'LocalBusiness',
  '@id': `${SITE}/#business`,
  name: 'Computers Gold Coast',
  description: 'Family-owned computer, laptop and Mac repair business serving the Gold Coast, onsite or remote, with no call-out fee.',
  telephone: '+61447266455',
  url: `${SITE}/`,
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '07:00',
    closes: '22:00',
  },
  address: { '@type': 'PostalAddress', addressLocality: 'Gold Coast', addressRegion: 'QLD', addressCountry: 'AU' },
  areaServed: ['Gold Coast', ...suburbs],
  knowsAbout: ['Computer repairs', 'Laptop repairs', 'Mac repairs', 'Data recovery', 'Virus and spyware removal', 'WiFi and network setup', 'Business IT support', 'CCTV installation'],
};

export function breadcrumbSchema(url: string, name: string) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name, item: url },
    ],
  };
}
