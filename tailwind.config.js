/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          light: "#81E6D9",
          DEFAULT: "#319795",
          dark: "#285E61",
        },
        blue: {
          light: "#63B3ED",
          DEFAULT: "#2B6CB0",
          dark: "#1A365D",
        },
        green: {
          light: "#9AE6B4",
          DEFAULT: "#38A169",
          dark: "#276749",
        },
        yellow: {
          light: "#FAF089",
          DEFAULT: "#ECC94B",
          dark: "#B7791F",
        },
        dark: {
          DEFAULT: "#0F172A",
          soft: "#1E293B",
          muted: "#334155",
        },
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
