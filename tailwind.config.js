module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "translate(0, 10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
