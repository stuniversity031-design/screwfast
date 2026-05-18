// An array of links for navigation bar
const navBarLinks = [
  { name: 'Services', url: '/#services' },
  { name: 'Work', url: '/#work' },
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
      { name: 'Web & Funnel Systems', url: '/contact' },
      { name: 'QR Code Platforms', url: '/contact' },
      { name: 'Content & Digital Media', url: '/contact' },
      { name: 'Brand & Strategy', url: '/contact' },
      { name: 'Automation & AI Tools', url: '/contact' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About Us', url: '/contact' },
      { name: 'Our Work', url: '/contact' },
      { name: 'Pricing', url: '/#pricing' },
      { name: 'Contact', url: '/contact' },
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms', url: '/contact' },
    ],
  },
];

// An object of links for social icons
const socialLinks = {
  facebook: 'https://www.facebook.com/',
  x: 'https://twitter.com/',
  github: 'https://youtube.com/@aimoneygrowthwealthsecrets?si=65_SOxKboqbuXjJt',
  google: 'https://www.google.com/',
  slack: 'https://slack.com/',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
