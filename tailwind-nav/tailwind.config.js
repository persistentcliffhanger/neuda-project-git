/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('img/hand.jpg')",
        "footer-texture": "url('img/hand.jpg')",
      },
    },
    plugins: [],
  },
};
