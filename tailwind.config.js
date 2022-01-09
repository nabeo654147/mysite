module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'about-pc': `url(/img/bg-about.png)`,
        'skills-pc': `url(/img/bg-skills.png)`,
        'skills-sp': `url(/img/bg-skills-sp.png)`,
        future: `url(/img/bg-future.png)`,
      }),
      colors: {
        'font-dark': '#384359',
        'font-green': '#008c8d',
      },
    },
  },
  plugins: [],
};
