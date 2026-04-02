/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'monospace'],
        body: ['Sora', 'sans-serif'],
      },
      colors: {
        neon: '#5b6ef5',
        neon2: '#a259ff',
        neon3: '#00cfff',
      },
    },
  },
  plugins: [],
}
