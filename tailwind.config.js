module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#e5e7eb',
          300: '#d1d5db',
          600: '#4b5563',
          800: '#1f2937',
        },
        teal: {
          600: '#0d9488',
          700: '#0f766e',
        },
      },
    },
  },
  plugins: [],
}