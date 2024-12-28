/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        zIndex: {
          '-60': '-60', // Add custom negative z-index value
        },

        width : {
          "1000" : "1000",
          "500" : "500",
          "6/2" : "6/5"
        },
        colors: {
        bg : "#FF735C",
        bodyColor : "#F3F4F6"
        
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
        
      },
    },
    plugins: [],
  }
  
  