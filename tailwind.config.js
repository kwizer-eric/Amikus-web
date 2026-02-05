/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA500', // Orange
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        serif: ['Boska', 'serif'],
        sans: ['Boska', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
