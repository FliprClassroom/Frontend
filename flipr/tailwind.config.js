module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      textColor: {
        'primary': '#3490dc',
        'textColor':'#2f2d52',
        'secondary': '#ffffff',
        'danger': '#e3342f',
      },
      backgroundColor: theme => ({
        'primary': '#2f2d52',
        'secondary': '#fff',
        'danger': '#e3342f',
       }),
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }