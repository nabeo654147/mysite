module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        about: `url(/img/bg-about.png)`,
        skills: `url(/img/bg-skills.png)`,
      }),
    },
  },
  plugins: [],
};
