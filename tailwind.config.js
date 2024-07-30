/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xlmax': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xlmax': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lgmax': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mdmax': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smmax': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

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
    },
    extend: {
      fontFamily: {
        'abril': ['Abril Fatface', 'cursive'],
        'zilla-slab': ['Zilla Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

