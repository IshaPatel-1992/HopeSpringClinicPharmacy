/** @type {import('tailwindcss').Config} */
export default {
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
        fadeSlideUp: "fadeSlideUp 0.8s ease-out both",
        subtleBounce: "subtleBounce 1.5s ease-in-out infinite",
      },
      spacing: {
        navbar: "7rem",
      },
      colors: {
        brand: {
          primary: { light: "#D6DFE2", DEFAULT: "#5D7A89", dark: "#3F5C69" },
          accent: { light: "#EAF5F1", DEFAULT: "#7FB8A4", dark: "#5E9C87" },
          neutral: { light: "#F8FAFC", DEFAULT: "#EDF2F7", dark: "#CBD5E1" },
          gray: { light: "#E2E8F0", DEFAULT: "#94A3B8", dark: "#64748B" },
        },
        surface: { light: "#F8FAFC", DEFAULT: "#EDF2F7" },
        card: { DEFAULT: "rgba(255,255,255,0.75)", solid: "#FFFFFF" },
        border: { soft: "#E2E8F0", accent: "rgba(127,184,164,0.25)" },
        text: {
          primary: "#1E293B",
          secondary: "#334155",
          muted: "#64748B",
          inverse: "#FFFFFF",
        },
      },
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};