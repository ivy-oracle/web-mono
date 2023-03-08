/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: [
        "Menlo,\\ Monaco",
        "ui-monospace",
        "monospace",
        "SFMono-Regular",
        "Consolas",
        "Liberation Mono",
        "Courier\\ New",
      ],
      display: ["Noto Sans", "sans-serif"],
      body: ["Noto Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
