module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        about: `url(/img/bg-about.png)`,
        skills: `url(/img/bg-skills.png)`,
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
