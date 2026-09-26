<script lang="ts">
	import { Menu, Search, X } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	let menuOpen = $state(false);
</script>

<header class="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:h-22 sm:px-8">
	<a class="inline-flex items-center gap-2.5" href="/" aria-label={$_('brand.home')}
		><span
			class="grid size-8 place-items-center rounded-full bg-coral font-serif text-sm italic text-paper"
			>dm</span
		><span class="text-xs font-bold leading-none tracking-tight">dokter<br />metabolik</span></a
	>
	<nav
		class="hidden items-center gap-8 text-sm text-ink/70 md:flex"
		aria-label={$_('navigation.primary')}
	>
		<a class="transition-colors hover:text-coral" href="/articles">{$_('navigation.articles')}</a><a
			class="transition-colors hover:text-coral"
			href="/topics">{$_('navigation.topics')}</a
		><a class="transition-colors hover:text-coral" href="/about">{$_('navigation.about')}</a>
	</nav>
	<div class="flex items-center gap-1">
		<LanguageSwitcher /><Button
			variant="ghost"
			size="icon"
			class="hidden md:inline-flex"
			aria-label={$_('navigation.search')}><Search /></Button
		><Button
			variant="ghost"
			size="sm"
			class="gap-2"
			onclick={() => (menuOpen = !menuOpen)}
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			>{#if menuOpen}<X />{:else}<Menu />{/if}<span class="md:hidden">{$_('navigation.menu')}</span
			></Button
		>
	</div>
</header>
{#if menuOpen}<nav
		id="mobile-navigation"
		class="absolute inset-x-4 top-16 z-20 rounded-xl border bg-paper p-3 shadow-lg md:hidden"
		aria-label={$_('navigation.mobile')}
	>
		<a
			class="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/articles"
			onclick={() => (menuOpen = false)}>{$_('navigation.articles')}</a
		><a
			class="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/topics"
			onclick={() => (menuOpen = false)}>{$_('navigation.topics')}</a
		><a
			class="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/about"
			onclick={() => (menuOpen = false)}>{$_('navigation.about')}</a
		><a
			class="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/contact"
			onclick={() => (menuOpen = false)}>{$_('navigation.contact')}</a
		>
	</nav>{/if}
