/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
    './src/**/*.js',
    './src/**/*.css',
    './node_modules/@my-company/tailwind-components/**/*.js',
    path.join(path.dirname(require.resolve('@my-company/tailwind-components')), '**/*.js'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
menuButton.addEventListener('click', function () {
  let classList = document.getElementById('nav').classList
  classList.toggle('hidden')
  classList.toggle('block')
})
