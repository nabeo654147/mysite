module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'about-pc': `url(/img/bg-about.png)`,
        'skills-pc': `url(/img/bg-skills.png)`,
        'skills-sp': `url(/img/bg-skills-sp.png)`,
        'future-pc': `url(/img/bg-future.png)`,
        'future-sp': `url(/img/bg-future-sp.png)`,
        'hero2-bg': `url(/img/bg-hero2.png)`,
      }),
      colors: {
        'font-dark': '#384359',
        'font-green': '#008c8d',
        strongGreen: '#05BBBC',
      },
    },
  },
  plugins: [],
};
