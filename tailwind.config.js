/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['"ADLaM Display"', 'serif'], // Define la fuente "adlam"
      },
      fontWeight: {
        adlam: '400', // Define el peso de la fuente
      },
      fontStyle: {
        adlam: 'normal', // Define el estilo de la fuente
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

