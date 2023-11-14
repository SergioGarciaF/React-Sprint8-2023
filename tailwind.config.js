/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#a54ed8",

          "secondary": "#fce00f",

          "accent": "#f2b26a",

          "neutral": "#251b32",

          "base-100": "#e0e3eb",

          "info": "#37aaf1",

          "success": "#2ab769",

          "warning": "#e99d3a",

          "error": "#ec6f96",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

