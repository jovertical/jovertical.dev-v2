/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.zinc.600'),
            a: {
              color: theme('colors.teal.500'),
              'text-decoration-color': theme('colors.teal.100'),
              'text-decoration-thickness': '2px',
              fontWeight: 600,
              '&:hover': {
                color: theme('colors.teal.600'),
                'text-decoration-color': theme('colors.teal.500'),
              },
            },
            code: {
              color: theme('colors.zinc.400'),
              fontWeight: 500,
            },
            h1: {
              color: theme('colors.zinc.900'),
            },
            'h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.800'),
            },
            'blockquote, strong': {
              color: theme('colors.zinc.600'),
              borderLeftColor: theme('colors.teal.400'),
            },
            code: {
              color: theme('colors.zinc.700'),
              fontWeight: 500,
            },
            pre: {
              color: 'var(--code-text-color)',
              backgroundColor: 'var(--code-background-color)',
            },
          },
        },

        invert: {
          css: {
            color: theme('colors.zinc.400'),
            a: {
              color: theme('colors.teal.500'),
              'text-decoration-color': theme('colors.teal.800'),
              'text-decoration-thickness': '2px',
              fontWeight: 600,
              '&:hover': {
                'text-decoration-color': theme('colors.teal.500'),
              },
            },
            h1: {
              color: theme('colors.zinc.100'),
            },
            'h2, h3, h4, h5, h6': {
              color: theme('colors.zinc.200'),
            },
            'blockquote, strong': {
              color: theme('colors.zinc.300'),
              borderLeftColor: theme('colors.teal.400'),
            },
            code: {
              color: theme('colors.zinc.300'),
              fontWeight: 500,
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
