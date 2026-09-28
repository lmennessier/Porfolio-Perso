/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "var(--ground)",
        station: "var(--station)",
        ink: "var(--ink)",
        muted: "var(--ink-2)",
        rule: "var(--rule)",
        line: "var(--line)",
        "line-deep": "var(--line-deep)",
      },
      fontFamily: {
        sans: ['"Overpass Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
