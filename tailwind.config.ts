import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        landing:
          "url('https://res.cloudinary.com/jacob-sturges/image/upload/f_auto/v1539734430/web-resume/museum.jpg')",
      },
      colors: {
        black: "var(--black)",
        "light-grey": "var(--light-grey)",
        "medium-light-grey": "var(--medium-light-grey)",
      },
    },
  },
  plugins: [],
};
export default config;
