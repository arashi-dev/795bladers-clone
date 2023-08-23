import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avenir: ["var(--font-avenir)"],
      },
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
