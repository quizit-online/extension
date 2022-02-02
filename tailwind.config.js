module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        card: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#6366f1",
        },
        gray: {
          600: "#606060",
        },
      },
    },
  },
  plugins: [],
};
