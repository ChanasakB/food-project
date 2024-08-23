/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'cream': '#FCF8F5',
      'red': '#952C0C',
      'pink': '#ff49db',
      'orange': '#C83B0E',
      'green': '#44A181',
      'brown': '#952C0C',
      'gray': '#7E7D7B',
      'while' : '#FFFFFF'
    },
    fontFamily: {
      'redhat' : ["Red Hat Text", "sans-serif"],
    }, 
    extend: {
    },
  },
  plugins: [],
}

