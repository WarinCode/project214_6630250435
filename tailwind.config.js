/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ["Poppins", "sans-serif"],
      'k2d': ["K2D", "sans-serif"]
    },
    extend: {
      colors: {
        'primary': "#111111",
        'secondary': "#F0F0F0",
        'tertiary': "#C4C4C4",
        'line': "#C6C6C6",
        // https://www.designpieces.com/palette/vue-js-color-palette-hex-and-rgb/
        'ocean-green': "#42b883",
        'pickled-bluewood': "#35495e"
      },
    },
  },
  plugins: [],
}