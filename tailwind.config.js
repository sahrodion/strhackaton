module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        blue: {
          100: "#1466B8",
          200: "#4C68B3",

          700: "#0B131B",

          900: "#060B0F",
        },
        brown: {
          100: "#F7931A",
        },

        violet: {
          100: "#554DB2",
        },

        RoadmapColor: {
          100: "rgba(82, 82, 82, 0.1)",
        },

        purplee: {
          100: "#0F172A",
          200: "#EA3A60",
          300: "#ea3a6018",
        },
      },
    },
  },
  plugins: [],
};
