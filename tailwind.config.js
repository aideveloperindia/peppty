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
        subtle: "0 1px 3px rgba(0,0,0,0.05)",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      backdropBlur: {
        xs: '2px',
      },
    }
  },
  plugins: [],
}


