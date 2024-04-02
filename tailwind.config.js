/** @type {import('tailwindcss').Config}*/
import { fontFamily as ff } from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Jost Variable', 'Jost', ...ff.sans],
			mono: ['DM Mono', ...ff.mono]
		}
	},

	plugins: []
};

export default config;
