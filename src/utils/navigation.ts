// An array of links for navigation bar
const navBarLinks = [
  { name: 'Services', url: '/services' },
  { name: 'Work', url: '/work' },
  { name: 'Process', url: '/process' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Testimonials', url: '/#testimonials' },
  { name: 'Contact', url: '/contact' },
];

// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Web & Funnel Systems', url: '/services' },
      { name: 'QR Code Platforms', url: '/services' },
      { name: 'Content & Digital Media', url: '/services' },
      { name: 'Brand & Strategy', url: '/services' },
      { name: 'Automation & AI Tools', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About Us', url: '#' },
      { name: 'Our Work', url: '/work' },
      { name: 'Pricing', url: '/pricing' },
      { name: 'Contact', url: '/contact' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms', url: '/terms' },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://github.com/',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
