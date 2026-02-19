/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#080b14',
        card: '#0f1629',
        accentBlue: '#2c8bff',
        accentRed: '#ff3b62'
      },
      boxShadow: {
        glow: '0 0 40px rgba(44, 139, 255, 0.2)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)'
      }
    }
  },
  plugins: []
}
