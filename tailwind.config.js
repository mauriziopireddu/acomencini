module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#22605e",
      },
      fontFamily: {
        heading: "Architects Daughter",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
