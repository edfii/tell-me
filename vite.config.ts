import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	base: "https://edfii.github.io/tell-me/",
	plugins: [sveltekit()]
};

export default config;
