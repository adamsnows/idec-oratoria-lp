/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      grotesk: [
        "OverusedGrotesk",
        "sans-serif", // fallback
      ],
    },
    container: {
      center: true, // Centraliza o container automaticamente
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "568px",
        lg: "760px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#0b0d0c",
        secondary: "#64748B",
        accent: "#ffc663",

        /*
         * body, modal, drawer background & ring-offset-color
         */
        background: colors.white,

        /*
         * body text color
         */
        foreground: colors.gray[600],

        /*
         * border, default flat bg color for input components, tab & dropdown hover color
         */
        muted: colors.gray[200],

        /*
         * danger colors
         */
        red: {
          lighter: colors.rose[200],
          DEFAULT: colors.rose[500],
          dark: colors.rose[700],
        },

        /*
         * warning colors
         */
        orange: {
          lighter: colors.amber[200],
          DEFAULT: colors.amber[500],
          dark: colors.amber[700],
        },

        /*
         * info colors
         */
        blue: {
          lighter: colors.sky[200],
          DEFAULT: colors.sky[500],
          dark: colors.sky[700],
        },

        /*
         * success colors
         */
        green: {
          lighter: colors.emerald[200],
          DEFAULT: colors.emerald[500],
          dark: colors.emerald[700],
        },
      },

      backgroundImage: {
        circle: 'url("/circle.webp")',
        gradient: 'url("/bg-dark.webp")',
        cube: 'url("/cube.webp")',
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  container: {
    padding: {
      DEFAULT: "15px",
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
};
