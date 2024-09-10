/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#39546d', // Blue
        'custom-white': '#f2f4f3', // White
        'custom-green': '#ccdbdc', // Pastel green/blue
        'custom-yellow': '#faf7ee', // Pastel yellow
      },
    },
  },
  plugins: [],
};
