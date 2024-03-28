/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Open Sans', 'arial', 'sans-serif'],
        serif: ['Open Sans', 'arial', 'sans-serif'],
        mono: ['Open Sans', 'arial', 'sans-serif']
			},
			colors: {
        offwhite: '#F7F5F1',
        darkGrey: '#AAA6A2',
        accessibleGreen: '#26890D',
        brightGreen: '#86BC25'
      }
		},
	},
	plugins: [],
	corePlugins: {
    container: false,
  },
}
