module.exports = {
  content: [
      "./src/**/*.html",
      './src/modules/**/*.{html, css, js}',
      './src/templates/**/*.{html, css, js}',
  ],
  theme: {
    fontFamily: {
      'display': ['Onest', 'Arial', 'sans-serif'],
      'body': ['Poppins', 'Arial', 'sans-serif']
    },
    screens: {
      'md': '769px',
      'lg': '1025px',
      'xl': '1280px',
    },
    colors: {
      'purple': '#B016E3',
      'purple-950': '#440055'
    }    
  },
  important: true,
  plugins: [],
};
