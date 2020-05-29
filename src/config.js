module.exports = {
  siteTitle: 'Victor Oluoch | Back-End Developer',
  siteDescription:
    'Victor Oluoch is a passionate and self-motivated back-end developer involved in creating REST APIs and highly secure business logics',
  siteKeywords:
    'Victor Oluoch, Victor, Oluoch, vic, software engineer, backend developer, database design, web developer, javascript, designer',
  siteUrl: 'https://victoroluoch.com',
  siteLanguage: 'en_KE',
  googleAnalyticsID: 'UA-167930699-1',
  name: 'Victor Oluoch',
  location: 'Nairobi, Kenya',
  email: 'vicjuma945@gmail.com',
  github: 'https://github.com/vicjuma',
  twitterHandle: '@Oluoch_vee',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/vicjuma',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/victor-oluoch-85bb63b9/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/vikjuma',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/vic_oluoch/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Oluoch_vee',
    },
  ],

  navLinks: [
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Work Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact Me',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#BF1736',
    navy: '#0E2773',
    darkNavy: '#0D1440',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
