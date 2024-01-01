/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'white': '#EEEEEE', 
        'primary': '#222831',
        'secondary': '#393E46',
        'accent': '#FF6700',
        'gray': '#6C6C6C'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        }
      },
      boxShadow: {
        "lg": "7px 10px 10px -3px rgb(0 0 0 / 0.15), 0 0px 10px 4px rgb(0 0 0 / 0.09);"
      }
    },
  },
  plugins: [],
}
