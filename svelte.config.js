import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			sourceMap: true,
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: true,
			strict: true
		})
	},

	vitePlugin: {
		experimental: {
			inspector: true
		}
	}
};

export default config;
