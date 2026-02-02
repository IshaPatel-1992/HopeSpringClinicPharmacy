/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        subtleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }, // subtle lift
        },
      },
      animation: {
        fadeSlideUp: 'fadeSlideUp 0.8s ease-out forwards',
        subtleBounce: 'subtleBounce 1.5s ease-in-out infinite',
      },
      colors: {
        /* 🩵 TEAL – primary healthcare accent */
        teal: {
          light: "#81E6D9",
          DEFAULT: "#319795",
          dark: "#285E61",
        },

        /* 🔵 BLUE – main structure (navbar, hero, footer) */
        blue: {
          light: "#E6F0FA",
          DEFAULT: "#2B6CB0",
          dark: "#1E4E79",
          darkBlue: "#334155", // new color for text, headings, submenu
        },

        /* 🌿 GREEN – pharmacy / wellness */
        green: {
          light: "#F0FFF4",
          DEFAULT: "#9AE6B4",
          dark: "#38A169",
        },

        /* 🌼 YELLOW – attention only (sparingly) */
        yellow: {
          light: "#FEFCBF",
          DEFAULT: "#ECC94B",
          dark: "#B7791F",
        },

        /* 🌫️ NEUTRAL – replaces heavy “dark” */
        neutral: {
          light: "#F8FAFC",
          DEFAULT: "#F1F5F9",
          soft: "#E2E8F0",
          muted: "#CBD5E1",
        },

        /* ✍️ TEXT – accessibility friendly */
        text: {
          primary: "#1F2937",
          secondary: "#4B5563",
          muted: "#6B7280",
          inverse: "#E6F0FA",
        },
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
