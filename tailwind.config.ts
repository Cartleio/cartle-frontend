import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          100: "#E5E5E5",
        },
        primary: {
          500: "#FF7600",
          100: "#FFF1E6",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        libre: ["var(--font-libre)"],
      },
    },
  },
  plugins: [],
};
export default config;
