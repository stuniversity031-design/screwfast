// An array of links for navigation bar
const navBarLinks = [
  { name: 'Services', url: '/#features' },
  { name: 'Work', url: '/#features-navs' },
  { name: 'Process', url: '/#testimonials' },
  { name: 'Pricing', url: '/#pricing' },
  { name: 'Testimonials', url: '/#testimonials' },
  { name: 'Contact', url: '/contact' },
];

// An array of links for footer
const footerLinks = [
  {
    section: 'Services',
    links: [
      { name: 'Web & Funnel Systems', url: '/#features' },
      { name: 'QR Code Platforms', url: '/#features' },
      { name: 'Content & Digital Media', url: '/#features' },
      { name: 'Brand & Strategy', url: '/#features' },
      { name: 'Automation & AI Tools', url: '/#features' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About Us', url: '/#features' },
      { name: 'Our Work', url: '/#features-navs' },
      { name: 'Pricing', url: '/#pricing' },
      { name: 'Contact', url: '/contact' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms', url: '#' },
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
