module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  purge: {
    content: [
      './pages/*.{js,ts,jsx,tsx}',
      './components/*.{js,ts,jsx,tsx}'
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['Sansita', 'sans-serif'],
      },
      backgroundColor: {
        'megaranica': '#111111',
        'mint': '#F9A9B5',
        'mintcard': '#F5F5F5',
      },
    },
  },
  plugins: [],
}