module.exports = {
  siteTitle: 'Diana Beatrice Wijaya | Engineer & Designer',
  siteDescription:
    'Diana Beatrice Wijaya is a frontend engineer based in Jakarta, Indonesia who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Diana Beatrice Wijaya, Diana, Beatrice, dianabeatricew, dianabeatricewijaya, jasawebsite, buatwebsite, buatuiux, uiux, software engineer, front-end engineer, web developer, javascript, jakarta',
  siteUrl: 'https://dianabeatricewijaya.github.io/',
  siteLanguage: 'en_US',
  name: 'Diana Beatrice Wijaya',
  location: 'Jakarta, Indonesia',
  email: 'dianabeatricewijaya@gmail.com',
  github: 'https://github.com/dianabeatricewijaya',
  twitterHandle: '@dianabeatricew',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dianabeatricewijaya',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/dianabeatricewijaya/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dianabeatricew',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/dianabeatricew',
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/channel/UCxBVmFMpmKpWbESZXUYjtew/videos?disable_polymer=1',
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
