/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      sans: "Montserrat",
    },
    extend: {
      fontFamily: {
        fancy: ["Kalam"],
        gothic: ["Oswald"],
      },
      colors: {
        "accent-green": "#91EB94",
        "accent-pink": "#FD6263",
        "accent-orange": "#F9983F",
        "accent-purple": "#946FFF",
        bg: "#FFEBD6",
      },
      boxShadow: {
        bold: "4px 4px 0 #000000",
      },
    },
  },
  plugins: [],
};
