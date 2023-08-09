/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "720px",
        lg: "990px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
        manrope: ["Manrope", "sans-serif"],
        "red-hat-display": ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(to right, #05041A, #110E2F, #110E2F, #03000B)",
        "hero-gradient": "linear-gradient(90deg, #0EB3E4 0%, #0E9CD2 100%)",
      },
      boxShadow: {
        "3xl": "0px 20px 40px 0px rgba(13, 57, 120, 0.21",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
