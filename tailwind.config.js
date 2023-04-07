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
              color: theme('colors.red.600'),
              fontWeight: 500,
            },
            'code::before, code::after': {
              content: '',
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
              color: theme('colors.zinc.100'),
              '&:hover': {
                color: theme('colors.teal.500'),
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
            },
          },
        },
      }),
    },
  },

  plugins: [require('@tailwindcss/typography')],
};
