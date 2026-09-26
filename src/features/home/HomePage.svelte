<script lang="ts">
	import { ArrowRight, ChevronRight, Mail } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import PageNavigation from '$lib/components/PageNavigation.svelte';
	import ArticleCard from './components/ArticleCard.svelte';
	const articles = [
		{
			category: 'INSULIN RESISTANCE',
			title: 'Memahami resistensi insulin: tanda awal yang sering terlewat',
			date: '12 Juli 2026',
			href: '/articles/resistensi-insulin',
			tone: 'peach' as const,
		},
		{
			category: 'POLA MAKAN',
			title: 'Makan lebih sadar untuk menjaga kesehatan metabolik',
			date: '28 Juni 2026',
			href: '/articles/pola-makan-sadar',
			tone: 'sage' as const,
		},
		{
			category: 'MENUA DENGAN BAIK',
			title: 'Tubuh berubah seiring usia. Ini yang dapat kita lakukan.',
			date: '10 Juni 2026',
			href: '/articles/tubuh-saat-menua',
			tone: 'sand' as const,
		},
	];
	const topics = $derived([
		$_('home.topics.metabolic'),
		$_('home.topics.lifestyle'),
		$_('home.topics.aging'),
		$_('home.topics.foodAndMovement'),
	]);
</script>

<AppHeader />
<div class="mx-auto max-w-6xl px-5 sm:px-8"><PageNavigation /></div>
<main>
	<section
		class="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-18 pt-12 sm:px-8 lg:grid-cols-2 lg:py-20"
	>
		<div class="rise-in">
			<p class="text-xs font-bold tracking-[.16em] text-coral">{$_('home.eyebrow')}</p>
			<h1
				class="mt-5 scroll-m-20 font-serif text-5xl font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
			>
				{$_('home.title')}<br /><em class="text-[#899365]">{$_('home.titleEmphasis')}</em>
			</h1>
			<p class="mt-6 max-w-md text-lg leading-7 text-ink/70">
				{$_('home.description')}
			</p>
			<Button href="/articles" size="lg" class="mt-7 bg-[#21352d] text-[#fbfaf6] hover:bg-[#2f4c40]"
				>{$_('home.articlesCta')} <ArrowRight aria-hidden="true" /></Button
			>
		</div>
		<div class="rise-in-delay relative mx-auto min-h-72 w-full max-w-md" aria-hidden="true">
			<span class="absolute right-8 top-0 size-24 rounded-full bg-[#f0d88b]"></span><span
				class="absolute bottom-10 left-6 h-44 w-22 rotate-25 rounded-[100%_0_100%_0] bg-[#91a779]"
			></span><span
				class="float absolute bottom-0 right-8 grid size-64 place-items-center rounded-[49%_51%_55%_45%] bg-[#d9a64d] text-paper"
				><span class="font-serif text-3xl leading-none tracking-tight"
					>{$_('home.artworkFirst')}<br />{$_('home.artworkSecond')}</span
				></span
			>
		</div>
	</section>
	<section class="bg-sage px-5 py-16 sm:px-8">
		<div class="mx-auto grid max-w-6xl gap-5 md:grid-cols-[1fr_2fr]">
			<p class="text-xs font-bold tracking-[.16em] text-coral">{$_('home.whyEyebrow')}</p>
			<p class="font-serif text-3xl leading-tight tracking-tight text-balance sm:text-4xl">
				{$_('home.whyDescription')}
			</p>
		</div>
	</section>
	<section class="mx-auto max-w-6xl px-5 py-18 sm:px-8">
		<div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
			<div>
				<p class="text-xs font-bold tracking-[.16em] text-coral">{$_('home.latestEyebrow')}</p>
				<h2
					class="mt-4 scroll-m-20 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl"
				>
					{$_('home.latestTitleFirst')}<br />{$_('home.latestTitleSecond')}
				</h2>
			</div>
			<Button href="/articles" variant="link" class="w-fit"
				>{$_('home.allArticles')} <ArrowRight aria-hidden="true" /></Button
			>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each articles as article, i (article.href)}<ArticleCard {article} number={i + 1} />{/each}
		</div>
	</section>
	<section class="bg-[#15251d] px-5 py-16 text-[#fbfaf6] sm:px-8">
		<div class="mx-auto flex max-w-6xl flex-col justify-between gap-10 md:flex-row">
			<div>
				<p class="text-xs font-bold tracking-[.16em] text-[#e5aa77]">{$_('home.topicsEyebrow')}</p>
				<h2
					class="mt-4 scroll-m-20 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl"
				>
					{$_('home.topicsTitleFirst')}<br />{$_('home.topicsTitleSecond')}
				</h2>
			</div>
			<ul class="w-full max-w-xl list-none p-0">
				{#each topics as topic, i (topic)}<li>
						<a
							class="group flex items-center gap-4 border-b border-white/20 py-5 font-serif text-xl transition-colors hover:text-[#e8ad77]"
							href="/topics"
							><span class="font-sans text-xs text-white/60">0{i + 1}</span><span class="flex-1"
								>{topic}</span
							><ChevronRight
								aria-hidden="true"
								class="transition-transform group-hover:translate-x-1"
							/></a
						>
					</li>{/each}
			</ul>
		</div>
	</section>
	<section class="bg-[#f2d9ca] px-5 py-16 dark:bg-[#26382f] sm:px-8">
		<div class="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-center">
			<div>
				<p class="text-xs font-bold tracking-[.16em] text-coral">{$_('home.contactEyebrow')}</p>
				<h2
					class="mt-4 scroll-m-20 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl"
				>
					{$_('home.contactTitle')}<br /><em class="text-[#899365]">{$_('home.contactEmphasis')}</em
					>
				</h2>
			</div>
			<div>
				<p class="text-lg leading-7 text-ink/70">{$_('home.contactDescription')}</p>
				<Button
					href="/contact"
					size="lg"
					class="mt-5 bg-[#21352d] text-[#fbfaf6] hover:bg-[#2f4c40]"
					><Mail aria-hidden="true" />{$_('home.contactCta')}</Button
				>
			</div>
		</div>
	</section>
</main>
<AppFooter />
