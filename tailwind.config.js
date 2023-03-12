/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'theme-color': '#97BF0F',
          'button-color': '#97BF0F',
          'icon-color': '#576D0D',
          'focus-color': '#81A30D',
          'icon-hover-color': '#607711',
          'button-hover-color': '#B9E623',
          'font-color': '#424242',

        },
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'],
          noto: ['Noto Serif TC', 'serif'],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      ["@babel/plugin-transform-react-jsx", { "throwIfNamespace": false }]
    ],
  }
