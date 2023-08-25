/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          '50': '#e7fff9',
          '100': '#c6ffef',
          '200': '#92ffe5',
          '300': '#4dffdd',
          '400': '#4defce',
          '500': '#00e8b9',
          '600': '#00be99',
          '700': '#00987f',
          '800': '#007866',
          '900': '#006255',
        }

      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {

      'xs': '0px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1792px',
      // => @media (min-width: 1792px) { ... }
    }
  },


  plugins: [],
}
