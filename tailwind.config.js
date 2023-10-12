/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2028",
        secondary: "#21272f",
      },
    },
  },
  darkMode: "class",

  plugins: [],
};
