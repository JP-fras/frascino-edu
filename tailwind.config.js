/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#06402B',
        'verde-menta': '#C6F6D5',
        'naranja-claro': '#FFA726',
        'texto-principal': '#1A1A1A',
        'fondo-alternativo': '#F5F5F5',
      },
      fontFamily: {
        'titulo': ['Poppins', 'sans-serif'],
        'cuerpo': ['Inter', 'sans-serif'],
        'codigo': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}