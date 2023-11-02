/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Noto Sans Bhaiksuki",
        body: "Noto Sans Bhaiksuki",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: "#170207",
        background: "#fffafc",
        primary: "#4ada16",
        secondary: "#fde8ee",
        accent: "#2e60ea",
      },
    },
  },
  plugins: [],
};
