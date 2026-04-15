import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Папка с роутами
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Kомпоненты
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",  // Если будут константы
  ],
  theme: {
    extend: {
      colors: {
        "Grey-green": "#829B91",
        "Green Hover": "#6D7B75",
        "Badges": "#F2F4F7",
        "Inputs": "#F7F7F7", 
        "Rating": "#FFC531",
        "Gray": "#6C717B",
        "White": "#FFFFFF",
        "Text": "#475467",
        "Main": "#101828",
        "Gray light": "#DADDE1",
      },
    },
  },
  plugins: [],
};
export default config;