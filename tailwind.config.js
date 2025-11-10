/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        primary: '#E63946',
        'primary-dark': '#C1121F',
        'bg-dark': '#000000',
        'dark-gray': '#1A1A1A',
        'muted': '#F8F9FA'
      }
    }
  },
  plugins: []
}
