const preprocess = require('svelte-preprocess');
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
	framework: '@storybook/svelte',
	core: { builder: 'storybook-builder-vite' },
	async viteFinal(config) {
		config.optimizeDeps.include = [
			...config.optimizeDeps.include,
			'@storybook/svelte',
			'@storybook/addon-svelte-csf'
		];
		return config;
	},
	svelteOptions: {
		preprocess: preprocess(import('../svelte.config.js').preprocess)
	}
};
