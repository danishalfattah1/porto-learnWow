/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        primary:'#2563eb'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

