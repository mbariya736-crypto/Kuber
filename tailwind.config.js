/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#082B59',
          royal: '#0866E8',
          cyan: '#00B9E8',
          light: '#F4F8FD',
          card: '#FFFFFF',
          dark: '#041731',
          accent: '#00D2FF',
          muted: '#5A6E85'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(8, 43, 89, 0.06), 0 4px 10px -2px rgba(8, 43, 89, 0.03)',
        'premium': '0 20px 40px -10px rgba(8, 43, 89, 0.1), 0 8px 16px -4px rgba(8, 102, 232, 0.06)',
        'glow': '0 0 25px rgba(8, 102, 232, 0.25)',
        'glow-cyan': '0 0 25px rgba(0, 185, 232, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, rgba(8, 102, 232, 0.05) 0%, rgba(0, 185, 232, 0.05) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #082B59 0%, #0866E8 60%, #00B9E8 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0866E8 0%, #00B9E8 100%)',
      }
    },
  },
  plugins: [],
}

