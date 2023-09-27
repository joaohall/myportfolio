import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'inter': ['inter', 'sans-serif']
    },
    extend: {
      keyframes: {
        slidedown: {
          '0%': { transform: 'translateY(-3rem)', opacity: '0'},
          '100%': { transform: 'translateY(0rem)', opacity: '1'},
        },
      },
      animation: {
        slidedown: 'slidedown 1s  cubic-bezier(0.075, 0.82, 0.165, 1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}
export default config
