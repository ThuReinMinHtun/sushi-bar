/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'sansita': ["Sansita", 'sans-serif'],
        'domine': ["Domine", 'serif'],
      },
      colors: {
        'primary': '#F62500',
        'btn': '#FF6347',
        'icon': '#2E1814',
      },
      backgroundImage: {
        'breadcrumb': "url(/images/huhh.jpg)",
      },
    },
  },
  plugins: [],
}

