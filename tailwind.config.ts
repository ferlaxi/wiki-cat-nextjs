import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cat-black': '#291507',
        'cat-gray': '#BDBDBD',
        'cat-gray2': '#F2F2F2',
        'cat-gray3': '#9797971A',
        'cat-bg': '#E3E1DC',
        'cat-border-line': '#4D270C',
        'cat-link': '#29150799',
        'cat-decoration': '#DEC68B',
        'cat-rate1': '#544439',
        'cat-rate2': '#E0E0E0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
export default config
