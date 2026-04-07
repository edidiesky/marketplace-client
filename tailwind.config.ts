import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        custom: "1fr auto",
        custom_2: "auto 1fr",
      },
      fontFamily: {
        selleasy_normal: ["Light", "sans-serif"],
        selleasy_bold: ["Medium", "sans-serif"],
        selleasy_regular: ["Regular", "sans-serif"],
        dashboard_regular: ["Dashboard_Medium_Font", "sans-serif"],
        dashboard_normal: ["Dashboard_Regular_Font", "sans-serif"],
        work_font: ["Work Sans", "sans-serif"],
        k_font: ["Karla", "sans-serif"],
      },
      maxWidth: {
        custom: "1310px",
        custom_1: "1310px",
        custom_dashboard: "1210px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
