<script lang="ts">
	import { onMount } from 'svelte';
	import { ArrowDown, ArrowRight, Check, MessageCircle, MoveUpRight } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { Button } from '$lib/components/ui/button/index.js';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
	import ArticleCard from './components/ArticleCard.svelte';
	import ConsultationRequest from './components/ConsultationRequest.svelte';
	import { appPath } from '$lib/site.js';
	import consultation from './assets/consultation.jpg';
	import nutrition from './assets/nutrition.jpg';
	import movement from './assets/movement.jpg';
	import health from './assets/health.jpg';
	const articles = [
		{ key: 'insulin', href: '/articles/resistensi-insulin', image: health, date: '2026-07-12' },
		{ key: 'nutrition', href: '/articles/pola-makan-sadar', image: nutrition, date: '2026-06-28' },
		{ key: 'aging', href: '/articles/tubuh-saat-menua', image: movement, date: '2026-06-10' },
	];
	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add('revealed');
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.12 },
		);
		document
			.querySelectorAll(
				'.consultation-copy > h2, .consultation-copy > p, .care-steps li, .request-card, .reading-item, .reading-section h2, .closing-section h2, .closing-section p',
			)
			.forEach((element) => observer.observe(element));
		return () => observer.disconnect();
	});
</script>

<AppHeader />
<main id="main-content">
	<section class="page-frame hero" aria-labelledby="home-title">
		<div class="hero-copy">
			<h1 id="home-title" class="scroll-m-20 font-semibold tracking-tight text-balance">
				<span class="title-line"><span>{$_('care.titleFirst')}</span></span>
				<span class="title-line"><span>{$_('care.titleSecond')}</span></span>
			</h1>
			<p class="hero-description text-lg leading-7 text-muted-foreground">
				{$_('care.description')}
			</p>
			<div class="hero-actions">
				<Button href="#consultation" class="action-button"
					>{$_('care.cta')}<ArrowRight aria-hidden="true" /></Button
				>
				<a class="text-link font-medium underline-offset-4" href={appPath('/articles')}
					>{$_('care.read')}<MoveUpRight class="size-4" aria-hidden="true" /></a
				>
			</div>
			<p class="hero-note text-sm text-muted-foreground">
				<MessageCircle class="size-4 shrink-0" aria-hidden="true" />{$_('care.note')}
			</p>
		</div>
		<figure class="hero-figure">
			<div class="hero-image">
				<ResponsiveImage
					src={consultation}
					alt={$_('care.imageAlt')}
					width={1200}
					height={800}
					loading="eager"
					fetchpriority="high"
				/>
			</div>
			<figcaption class="flex items-center justify-between gap-4 text-sm">
				<span>{$_('care.imageCaption')}</span><span class="text-muted-foreground"
					>{$_('care.imageCredit')}</span
				>
			</figcaption>
		</figure>
	</section>
	<div class="care-band">
		<div class="page-frame flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-6">
			{#each ['understand', 'habits', 'personal'] as key (key)}<p
					class="flex items-center gap-3 text-sm font-medium"
				>
					<Check class="size-4 text-primary" aria-hidden="true" />{$_(`care.principles.${key}`)}
				</p>{/each}
			<a href="#consultation" class="text-link text-sm font-medium"
				>{$_('care.start')}<ArrowDown class="size-4" aria-hidden="true" /></a
			>
		</div>
	</div>
	<section
		id="consultation"
		class="page-frame consultation-section"
		aria-labelledby="consultation-title"
	>
		<div class="consultation-copy">
			<h2
				id="consultation-title"
				class="section-title scroll-m-20 text-3xl font-semibold tracking-tight text-balance"
			>
				{$_('care.consultationTitle')}
			</h2>
			<p class="mt-6 max-w-md text-lg leading-7 text-muted-foreground">
				{$_('care.consultationDescription')}
			</p>
			<ol class="care-steps mt-10 list-none p-0">
				{#each ['choose', 'email', 'confirm'] as step (step)}<li class="flex gap-5">
						<span class="step-dot" aria-hidden="true"></span>
						<div>
							<h3 class="text-base font-semibold tracking-tight">
								{$_(`care.steps.${step}.title`)}
							</h3>
							<p class="mt-1 text-sm leading-6 text-muted-foreground">
								{$_(`care.steps.${step}.description`)}
							</p>
						</div>
					</li>{/each}
			</ol>
		</div>
		<ConsultationRequest />
	</section>
	<section class="reading-section" aria-labelledby="reading-title">
		<div class="page-frame">
			<div class="flex flex-wrap items-end justify-between gap-6">
				<div>
					<h2
						id="reading-title"
						class="section-title scroll-m-20 text-3xl font-semibold tracking-tight"
					>
						{$_('care.readingTitle')}
					</h2>
					<p class="mt-4 leading-7 text-muted-foreground">{$_('care.readingDescription')}</p>
				</div>
				<a class="text-link font-medium underline-offset-4" href={appPath('/articles')}
					>{$_('home.allArticles')}<ArrowRight class="size-4" aria-hidden="true" /></a
				>
			</div>
			<div class="article-grid mt-10 grid gap-8 md:grid-cols-3">
				{#each articles as article (article.key)}<ArticleCard {article} />{/each}
			</div>
		</div>
	</section>
	<section class="closing-section" aria-labelledby="closing-title">
		<div
			class="page-frame flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
		>
			<div>
				<h2
					id="closing-title"
					class="section-title scroll-m-20 text-3xl font-semibold tracking-tight"
				>
					{$_('care.closingTitle')}
				</h2>
				<p class="mt-4 max-w-lg leading-7">{$_('care.closingDescription')}</p>
			</div>
			<Button href="#consultation" class="action-button bg-white text-[#153e35] hover:bg-white/90"
				>{$_('care.cta')}<ArrowRight aria-hidden="true" /></Button
			>
		</div>
	</section>
</main>
<AppFooter />
