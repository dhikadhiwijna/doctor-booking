<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { _, locale } from 'svelte-i18n';
	import ResponsiveImage from '$lib/components/media/ResponsiveImage.svelte';
	import { appPath } from '$lib/site.js';
	let { article }: { article: { key: string; href: string; image: string; date: string } } =
		$props();
</script>

<article class="reading-item group">
	<a class="block" href={appPath(article.href)}>
		<div class="article-image overflow-hidden">
			<ResponsiveImage
				src={article.image}
				alt={$_(`care.articles.${article.key}.alt`)}
				width={760}
				height={507}
				class="aspect-[1.5] w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.04]"
			/>
		</div>
		<div class="mt-5 flex items-center justify-between gap-3 text-sm text-muted-foreground">
			<p>{$_(`care.articles.${article.key}.category`)}</p>
			<ArrowUpRight
				class="size-5 text-primary transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
				aria-hidden="true"
			/>
		</div>
		<h3 class="mt-3 scroll-m-20 text-xl font-semibold leading-snug tracking-tight">
			{$_(`care.articles.${article.key}.title`)}
		</h3>
	</a>
	<time class="mt-4 block text-sm text-muted-foreground" datetime={article.date}
		>{new Intl.DateTimeFormat($locale === 'en' ? 'en-GB' : 'id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric',
			timeZone: 'UTC',
		}).format(new Date(article.date))}</time
	>
</article>
