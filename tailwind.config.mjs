/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#323232",
        darkTheme: "#171717"
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        ovo: ["var(--font-ovo)", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 black',
        'white' : '4px 4px 0 white'
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
