/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#10F1DC',
      'purple': '#e994bc',
      'pink': '#f70776',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#303030',
      'gray': '#828282',
      'gray-light': '#d3dce6',
      'white': '#FFFFFF',
     
    },
    extend: {},
  },
  plugins: [],
}
