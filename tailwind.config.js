/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Notosans: ["Noto Sans Japanese", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
