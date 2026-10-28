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
  { icon: 'lock', name: 'Computer & Network Security', text: 'Antivirus, firewalls, secure Wi-Fi, passwords and 2FA.', href: '/computer-network-security-gold-coast' },
  { icon: 'monitor', name: 'New Computer Setup', text: 'New PCs, Macs and laptops set up, transferred and secured.', href: '/new-computer-setup-gold-coast' },
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

// Homepage symptom picker. `label` also prefills the hero quote form. The last entry has no
// service page of its own and shows a pointer to /services instead. Badges only repeat claims
// made in that symptom’s copy or elsewhere on the site. Visible text uses typographic apostrophes (’).
export type Symptom = {
  label: string;
  meaning: string;
  whatWeDo: string;
  badges: { icon: string; text: string }[];
  serviceHref: string;
  serviceLabel: string;
};
export const symptoms: Symptom[] = [
  {
    label: 'It won’t turn on',
    meaning: 'Most often it’s power: a faulty charger, a worn charging port (DC jack) or a battery that has failed. Less often it’s the power supply in a desktop, or a fault on the motherboard.',
    // TODO(client): confirm DC jack and motherboard repairs are done onsite, in the workshop, or both.
    whatWeDo: 'We test the cheapest causes first (charger, port, battery), then the board if needed. You get the cause and the price before any repair starts.',
    badges: [
      { icon: 'wrench', text: 'Cheapest causes checked first' },
      { icon: 'dollar', text: 'Price before any repair' },
      { icon: 'home', text: 'No call-out fee' },
    ],
    serviceHref: '/hardware-repair-diagnostics-gold-coast',
    serviceLabel: 'Hardware repair & diagnostics',
  },
  {
    label: 'It’s painfully slow',
    meaning: 'Usually too many programs starting with the computer, an ageing hard drive, not enough memory, or something unwanted running in the background.',
    whatWeDo: 'We check the drive’s health and what’s running at startup, clean things up, and tell you whether an SSD or more memory would actually make a difference.',
    badges: [
      { icon: 'drive', text: 'Drive health check' },
      { icon: 'chat', text: 'Honest upgrade advice' },
      // "Slow computers ... can usually be fixed remotely" is in the homepage FAQ.
      { icon: 'wifi', text: 'Often fixed remotely' },
    ],
    serviceHref: '/computer-tune-up-gold-coast',
    serviceLabel: 'Computer tune-up',
  },
  {
    label: 'The screen is cracked',
    meaning: 'On a laptop, a cracked or blank screen usually means the display panel needs replacing. If the picture flickers when you move the lid, it can be the screen cable or hinge instead.',
    // TODO(client): confirm whether desktop monitors and iMac screens are also replaced, or laptops only.
    whatWeDo: 'We find the exact panel for your model, quote it, and fit the replacement. If it turns out to be the cable or hinge, we fix that instead.',
    badges: [
      { icon: 'screen', text: 'Panel matched to your model' },
      { icon: 'dollar', text: 'Quoted before fitting' },
      { icon: 'wrench', text: 'Cable and hinge repairs too' },
    ],
    serviceHref: '/laptop-screen-replacement-gold-coast',
    serviceLabel: 'Laptop screen replacement',
  },
  {
    label: 'Pop-ups and viruses',
    meaning: 'Pop-ups, a changed home page or new toolbars usually mean adware or a browser hijacker. Slowness plus odd behaviour can point to deeper malware.',
    whatWeDo: 'We remove the infection, clean up your browsers and startup items, and set up protection so it doesn’t come back. This can often be done remotely.',
    badges: [
      { icon: 'wifi', text: 'Can be done remotely' },
      { icon: 'shield', text: 'Protection set up after' },
      { icon: 'home', text: 'No call-out fee' },
    ],
    serviceHref: '/virus-spyware-removal-gold-coast',
    serviceLabel: 'Virus & spyware removal',
  },
  {
    label: 'I’ve lost my files',
    meaning: 'Files are often still there: deleted, moved, or sitting on a drive that’s failing but still readable. Clicking or grinding noises point to a failing drive.',
    whatWeDo: 'Stop using the device and get in touch, because using it can make recovery harder. We assess the drive and tell you honestly what can be recovered before any work starts.',
    badges: [
      { icon: 'chat', text: 'Honest assessment first' },
      { icon: 'drive', text: 'Failing drives assessed' },
      { icon: 'dollar', text: 'Price before work starts' },
    ],
    serviceHref: '/data-recovery-gold-coast',
    serviceLabel: 'Data recovery',
  },
  {
    label: 'Wi-Fi keeps dropping',
    meaning: 'Usually the router is in the wrong spot, walls are blocking the signal (concrete apartments are the worst), or the home is too big for one router. Sometimes the problem is the internet connection itself.',
    whatWeDo: 'We test the connection and the signal room by room, then fix the router setup or install mesh Wi-Fi so every room gets proper coverage.',
    badges: [
      { icon: 'wifi', text: 'Room-by-room signal test' },
      { icon: 'home', text: 'Mesh Wi-Fi installs' },
      { icon: 'dollar', text: 'No call-out fee' },
    ],
    serviceHref: '/network-optimisation-mesh-wifi-gold-coast',
    serviceLabel: 'Mesh Wi-Fi & network optimisation',
  },
  {
    label: 'Something else',
    // TODO(client): "40+ types of IT services" comes from the existing Computer Repairs page; confirm it’s still accurate.
    meaning: 'Printers, email, new computer setup, backups, smart TVs, CCTV and more. We handle over 40 types of IT jobs for Gold Coast homes and businesses.',
    whatWeDo: '',
    badges: [
      { icon: 'wrench', text: '40+ types of IT jobs' },
      { icon: 'briefcase', text: 'Homes and businesses' },
      { icon: 'clock', text: '7am to 10pm, 7 days' },
    ],
    serviceHref: '/services',
    serviceLabel: 'View all services',
  },
];

