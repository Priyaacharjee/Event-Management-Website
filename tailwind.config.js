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
        assembleText: 'assembleText 1s ease-out'
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
          "0%": { transform: "translateY(-100%)"},
          "100%": { transform: "translateY(0)"},
        },

        slideUp: {
          "0%": { transform: "translateY(0)"},
          "100%": { transform: "translateY(-100%)"},
        },
        
        assembleText: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.8) translateY(20px)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.05) translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1) translateY(0)'
          }
        }
      },

      screens: {
        'xs': '320px', 
      },
    },
  },
  plugins: [],
};
