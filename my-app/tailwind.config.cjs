/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],


  // daisyUI config (optional)
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#111827",
          "secondary": "#f3f4f6",
          // "accent": "#1e40af",
          // "accent": "#9BE4D1",
          // "accent": "#32DEFF",
          "accent": "#3BD1E8",
          "neutral": "#6b7280",
          "base-100": "#fff",
          // "base-100": "#f3f4f6",
          "info": "#398BEA",
          "success": "#61EADD",
          "warning": "#F0C066",
          "error": "#EB608C",
        },
      }
    ],
    // darkTheme: "light",

  },
};