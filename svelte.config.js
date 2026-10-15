import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Deploys to Vercel, see https://svelte.dev/docs/kit/adapter-vercel
		adapter: adapter()
	}
};

export default config;
