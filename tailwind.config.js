module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {}
     },
     variants: {},
       plugins: [require('tailwindcss-font-inter')]

   }
