import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)"],
      },
      keyframes: {
        loaderWhite: {
          "0%": {
            right: "100%",
            left: "0%",
            width: '15vw',
            transform: "translateX(-100%)",
          },
          "50%,100%": {
            width: '15vw',
            transform: "translateX(0)",
            left: "100%",
            right: "0%"
          },
        },
        loaderBlue: {
          "0%": {
            right: "100%",
            left: "0%",
            width: '15vw',
            transform: "translateX(-100%)",
          },
          "50%,100%": {
            transform: "translateX(0)",
            width: '25vw',
            left: "100%",
            right: "0%"
          },
        },
        loaderYellow: {
          "0%": {
            right: "100%",
            left: "0%",
            width: '10vw',
            transform: "translateX(-100%)",
          },
          "50%,100%": {
            transform: "translateX(0)",
            width: '7vw',
            left: "100%",
            right: "0%"
          },
        },
        loaderRed: {
          "0%": {
            right: "100%",
            left: "0%",
            width: '15vw',
            transform: "translateX(-100%)",
          },
          "50%,100%": {
            transform: "translateX(0)",
            width: '15vw',
            left: "100%",
            right: "0%"
          },
        }
      }
    },
  },
  plugins: [
    plugin(({ addComponents, matchUtilities }) => {
      matchUtilities({
        "grid-area": value => ({
          gridArea: value
        }),
      })

      addComponents({
        ".no-scrollbar": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;
