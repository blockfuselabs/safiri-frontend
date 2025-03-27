/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        animation: {
          'float-1': 'float 4s ease-in-out infinite',
          'float-2': 'float 5s ease-in-out infinite',
          'float-3': 'float 6s ease-in-out infinite',
          'float-4': 'float 7s ease-in-out infinite',
          'bounce-slow': 'bounce 2s ease-in-out infinite',
          'fade-in': 'fadeIn 1s ease-out',
          'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          },
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' }
          },
          pulse: {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.7 }
          }
        }
      }
    },
    plugins: [],
  }