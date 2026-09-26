<script lang="ts">
	import { fly, fade, scale } from 'svelte/transition';
	import { Menu, Moon, Search, Sun, X } from '@lucide/svelte';
	import { mode, setMode } from 'mode-watcher';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	let menuOpen = $state(false);
</script>

<header class="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:h-22 sm:px-8">
	<a class="brand-link inline-flex items-center gap-2.5" href="/" aria-label={$_('brand.home')}
		><span
			class="grid size-8 place-items-center rounded-full bg-coral font-serif text-sm italic text-paper"
			>dm</span
		><span class="text-xs font-bold leading-none tracking-tight">dokter<br />metabolik</span></a
	>
	<nav
		class="hidden items-center gap-8 text-sm text-ink/70 md:flex"
		aria-label={$_('navigation.primary')}
	>
		<a class="nav-link" href="/articles">{$_('navigation.articles')}</a><a
			class="nav-link"
			href="/topics">{$_('navigation.topics')}</a
		><a class="nav-link" href="/about">{$_('navigation.about')}</a>
	</nav>
	<div class="flex items-center gap-3">
		<LanguageSwitcher />
		<Button
			variant="outline"
			size="icon"
			class={`size-8 border transition-[background-color,color,border-color,transform] duration-200 motion-safe:hover:-translate-y-px motion-safe:active:scale-95 ${
				mode.current === 'dark'
					? 'border-coral bg-coral text-white hover:bg-coral/90 hover:text-white'
					: 'border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground'
			}`}
			onclick={() => setMode(mode.current === 'dark' ? 'light' : 'dark')}
			aria-pressed={mode.current === 'dark'}
			aria-label={$_(mode.current === 'dark' ? 'appearance.enableLight' : 'appearance.enableDark')}
		>
			{#key mode.current}
				<span in:scale={{ duration: 160, start: 0.65 }} out:scale={{ duration: 100 }}>
					{#if mode.current === 'dark'}
						<Sun class="size-4" aria-hidden="true" />
					{:else}
						<Moon class="size-4" aria-hidden="true" />
					{/if}
				</span>
			{/key}
		</Button>
		<Button
			href="/articles"
			variant="ghost"
			size="icon"
			class="hidden md:inline-flex"
			aria-label={$_('navigation.search')}><Search /></Button
		><Button
			variant="ghost"
			size="sm"
			class="gap-2 md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			>{#if menuOpen}<X />{:else}<Menu />{/if}<span class="md:hidden">{$_('navigation.menu')}</span
			></Button
		>
	</div>
</header>
{#if menuOpen}<nav
		in:fly={{ y: -8, duration: 180 }}
		out:fade={{ duration: 120 }}
		id="mobile-navigation"
		class="absolute inset-x-4 top-16 z-20 rounded-xl border bg-paper p-3 shadow-lg md:hidden"
		aria-label={$_('navigation.mobile')}
	>
		<a
			class="nav-link block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/articles"
			onclick={() => (menuOpen = false)}>{$_('navigation.articles')}</a
		><a
			class="nav-link block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/topics"
			onclick={() => (menuOpen = false)}>{$_('navigation.topics')}</a
		><a
			class="nav-link block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/about"
			onclick={() => (menuOpen = false)}>{$_('navigation.about')}</a
		><a
			class="nav-link block rounded-lg px-4 py-3 text-sm font-medium hover:bg-sage"
			href="/contact"
			onclick={() => (menuOpen = false)}>{$_('navigation.contact')}</a
		>
	</nav>{/if}