// Illustrative text thread for the homepage "how it works" phone mockup. `step` is the index of
// the matching step (0-2) on the left. No prices. Times are illustrative and optional.
// TODO(client): "a tech there this afternoon" implies same-day onsite visits; confirm that’s usual.
export type ThreadMessage = { step: number; from: 'customer' | 'tech'; text: string; time?: string };
export const repairThread: ThreadMessage[] = [
  { step: 0, from: 'customer', text: 'Hi, my laptop won’t turn on since last night', time: '9:12 am' },
  { step: 0, from: 'tech', text: 'No worries, we can have a tech there this afternoon. No call-out fee.', time: '9:14 am' },
  { step: 1, from: 'tech', text: 'Found it: a worn charging port. Here’s the cause and the price before we start.', time: '1:38 pm' },
  { step: 2, from: 'customer', text: 'Yes please, go ahead' },
  { step: 2, from: 'tech', text: 'All fixed and charging. You’re good to go ✓', time: '2:21 pm' },
];

// Bento grid in the homepage technician section. `area` places the tile in the grid
// (see .bento in redesign.css). Copy reuses claims already on the site.
export type BentoTile =
  | { area: 'quote'; quote: string; linkText: string; href: string }
  | { area: 'years' | 'fee'; value: string; caption: string }
  | { area: 'makes'; title: string; brands: string[]; note: string }
  | { area: 'honest'; title: string; text: string }
  | { area: 'plain'; title: string; jargon: string; plain: string };
export const bentoTiles: BentoTile[] = [
  { area: 'quote', quote: 'You deal with one local technician, from the first phone call to the finished repair.', linkText: 'More about us', href: '/about' },
  // TODO(client): confirm "20 years".
  { area: 'years', value: '20', caption: 'years fixing PCs, laptops and Macs' },
  { area: 'fee', value: '$0', caption: 'call-out fee. You only pay for the repair, quoted before we start.' },
  { area: 'honest', title: 'Honest, no-upsell advice', text: 'We recommend free, reputable software wherever it does the job, so a repair doesn’t cost more than it should.' },
  // Illustrative example of how a diagnosis gets explained, not a quote from a real job.
  { area: 'plain', title: 'Explained in plain English', jargon: 'The drive’s SMART data shows reallocated sectors.', plain: 'Your hard drive is wearing out. Back up your files today.' },
  { area: 'makes', title: 'Every make and model', brands: ['Acer', 'Lenovo', 'HP', 'Dell', 'Samsung', 'Toshiba', 'Sony', 'Apple'], note: 'Windows and Mac, old or new.' },
];

