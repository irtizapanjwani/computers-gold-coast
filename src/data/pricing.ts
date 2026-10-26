// Typical prices shown on the service pages. ONE place to edit them.
//
// TODO(client): confirm every price below before launch. Sources:
//  - Gold Coast's own existing pages where they had prices (laptop battery $50–$150, laptop
//    screen $195–$265, virus removal fixed fee $250).
//  - Otherwise the client's Computer Repairs Melbourne price lists (laptop, MacBook & Mac,
//    PC upgrades), since the Gold Coast site had no prices for those jobs.
// If Gold Coast prices differ from Melbourne, change the numbers here and every page updates.

export interface PriceItem {
  name: string;
  /** Shown as written, e.g. 'from $149', '$250 fixed', '$0'. */
  price: string;
  note: string;
  badge?: string;
  href?: string;
}
export interface PriceList {
  title: string;
  items: PriceItem[];
}

export const PRICE_NOTES = [
  'Prices are a guide and vary by make, model and year.',
  'Your exact price is confirmed before any work starts, and nothing goes ahead until you’ve said yes.',
  'No call-out fee anywhere on the Gold Coast.',
];

export const computerPrices: PriceList = {
  title: 'Computer repair price list',
  items: [
    { name: 'Call-out', price: '$0', note: 'Onsite anywhere on the Gold Coast' },
    { name: 'Virus & malware removal', price: '$250 fixed', note: 'Full clean-up, often done remotely', badge: 'Fixed fee', href: '/virus-spyware-removal-gold-coast' },
    { name: 'Clean and re-paste', price: 'from $129', note: 'Dust out, fresh thermal paste, quieter and cooler', href: '/preventative-maintenance-gold-coast' },
    { name: 'Memory upgrade', price: 'from $149', note: 'Extra RAM fitted and tested', href: '/hardware-installs-upgrades-gold-coast' },
    { name: 'Data transfer to a new PC', price: 'from $149', note: 'Files, photos and settings moved across', href: '/data-backup-transfer-gold-coast' },
    { name: 'Power supply replacement', price: 'from $189', note: 'A correctly rated power supply fitted', href: '/hardware-repair-diagnostics-gold-coast' },
    { name: 'SSD upgrade', price: 'from $199', note: 'Drive fitted, Windows and files moved across', badge: 'Most booked', href: '/hardware-installs-upgrades-gold-coast' },
  ],
};

export const laptopPrices: PriceList = {
  title: 'Laptop repair price list',
  items: [
    { name: 'Call-out', price: '$0', note: 'Onsite anywhere on the Gold Coast' },
    { name: 'Battery replacement', price: 'from $50', note: 'Most models, fitted and health-checked', badge: 'Most booked', href: '/laptop-battery-replacement-gold-coast' },
    { name: 'Hinge repair', price: 'from $120', note: 'Hinges and mounts rebuilt', href: '/laptop-hinge-repairs-gold-coast' },
    { name: 'Overheating clean-out', price: 'from $129', note: 'Fan, vents and fresh thermal paste', href: '/preventative-maintenance-gold-coast' },
    { name: 'Charging port / DC jack', price: 'from $139', note: 'Repaired or replaced on the board', href: '/hardware-repair-diagnostics-gold-coast' },
    { name: 'Keyboard replacement', price: 'from $159', note: 'Including spill clean-up', href: '/hardware-repair-diagnostics-gold-coast' },
    { name: 'Screen replacement', price: 'from $195', note: '14–15" panels, part and labour included', href: '/laptop-screen-replacement-gold-coast' },
  ],
};

export const macPrices: PriceList = {
  title: 'Mac repair price list',
  items: [
    { name: 'Call-out', price: '$0', note: 'Onsite anywhere on the Gold Coast' },
    { name: 'Liquid damage treatment', price: 'from $149', note: 'Clean, assess and repair the logic board' },
    { name: 'USB-C / charging repair', price: 'from $179', note: 'Ports and charging circuits on the board' },
    { name: 'Battery replacement', price: 'from $199', note: 'MacBook Air and Pro, fitted and health-checked', badge: 'Most booked', href: '/laptop-battery-replacement-gold-coast' },
    { name: 'Keyboard repair', price: 'from $229', note: 'Sticky, repeating or dead keys' },
    { name: 'Logic board repair', price: 'from $299', note: 'No power, no display or shutdowns' },
    { name: 'Screen replacement', price: 'from $349', note: 'Cracked, black or flickering displays', href: '/laptop-screen-replacement-gold-coast' },
  ],
};
