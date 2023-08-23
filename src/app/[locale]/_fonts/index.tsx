import localFont from "next/font/local";

export const avenir = localFont({
  src: [
    {
      path: "./avenir-roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./avenir-heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  display: "swap",
  variable: "--font-avenir",
});
