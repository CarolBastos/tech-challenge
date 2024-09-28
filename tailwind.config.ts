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
        //brand-colors
        "primary-color": "#004D61",
        "secondary-color": "#FF5031",
        "tertiary-color": "#47A138",
        //neutral-colors
        "accent-color": "#DEE9EA",
        "link-menu-color": "#024D60",
        "new-transaction": "#CBCBCB",
        "soft-green": "#E4EDE3",
        "menu-gray": "#f5f5f5"
        //extra-colors
        //warning-colors
      },
    },
    fontSize: {
      xxs:'0.75rem', //12px
      xs:'0.875rem', //14px
      sm:'1rem', //16px
      md:'1.125rem', //18px
      lg:'1.25rem', //20px
      xl:'1.563rem', //25px
      '2xl':'1.75rem', //28px
      '3xl':'1.938rem', //31px
    },
    maxWidth: {
      'sm': '19.5rem',
      'md': '37.5rem',
      'lg': '75rem',
      'hero': '27.125rem',
    },
    fontFamily: {
      sans: "Inter, sans-serif",
    },
  },
  plugins: [],
};
export default config;
