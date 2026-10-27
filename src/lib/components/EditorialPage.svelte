<script lang="ts">
	import AppFooter from './AppFooter.svelte';
	import AppHeader from './AppHeader.svelte';
	import PageNavigation from './PageNavigation.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { appPath } from '$lib/site.js';
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
<main id="main-content" aria-label={eyebrow} class="page-frame min-h-[65vh] py-12 sm:py-20">
	<PageNavigation breadcrumbs={[...breadcrumbs, { label: title }]} {backHref} />
	<h1
		class="mt-8 max-w-3xl scroll-m-20 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
	>
		{title}
	</h1>
	<p class="mt-7 max-w-2xl text-xl leading-8 text-muted-foreground">{description}</p>
	{#if links.length}<ul class="mt-10 grid max-w-2xl gap-3 p-0">
			{#each links as link (link.label)}<li class="list-none">
					<Button
						href={appPath(link.href)}
						variant="secondary"
						class="h-auto min-h-14 w-full justify-start rounded-xl px-5 py-4 text-left whitespace-normal"
						>{link.label}</Button
					>
				</li>{/each}
		</ul>{/if}
</main>
<AppFooter />
