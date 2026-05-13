/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        secondary: "#0f172a",
        primary: "#7c3aed",
        accent: "#3b82f6",
        cyanGlow: "#06b6d4"
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, rgba(5, 8, 22, 1) 100%)',
      }
    },
  },
  plugins: [],
}
