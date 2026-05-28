/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // Minimalist matte zinc-950
        secondary: "#18181b", // Zinc-900 for cards/panels
        primary: "#6366f1", // Elegant Indigo primary accent
        accent: "#4f46e5", // Deep Indigo secondary accent
        cyanGlow: "#71717a", // Redefined to subtle Zinc-500
        pinkGlow: "#a1a1aa", // Redefined to clean Zinc-400
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.04) 0%, rgba(9, 9, 11, 1) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'float-medium': 'float 8s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }, // Highly subtle drifting
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.2', filter: 'blur(100px)' },
          '50%': { opacity: '0.4', filter: 'blur(120px)' },
        }
      }
    },
  },
  plugins: [],
}
