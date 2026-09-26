<script lang="ts">
	import { onMount } from 'svelte';
	import { locale, _ } from 'svelte-i18n';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group/index.js';
	import { setLocale, supportedLocales, type SupportedLocale } from '$lib/i18n/index.js';

	const storageKey = 'dokter-metabolik-locale';
	function selectLocale(nextLocale: string) {
		const next = nextLocale as SupportedLocale;
		if (!supportedLocales.includes(next)) return;
		setLocale(next);
		localStorage.setItem(storageKey, next);
	}

	onMount(() => {
		const savedLocale = localStorage.getItem(storageKey);
		if (savedLocale && supportedLocales.includes(savedLocale as SupportedLocale))
			selectLocale(savedLocale);
	});
</script>

<ToggleGroup
	type="single"
	value={$locale ?? undefined}
	onValueChange={selectLocale}
	class="gap-0.5"
	variant="default"
	size="sm"
	aria-label={$_('language.label')}
>
	<ToggleGroupItem
		class="h-7 rounded-md border-b-2 border-transparent bg-transparent px-1.5 text-[10px] font-bold tracking-wide text-muted-foreground shadow-none transition-colors duration-200 hover:bg-transparent hover:text-foreground data-[state=on]:bg-transparent data-[state=on]:text-coral data-[state=on]:shadow-none data-[state=on]:[border-bottom-color:currentColor] motion-reduce:transition-none"
		value="id"
		aria-label={$_('language.indonesian')}>ID</ToggleGroupItem
	>
	<ToggleGroupItem
		class="h-7 rounded-md border-b-2 border-transparent bg-transparent px-1.5 text-[10px] font-bold tracking-wide text-muted-foreground shadow-none transition-colors duration-200 hover:bg-transparent hover:text-foreground data-[state=on]:bg-transparent data-[state=on]:text-coral data-[state=on]:shadow-none data-[state=on]:[border-bottom-color:currentColor] motion-reduce:transition-none"
		value="en"
		aria-label={$_('language.english')}>EN</ToggleGroupItem
	>
</ToggleGroup>
