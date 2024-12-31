/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: '#175CFF',
        dark: '#1D2739',
        grey: '#344054',
        grey1: '#667185',
        grey2: '#555E68', 
        grey3: '#344054',
        grey4: '#98A2B3',
        grey5: '#D9D9D9',
        grey6: '#475367',
        grey7: '#101928',
        error: '#D42620',
        reddish: '#FFECE5',
        header: {
          DEFAULT: '#F0F2F5',
        },
        sidebar: {
          DEFAULT: '#F7F9FC',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
