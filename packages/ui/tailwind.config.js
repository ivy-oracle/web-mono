/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
  corePlugins: {
    preflight: false,
  },
};
