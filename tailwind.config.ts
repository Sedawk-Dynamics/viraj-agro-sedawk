import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        viraj: {
          "green-deep": "#0B5D1E",
          "green-leaf": "#2E7D32",
          "green-light": "#6B8E23",
          brown: "#8B5A2B",
          "brown-light": "#A67C52",
          beige: "#F6F3EB",
          cream: "#FBF9F4",
        },
        // Moringa homepage palette
        brand: {
          deep: "#14532D",
          band: "#1F4D2E",
          accent: "#2E7D32",
          light: "#3A7D44",
          cream: "#F7F7F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "leaf-sway": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        "leaf-sway": "leaf-sway 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
