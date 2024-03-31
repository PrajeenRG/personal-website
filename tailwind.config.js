/** @type {import('tailwindcss').Config}*/
import { fontFamily as ff } from 'tailwindcss/defaultTheme';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontFamily: {
			sans: ['Plus Jakarta Sans', ...ff.sans],
			mono: ['DM Mono', ...ff.mono]
		}
	},

	plugins: []
};

export default config;
