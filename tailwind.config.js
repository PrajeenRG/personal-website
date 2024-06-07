/** @type {import('tailwindcss').Config} */
import { fontFamily as ff } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Space Grotesk', ...ff.sans]
		},
		extend: {
			boxShadow: {
				'xy-1': '0.125em 0.125em',
				'xy-2': '0.25em 0.25em',
				'xy-4': '0.5em 0.5em',
				'xy-8': '1em 1em'
			}
		}
	},
	plugins: []
};
