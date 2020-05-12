module.exports = {
  siteTitle: 'Victor Oluoch | Software Engineer',
  siteDescription:
    'Victor Oluoch is a software engineer based in Boston, MA who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Victor Oluoch, Victor, Oluoch, vic, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://victoroluoch.com',
  siteLanguage: 'en_KE',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Victor Oluoch',
  location: 'Boston, MA',
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
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
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
