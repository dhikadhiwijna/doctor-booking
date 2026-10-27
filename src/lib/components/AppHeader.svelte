<script lang="ts">
	import { ArrowUpRight, Menu, Moon, Plus, Sun, X } from '@lucide/svelte';
	import { mode, setMode } from 'mode-watcher';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	import { appPath } from '$lib/site.js';
	let menuOpen = $state(false);
	const links = [
		{ key: 'articles', path: '/articles' },
		{ key: 'topics', path: '/topics' },
		{ key: 'about', path: '/about' },
	];
</script>

<a href="#main-content" class="skip-link">{$_('care.skip')}</a>
<header class="page-frame app-header flex items-center justify-between gap-2 sm:gap-5">
	<a
		class="brand-link inline-flex items-center gap-2 sm:gap-3"
		href={appPath('/')}
		aria-label={$_('brand.home')}
		><span
			class="brand-mark grid size-8 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground sm:size-10"
			><Plus class="size-7" strokeWidth={3} aria-hidden="true" /></span
		><span class="text-sm font-semibold leading-tight tracking-tight sm:text-base"
			>Dokter<span class="block text-primary">Metabolik.</span></span
		></a
	>
	<nav
		class="hidden items-center gap-8 text-sm text-muted-foreground lg:flex"
		aria-label={$_('navigation.primary')}
	>
		{#each links as link (link.key)}<a class="nav-link" href={appPath(link.path)}
				>{$_(`navigation.${link.key}`)}</a
			>{/each}
	</nav>
	<div class="flex items-center gap-1 sm:gap-3 lg:gap-5">
		<LanguageSwitcher />
		<Button
			variant="secondary"
			size="icon"
			class="size-9 rounded-full sm:size-11"
			onclick={() => setMode(mode.current === 'dark' ? 'light' : 'dark')}
			aria-pressed={mode.current === 'dark'}
			aria-label={$_(mode.current === 'dark' ? 'appearance.enableLight' : 'appearance.enableDark')}
		>
			{#if mode.current === 'dark'}
				<Sun class="size-4" aria-hidden="true" />
			{:else}
				<Moon class="size-4" aria-hidden="true" />
			{/if}
		</Button>
		<Button
			href={appPath('/') + '#consultation'}
			class="hidden h-11 rounded-full px-5 sm:inline-flex"
			>{$_('care.cta')}<ArrowUpRight aria-hidden="true" /></Button
		>
		<Dialog.Root bind:open={menuOpen}>
			<Dialog.Trigger
				class="inline-flex size-9 items-center justify-center rounded-full bg-sage text-ink sm:size-11 lg:hidden"
				aria-label={$_('navigation.menu')}
				><Menu class="size-5" aria-hidden="true" /></Dialog.Trigger
			>
			<Dialog.Content showCloseButton={false} class="bg-paper text-ink">
				<Dialog.Title class="text-xl font-semibold tracking-tight"
					>{$_('navigation.menu')}</Dialog.Title
				><Dialog.Description class="sr-only">{$_('navigation.mobile')}</Dialog.Description>
				<Dialog.Close
					class="absolute top-5 right-5 inline-flex size-11 items-center justify-center rounded-full bg-sage"
					aria-label={$_('care.closeMenu')}><X class="size-5" aria-hidden="true" /></Dialog.Close
				>
				<nav class="grid gap-2 pt-3" aria-label={$_('navigation.mobile')}>
					{#each links as link (link.key)}<a
							class="nav-link rounded-lg px-2 py-3"
							href={appPath(link.path)}
							onclick={() => (menuOpen = false)}>{$_(`navigation.${link.key}`)}</a
						>{/each}<Button
						class="action-button mt-3"
						href={appPath('/') + '#consultation'}
						onclick={() => (menuOpen = false)}
						>{$_('care.cta')}<ArrowUpRight aria-hidden="true" /></Button
					>
				</nav>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</header>
