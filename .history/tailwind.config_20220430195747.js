module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#do380c",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        logo: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
