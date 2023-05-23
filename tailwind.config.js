/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-in-out",
        fadeOut: "fadeOut 0.2s ease-in-out",
        "scale-in": "scale-in 0.2s ease-in-out",
        "slide-down": "slide-down 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-up": "slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: (theme) => ({
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")()],
};
