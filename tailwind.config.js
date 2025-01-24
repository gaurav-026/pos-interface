/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      kavoon: ['Kavoon', 'cursive'],
    },
    extend: {
      colors:{
        white: '#ffffff',
        black: '#000000',
        blue:'#00a3ac',
        grey: '#5a5a5a',
        lightGrey: '#eeeeee',
        hoverBlue: '#02cad5'
      }
    },
    
  },
  plugins: [],
}

