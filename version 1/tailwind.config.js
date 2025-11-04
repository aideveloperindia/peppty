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
      boxShadow: {
        subtle: "0 10px 30px rgba(0,0,0,0.06)"
      }
    }
  },
  plugins: [],
}


