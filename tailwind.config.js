/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        primary: "#ff6e6c",
        secondary: "#67568c",
      },
    },
  },
  plugins: [],
};
