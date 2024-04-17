/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'black-06': '#0F0F0F',
      'black-10': '#1A1A1A',
      'black-1': '#272727',
      'black-2': '#3A3A3A',
      'grey-75': '#BFBFBF',
      'grey-10': '#EDF1F3',
      'white': '#ffffff',
      'error': '#FF0000',
      'blue': '#72AEC8'
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'jost': ['Jost', 'sans-serif']
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

