import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'header': 'min-content minmax(80px,200px) 1fr max-content'
      },
      colors: {
        'text': '#323b41',
        'gray-light': '#a9acb5',
        'gray-soft': '#919191',
        'gray-dark': '#54565a',
        'white-soft': '#dadada',
        'white-light': "#eeeeee"
      },
      spacing: {
        header: '74px'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '18px',
        'md': '40px',
        'lg': '85px'
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
export default config
