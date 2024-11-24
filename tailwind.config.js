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
          darker: '#465F89'
        },
        secondary: '#F4F8FF',
        light: '#F3F3F3',
        dark: '#31363F'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}