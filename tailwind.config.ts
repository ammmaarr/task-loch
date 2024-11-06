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
        "main-gradient":
          "radial-gradient(79.84% 79.84% at 32.27% 91.27%, rgba(31, 169, 17, 0.810119) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0) 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 27.5%, rgba(22, 93, 255, 0.162) 157.71%)",
        overlay:
          "linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1) 100%)",
      },
      colors: {
        "main-dark": "#19191A",
      },
      width: {
        "main-container": "min(100%, 1440px)",
      },
    },
  },
  plugins: [],
};
export default config;
