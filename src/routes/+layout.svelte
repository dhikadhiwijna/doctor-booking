<script lang="ts">
	import './layout.css';
	import { onNavigate } from '$app/navigation';
	import { ModeWatcher } from 'mode-watcher';
	import '$lib/i18n/index.js';
	import { locale } from 'svelte-i18n';

	const { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(() => {
				resolve();
				return navigation.complete;
			});
		});
	});

	$effect(() => {
		document.documentElement.lang = $locale ?? 'id';
	});
</script>

<ModeWatcher defaultMode="system" themeColors={{ light: '#21352d', dark: '#101915' }} />
{@render children()}
