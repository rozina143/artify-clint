/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // still required
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // you can add more: ["light", "dark", "cupcake", "forest"]
  },
};

