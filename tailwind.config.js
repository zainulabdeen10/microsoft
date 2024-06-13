/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        segoe: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif']
      },
      fontSize: {
        '13px': '0.8125rem',  // 13px / 16px = 0.8125rem
      },
      colors: {
        'custom-gray': '#F2F2F2'
      },
      spacing: {
        '4.5rem': '4.5rem',  // Custom spacing value for 4.5rem
      },
      screens:{
        '2xl':'1536px',
        '4xl':'2560px',

      },
    },
  },
  plugins: [],
}
