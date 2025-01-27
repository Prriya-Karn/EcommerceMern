/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite/**/*.js",
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
        height:{
          "98" : "98",
          "200" : "200"
        },
        colors: {
        bg : "#FF735C",
        footerBg:"#F2F2F2",
        bodyColor : "#F3F4F6",
        revbg : "#FF9900",
        whatsapp : "#0FC145"
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
      },
        screens: {
        'xs': '260px', // Add a custom breakpoint
      },
      },
    },
    plugins: [daisyui], // Add DaisyUI as a plugin

   daisyui: {
  themes: ["light"], // Use the light theme only
},
  }
  
  