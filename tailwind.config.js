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
    fontSize: {
      base: ['16px', '24px'],
      small: '10px',
      sm: ['13px', '21px'],
      'h1': ['61px', '78px'],
      'h2': ['39px', '47px']
    }
  },
  plugins: [],
};
