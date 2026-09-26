<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import { setLocale, supportedLocales, type SupportedLocale } from '$lib/i18n/index.js';

	const storageKey = 'dokter-metabolik-locale';
	function selectLocale(nextLocale: SupportedLocale) {
		setLocale(nextLocale);
		localStorage.setItem(storageKey, nextLocale);
	}

	onMount(() => {
		const savedLocale = localStorage.getItem(storageKey);
		if (supportedLocales.includes(savedLocale as SupportedLocale))
			selectLocale(savedLocale as SupportedLocale);
	});
</script>

<div class="flex items-center rounded-lg border p-0.5" aria-label={$_('language.label')}>
	<Button
		variant={$locale === 'id' ? 'secondary' : 'ghost'}
		size="xs"
		aria-label={$_('language.indonesian')}
		aria-pressed={$locale === 'id'}
		onclick={() => selectLocale('id')}>ID</Button
	>
	<Button
		variant={$locale === 'en' ? 'secondary' : 'ghost'}
		size="xs"
		aria-label={$_('language.english')}
		aria-pressed={$locale === 'en'}
		onclick={() => selectLocale('en')}>EN</Button
	>
</div>
