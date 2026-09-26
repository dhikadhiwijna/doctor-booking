<script lang="ts">
	import AppFooter from './AppFooter.svelte';
	import AppHeader from './AppHeader.svelte';
	import PageNavigation from './PageNavigation.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	let {
		eyebrow,
		title,
		description,
		links = [],
		breadcrumbs = [],
		backHref = '/',
	}: {
		eyebrow: string;
		title: string;
		description: string;
		links?: { label: string; href: string }[];
		breadcrumbs?: { label: string; href?: string }[];
		backHref?: string;
	} = $props();
</script>

<AppHeader />
<main class="mx-auto min-h-[65vh] max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
	<PageNavigation breadcrumbs={[...breadcrumbs, { label: title }]} {backHref} />
	<p class="text-xs font-bold tracking-[.16em] text-coral">{eyebrow}</p>
	<h1
		class="mt-5 scroll-m-20 font-serif text-5xl font-medium tracking-tight text-balance sm:text-6xl"
	>
		{title}
	</h1>
	<p class="mt-7 max-w-2xl text-xl leading-7 text-ink/70">{description}</p>
	{#if links.length}<ul class="mt-12 grid gap-3 p-0">
			{#each links as link (link.label)}<li class="list-none">
					<Button href={link.href} variant="outline" class="w-full justify-start"
						>{link.label}</Button
					>
				</li>{/each}
		</ul>{/if}
</main>
<AppFooter />
