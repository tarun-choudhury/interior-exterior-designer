import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--julius-sans-one)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif'
        ],
        serif: ['var(--merriweather)', 'Georgia', 'ui-serif', 'serif'],
        mono: ['ui-monospace', 'monospace'],
        italic: ['var(--italianno)', 'ui-serif', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        30: {
          light: '#717568', // For lighter color
          DEFAULT: '#984447', // Normal color
          dark: '#FF6663' // Used for hover, active, etc.
        },
        10: {
          light: '#717568', // For lighter color
          DEFAULT: '#fdfd96', // Normal color
          dark: '#e4d17f' // Used for hover, active, etc.
        },
        60: {
          light: '#f8f8f8', // For lighter color
          DEFAULT: '#E1E3E3', // Normal color
          dark: '#0d1b1e' // Used for hover, active, etc.
        }
      }
    }
  },
  plugins: [require('kutty')]
}
export default config
