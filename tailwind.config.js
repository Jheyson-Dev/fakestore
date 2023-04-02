/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#0087FD',
        'black-primary': '#424656',
        'gray-primary': '#A6ABBD',
        'gray-secondary': '#D9D9D9',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
