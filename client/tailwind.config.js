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
        primary: "#1D4ED8", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#F59E0B", // Custom accent color
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
  
  