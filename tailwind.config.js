/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        shade1: "#44BEA5",
        shade2: "#225f53",
        shade3: "#FF9321",
        shade4: "#62BDF3",
      },
      screens: {
        xs: "278px",
        ss: "450px",
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1536px",
      },
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"],
      Varela: ["Varela Round", "sans-serif"],
    },
  },
  plugins: [],
};