// "Computer problems we see across the Gold Coast" field guide. `pin` is the marker position on
// the stylised coastline map (viewBox 0 0 240 520, not to scale). Fixes restate existing site claims;
// tips are general, practical advice rather than promises.
export const coastJobs = [
  {
    where: 'Surfers Paradise & Broadbeach',
    title: 'High-rise WiFi dead zones',
    why: 'Concrete floors and walls in apartment towers block WiFi, so one router rarely reaches every room.',
    fix: 'We set up mesh WiFi so every room gets proper coverage.',
    tip: 'Keep the router out in the open and central, not in a cupboard or behind the TV.',
    href: '/network-optimisation-mesh-wifi-gold-coast',
    linkText: 'Mesh WiFi',
    pin: { x: 158, y: 196, label: 'Surfers Paradise' },
  },
  {
    where: 'Café strips, all over the Coast',
    title: 'Coffee-spilled laptops',
    why: 'Liquid shorts the logic board, and corrosion can keep doing damage hours after the spill.',
    fix: 'We repair liquid-damaged logic boards and recover your files, often when others say “replace”.',
    tip: 'Turn it off and unplug it straight away. Don’t keep using it to “see if it works”.',
    href: '/data-recovery-gold-coast',
    linkText: 'Data recovery',
    pin: { x: 168, y: 318, label: 'Burleigh Heads' },
  },
  {
    where: 'Every storm season',
    title: 'Power surge damage',
    why: 'Summer storms send surges through power and phone lines that can kill power supplies, modems and motherboards.',
    fix: 'We provide Beyond Economical Repair (BER) reports to support your insurance claim.',
    tip: 'Unplug computers and modems when a storm is coming, or use a surge protector.',
    href: '/insurance-reports-gold-coast',
    linkText: 'Insurance reports',
    pin: { x: 46, y: 372, label: 'Storm season' },
  },
];

// Homepage review cards. `review` is an index into `reviews` (the three Google reviews); the title
// and highlights only paraphrase what that customer actually wrote. `featured` is the dark middle card.
export const reviewCards = [
  { review: 0, label: 'Google review', title: 'Fixed every single time', highlights: ['Very affordable', 'Fixes the problem every time', 'Already recommended to friends'] },
  { review: 1, label: 'Google review', title: 'Someone you can trust', highlights: ['Punctual and on time', 'Explained everything in depth', 'Recommending to friends and family'], featured: true },
  { review: 2, label: 'Google review', title: 'Cheapest rate found', highlights: ['Fixed PC issues easily', 'Tips to prevent future problems', 'Lowest hourly rate they found'] },
];

// TODO: fill in from the client’s Google Business Profile. The rating line under the
// homepage quote form stays hidden until both values are set. Never estimate these.
export const googleReviews: { rating: number | null; count: number | null } = { rating: null, count: null };

// Every review the site has. Only the first three were published as Google reviews.
// `themes` and `highlight` are read straight from each customer’s own words (used on /reviews);
// `highlight` must appear in `quote` exactly.
export const reviewThemes = [
  { id: 'quick', label: 'Quick and reliable' },
  { id: 'affordable', label: 'Fair, affordable pricing' },
  { id: 'clear', label: 'Clear, honest explanations' },
] as const;
export const reviews = [
  { quote: 'Terrific service, very affordable, has fixed my problems every single time, have already recommended him to friends of mine.', google: true, tag: 'Computer Repairs', href: '/computer-repairs-gold-coast', themes: ['quick', 'affordable'], highlight: 'fixed my problems every single time' },
  { quote: "Punctual, on time, explained in depth what he was doing, I felt that I could trust him and I’ll be recommending him to friends and family.", google: true, tag: 'Onsite Service', href: '/computer-repairs-gold-coast', themes: ['quick', 'clear'], highlight: 'explained in depth what he was doing' },
  { quote: "Fixed our PC issues easily and gave great explanations on how to prevent issues in the future. His hourly rate is the cheapest we’ve found.", google: true, tag: 'PC Repairs & Advice', href: '/preventative-maintenance-gold-coast', themes: ['affordable', 'clear'], highlight: "the cheapest we’ve found" },
  { quote: 'Having dealt with a number of questionable repair people, I was shocked at how quick, flexible and affordable these guys were.', google: false, tag: 'Computer Repairs', href: '/computer-repairs-gold-coast', themes: ['quick', 'affordable'], highlight: 'quick, flexible and affordable' },
  { quote: 'I felt the technician was really thorough, solved a lot of my issues remotely on the same day, and had patience with getting the remote session set up.', google: false, tag: 'Remote Support', href: '/general-troubleshooting-gold-coast', themes: ['quick'], highlight: 'remotely on the same day' },
  { quote: 'Really happy with the service. Unfortunately my PC had come to the end of its life. Got helpful advice on a replacement to meet my computing needs. Will use these guys again in the future.', google: false, tag: 'Replacement Advice', href: '/laptop-buying-service-gold-coast', themes: ['clear'], highlight: 'helpful advice on a replacement' },
  { quote: 'Highly professional and very alert to my computer problems. Very highly recommended.', google: false, tag: 'Diagnostics', href: '/hardware-repair-diagnostics-gold-coast', themes: [], highlight: 'Highly professional' },
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
  contactPoint: { '@type': 'ContactPoint', telephone: '+61447266455', contactType: 'customer service', areaServed: 'AU', availableLanguage: 'English' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Computer repair and IT services',
    itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, url: `${SITE}${s.href}`, areaServed: 'Gold Coast' } })),
  },
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
