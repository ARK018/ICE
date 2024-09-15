/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "card-shadow":
          "rgba(23, 22, 31, 0.12) 0px 30px 56px -18px, rgba(0, 0, 0, 0.05) 0px 18px 32px -24px",
      },
    },
  },
  plugins: [],
};
