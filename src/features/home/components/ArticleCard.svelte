<script lang="ts">
	import { ArrowUpRight } from '@lucide/svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import { appPath } from '$lib/site.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle,
	} from '$lib/components/ui/card/index.js';
	type Article = {
		category: string;
		title: string;
		date: string;
		href: string;
		tone: 'peach' | 'sage' | 'sand';
	};
	let { article, number }: { article: Article; number: number } = $props();
</script>

<Card
	class="group h-full overflow-hidden rounded-2xl border-border bg-paper p-3 shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-[#15231c]"
	><CardContent class="p-0"
		><a
			class:peach={article.tone === 'peach'}
			class:sage={article.tone === 'sage'}
			class:sand={article.tone === 'sand'}
			class="relative block aspect-16/10 overflow-hidden rounded-xl"
			href={appPath(article.href)}
			aria-label={'Baca artikel: ' + article.title}
		>
			<span class="absolute left-5 top-4 z-10 font-serif text-xl text-paper">0{number}</span><span
				class="art-shape"
			></span>
		</a></CardContent
	><CardHeader class="px-1 pb-0 pt-5"
		><CardDescription class="text-xs font-bold tracking-[.14em] text-coral"
			>{article.category}</CardDescription
		><CardTitle class="scroll-m-20 pt-2 font-serif text-2xl font-medium tracking-tight text-ink"
			><a class="transition-colors hover:text-coral" href={appPath(article.href)}>{article.title}</a
			></CardTitle
		></CardHeader
	><CardFooter class="flex items-center justify-between border-t px-1 pb-1 pt-4 text-xs text-ink/60"
		><time datetime="2026-07-12">{article.date}</time><Button
			href={appPath(article.href)}
			variant="ghost"
			size="icon-sm"
			aria-label={'Baca artikel: ' + article.title}><ArrowUpRight aria-hidden="true" /></Button
		></CardFooter
	></Card
>

<style>
	.peach {
		background: #eaa18d;
	}
	.sage {
		background: #abb482;
	}
	.sand {
		background: #ddcfb2;
	}
	.art-shape {
		position: absolute;
		right: 14%;
		bottom: -20%;
		width: 60%;
		height: 92%;
		border-radius: 58% 42% 50% 50%;
		background: #fbf0d7;
		transform: rotate(-16deg);
		transition: transform 0.4s ease;
	}
	:global(.group:hover) .art-shape {
		transform: rotate(-8deg) translateY(-8px);
	}
	.sage .art-shape {
		background: #e1e5bd;
		border-radius: 50% 50% 0 50%;
	}
	.sand .art-shape {
		background: #b97d60;
		border-radius: 50% 50% 50% 5%;
	}
</style>
