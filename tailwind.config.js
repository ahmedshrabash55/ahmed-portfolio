/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090D',
          900: '#0B0E14',
          800: '#12151D',
          700: '#171B24',
          600: '#20242F',
          500: '#2B303C',
          border: '#232733',
        },
        paper: {
          100: '#E9ECF2',
          300: '#B7BECC',
          500: '#8B93A3',
        },
        signal: {
          teal: '#5CE0C6',
          tealDim: '#3A9C8A',
          indigo: '#7C93FF',
          amber: '#E8B767',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      maxWidth: {
        content: '1180px',
      },
    },
  },
  plugins: [],
}
