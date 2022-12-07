/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,liquid,html,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      background: "#111",
      white: "#fff",
      transparent: "transparent",
      spotify: "rgb(26, 183, 82)",
    },
    extend: {
      fontFamily: {
        sans: "'Spotify Circular', sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
