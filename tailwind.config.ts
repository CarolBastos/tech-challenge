import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#004D61",
        "secondary-color": "#FF5031",
        "accent-color": "#DEE9EA",
        "link-menu-color": "#024D60",
        "new-transaction": "#CBCBCB",
        "soft-green": "#E4EDE3",
        "menu-gray": "#f5f5f5"
      },
    },
    fontFamily: {
      sans: "Inter, sans-serif",
    },
  },
  plugins: [],
};
export default config;
