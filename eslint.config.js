import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';
import ts from 'typescript-eslint';
import { loadConfig } from '@sveltejs/load-config';

const svelteConfig = (await loadConfig('./', { traverse: false }))?.config;

export default defineConfig(
	{ ignores: ['.svelte-kit/**', 'build/**', 'dist/**', 'node_modules/**'] },
	js.configs.recommended,
	ts.configs.recommended,
	svelte.configs.recommended,
	svelte.configs.prettier,
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{
		files: ['**/*.svelte', '**/*.svelte.ts'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig,
			},
		},
	},
	{
		rules: {
			// Shared components accept external and internal URLs, so route resolution belongs to their callers.
			'svelte/no-navigation-without-resolve': 'off',
		},
	},
);
