/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "ui-sans-serif", "system-ui"],
        body: ["'Inter'", "ui-sans-serif", "system-ui"],
      },
      colors: {
        brand: {
          50: "#f1f5ff",
          100: "#e2e9ff",
          400: "#5b8def",
          500: "#3b82f6",
          600: "#2f6ed1",
        },
      },
      boxShadow: {
        soft: "0 10px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
