/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
		}
	},
	plugins: [],
	// future: {
	// 	hoverOnlyWhenSupported: true
	// }
};
