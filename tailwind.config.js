/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  corePlugins: {
  preflight: false,
  },
  prefix: 'tw-',
  important: true,
  content: ["*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

