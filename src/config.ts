// ────────────────────────────────────────────────────────────────────────────
//  Site configuration — edit these values to make the template your own.
//  Almost everything visitor-facing (titles, the brand, SEO, JSON-LD, llms.txt)
//  is derived from this file, so start here.
// ────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Vores canadarejse',
  // Optional second-script name (e.g. a Chinese 中文名) shown under the brand and
  // in a couple of prose pages. Leave it '' to hide it everywhere. See the README
  // for how to self-host a font subset so it renders identically on every device.
  nameZh: '',
  title: 'Vores canadarejse',
  description:
    'A minimal photography portfolio and blog — digital and film galleries, a photo-a-month calendar, and two blogs.',
};

// Left-hand navigation. "Digital" is the home page and shows by default.
export const nav: NavItem[] = [
  { label: 'Startside', href: '/' },
  { label: 'Dag 1', href: '/dag1' },
  { label: 'Dag 2', href: '/dag2' },
  { label: 'Dag 3', href: '/dag3' },
  { label: 'Dag 4', href: '/dag4' },
  { label: 'Dag 5', href: '/dag5' },
  { label: 'Dag 6', href: '/dag6' },
  { label: 'Dag 6', href: '/dag6' },
  { label: 'Dag 7', href: '/dag7' },
  { label: 'Dag 8', href: '/dag8' },
  { label: 'Dag 9', href: '/dag9' },
  { label: 'Dag 10', href: '/dag10' },
  { label: 'Dag 11', href: '/dag11' },
  { label: 'Dag 12', href: '/dag12' },
  { label: 'Dag 13', href: '/dag13' },
  { label: 'Dag 14', href: '/dag14' },
  { label: 'Dag 15', href: '/dag15' },
  { label: 'Dag 16', href: '/dag16' },
  { label: 'Dag 17', href: '/dag17' },
  { label: 'Dag 18', href: '/dag18' },
  { label: 'Dag 19', href: '/dag19' },
  // { label: 'Digital', href: '/digital' },
  // { label: 'rejsedag', href: '/rejsedag' },
  // { label: 'Analog', href: '/analog' },
 
];

// Social / external links shown in the sidebar and on the contact page. Replace
// the placeholders with your own. If you drop or add one, also update the
// matching <Icon> in Sidebar.astro and the list in Contact.astro.
export const social = {
  // instagram: 'https://www.instagram.com/yourusername',
  // linkedin: 'https://www.linkedin.com/in/yourusername',
  // github: 'https://github.com/yourusername',
};
