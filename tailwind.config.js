module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        about: `url(/img/bg-about.png)`,
      }),
    },
  },
  plugins: [],
};
