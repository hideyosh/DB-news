/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"], 
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
        flex: ['Roboto Flex', 'serif'],
        serif: ['Roboto serif', 'serif']
      },
      colors: {
        primary: {
          default: '#556E98',
          darker: '#465F89',
          lighter: '#8ea3c7'
        },
        secondary: '#F4F8FF',
        light: '#F3F3F3',
        dark: '#31363F'
      },
      height: {
        '104': '29rem'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}