{import('tailwindcss').config}

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
         "primary": "#24262b",
         "primary-gray": "#5e626f;",
         "primary-green": "#0D775E;",
         "red-gray": "#444444",
         "white-100": "#F3F3F3",
      },
    },
  },
  plugins: [],
};