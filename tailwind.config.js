const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#ffffff",
      "secondary-prime": "#0C1844",
      "secondary-main": "#006989",                          
      "tertiary-prime": "#C2D9FF",
      "tertiary-main": "#FF7D29",
      glassy: "rgba(255, 255, 255, 0.3);",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Notosans: ["Noto Sans", "sans-serif"],
      "Open-sans": ["Open Sans", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
    },
    boxShadow: {
      "shadow-inset":
        "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;",
    },

    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".Showdesktoponly": {
          display: "none",
        },
        "@screen md": {
          ".Showdesktoponly": {
            display: "block",
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
    function ({ addComponents }) {
      addComponents({
        ".Doublecol": {
          "@apply grid lg:grid-cols-2 place-items-center": {},
        },
        ".Row-center": {
          "@apply flex justify-center items-center": {},
        },
        ".Col-center": {
          "@apply flex flex-col justify-center items-center": {},
        },
        ".Overlay-center": {
          "@apply absolute w-full top-0 left-0 Row-center": {},
        },
        ".Navlink": {
          "@apply flex items-center text-secondary-prime": {},
        },
        ".Primarybtn": {
          "@apply bg-secondary-prime font-Poppins font-medium text-base": {},
        },
      });
    },
  ],
});
