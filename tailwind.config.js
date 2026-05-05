/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pulse: {
          bg: '#F4ECE5',
          card: '#FFFDFB',
          accent: '#7A1F1F',
          accentSoft: '#E8D4D0',
          text: '#2F2623',
          muted: '#8A7970',
          border: '#E8DDD4',
        },
      },
      boxShadow: {
        glow: '0 20px 45px rgba(122, 31, 31, 0.08)',
        card: '0 10px 30px rgba(70, 46, 38, 0.08)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        veil: 'radial-gradient(circle at top left, rgba(122, 31, 31, 0.12), transparent 35%), linear-gradient(180deg, #F8F1EA 0%, #F3E9E1 100%)',
      },
    },
  },
  plugins: [],
};
