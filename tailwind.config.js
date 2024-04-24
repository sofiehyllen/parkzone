/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./src/ui/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    fontFamily: {
      'mundial': ['Mundial', 'sans-serif'],
      'league': ['League Spartan', 'sans-serif'],
    },
    fontMetrics: {
			'league': {
				capHeight: 1320,
				ascent: 1400,
				descent: -440,
				lineGap: 0,
				unitsPerEm: 2000,
			},
      'mundial': {
        capHeight: 1758,
				ascent: 1908,
				descent: -200,
				lineGap: 133,
				unitsPerEm: 2148,
      }
		},
    extend: {    
      colors: {
        'gray': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#131E31',
          900: '#0F172A',
        },
        'marine': {
          50: '#F2F7FF',
          100: '#DBE9FD',
          200: '#B3CFF8',
          300: '#7AA9EF',
          400: '#4A8CED',
          500: '#155FCB',
          600: '#133BA3',
          700: '#0C2B73',
          800: '#0A113B',
          900: '#040921',
        },
        'sky': {
          50: '#EDF6FD',
          100: '#DAEEFA',
          200: '#ABDAF4',
          300: '#7CC9ED',
          400: '#4FBAE8',
          500: '#1BA4E3',
          600: '#158AC5',
          700: '#0D6A9E',
          800: '#05486E',
          900: '#072D43',
        },
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
      },
      fontSize: {
        '5xl': '42px',
        '6xl': '48px'
      },
      borderRadius: {
        'sm': '5px'
      },
    },
  },
  plugins: [
    require('tailwindcss-capsize'),
    require("tailwindcss-inner-border"),
  ],
}

