/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        cycling: "url('/assets/wallpaper.jpg')",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
