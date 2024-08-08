/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideIn: "slideIn 1s ease-in-out",
        slideOut: "slideOut 1s ease-in-out",
        slideBelow: "slideBelow 1s ease-in-out",
        slideUp: "slideUp 1s ease-in-out",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)"},
          "100%": { transform: "translateX(0)" },
        },

        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)"},
        },

        slideBelow: {
          "0%": { transform: "translateY(-100%)",opacity: 0 },
          "100%": { transform: "translateY(0)",opacity: 1},
        },

        slideUp: {
          "0%": { transform: "translateY(0)",opacity: 1},
          "100%": { transform: "translateY(-100%)",opacity: 0,},
        },
      },
    },
  },
  plugins: [],
};
