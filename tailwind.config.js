/** @type {import('tailwindcss').Config} */
import { fontFamily as ff } from 'tailwindcss/defaultTheme'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Space Grotesk', ...ff.sans],
    },
    extend: {
      boxShadow: {
        'xy-1': '1px 1.5px',
        'xy-2': '2px 3px',
        'xy-3': '3px 4.5px',
        'xy-4': '4px 6px',
        'xy-8': '8px 12px',
      },
    },
  },
  plugins: [],
}
