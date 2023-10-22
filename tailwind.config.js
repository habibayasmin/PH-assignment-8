/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#90a7f9",
        
"secondary": "#46ce88",
        
"accent": "#8fe0e8",
        
"neutral": "#292f32",
        
"base-100": "#f8f6f9",
        
"info": "#74c7f1",
        
"success": "#28d7a0",
        
"warning": "#fcbe22",
        
"error": "#e23f36",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}



