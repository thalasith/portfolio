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
      colors: {
        "matte-orange": "#F2B988",
        "bubble-gum": "#DFBCBD",
        "purple-planet": "#8E6FF2",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
