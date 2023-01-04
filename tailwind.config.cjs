/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  //prefix: 'dozer-'
}
