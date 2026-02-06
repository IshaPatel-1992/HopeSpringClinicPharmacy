/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeSlideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        subtleBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },

      animation: {
        fadeSlideUp: "fadeSlideUp 0.8s ease-out forwards",
        subtleBounce: "subtleBounce 1.5s ease-in-out infinite",
      },

      colors: {
        /* 🌼 PRIMARY – Hope & warmth (LOGO BASE) */
        primary: {
          light: "#FEFCBF",
          DEFAULT: "#ECC94B",
          dark: "#B7791F",
        },

        /* 🔵 SECONDARY – Trust & structure */
        secondary: {
          light: "#E6F0FA",
          DEFAULT: "#2B6CB0",
          dark: "#1E4E79",
          text: "#334155",
        },

        /* 🌿 ACCENT – Pharmacy & wellness */
        accent: {
          light: "#F0FFF4",
          DEFAULT: "#38A169",
          dark: "#276749",
        },

        /* 🩵 SUPPORT – calm (limited use) */
        calm: {
          light: "#E6FFFA",
          DEFAULT: "#319795",
          dark: "#285E61",
        },

        /* 🌫️ NEUTRALS */
        neutral: {
          light: "#F8FAFC",
          DEFAULT: "#F1F5F9",
          soft: "#E2E8F0",
          muted: "#CBD5E1",
        },

        /* ✍️ TEXT */
        text: {
          primary: "#1F2937",
          secondary: "#374151",
          muted: "#6B7280",
          inverse: "#FFFFFF",
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
