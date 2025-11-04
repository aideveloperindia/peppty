/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ed1e24",
        primaryHover: "#c4161a",
        background: "#ffffff",
        surface: "#f8fafb",
        text: "#0f172a",
        muted: "#6b7280"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-md': ['60px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['60px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'subhead': ['28px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'subhead-md': ['24px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
      },
      boxShadow: {
        subtle: "0 10px 30px rgba(0,0,0,0.06)",
        glow: "0 0 30px rgba(237, 30, 36, 0.3)",
        'glow-lg': "0 0 50px rgba(237, 30, 36, 0.4)",
        'glass': "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
        'blink': 'blink 1s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(237, 30, 36, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(237, 30, 36, 0.6)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    }
  },
  plugins: [],
}


