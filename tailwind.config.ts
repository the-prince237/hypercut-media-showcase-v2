/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/components/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/app/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/containers/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/sections/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/providers/**/*.{tsx,ts,jsx,js,mdx}",
    "./src/theme/**/*.{tsx,ts,jsx,js,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#DE16FF"
      },
      screens: {
        laptopView: '1500px',
        minLaptop: '1024px',
        largeTablet: '905px',
        tablet: '768px',
        smallTablet: '620px',
        mobile: '425px',
        medMobile: '380px',
        minMobile: '320px',
      },
    },
  },
  plugins: [],
};
