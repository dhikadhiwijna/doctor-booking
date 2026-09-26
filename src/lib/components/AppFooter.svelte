<script lang="ts">
	import { Mail } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { appPath } from '$lib/site.js';
	const year = new Date().getFullYear();
</script>

<footer class="bg-[#15251d] text-[#fbfaf6]">
	<div class="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
			<div class="max-w-sm">
				<a
					class="brand-link inline-flex items-center gap-2.5"
					href={appPath('/')}
					aria-label={$_('brand.home')}
					><span
						class="grid size-8 place-items-center rounded-full bg-coral font-serif text-sm italic text-paper"
						>dm</span
					><span class="text-xs font-bold leading-none tracking-tight">dokter<br />metabolik</span
					></a
				>
				<p class="mt-5 leading-7 text-white/70">{$_('footer.tagline')}</p>
			</div>
			<div>
				<h2 class="text-sm font-semibold tracking-tight">{$_('footer.explore')}</h2>
				<nav class="mt-4 grid gap-3 text-sm text-white/70" aria-label={$_('navigation.primary')}>
					<a class="nav-link w-fit" href={appPath('/articles')}>{$_('navigation.articles')}</a>
					<a class="nav-link w-fit" href={appPath('/topics')}>{$_('navigation.topics')}</a>
					<a class="nav-link w-fit" href={appPath('/about')}>{$_('navigation.about')}</a>
				</nav>
			</div>
			<div>
				<h2 class="text-sm font-semibold tracking-tight">{$_('footer.contact')}</h2>
				<a
					class="nav-link mt-4 inline-flex items-center gap-2 text-sm text-white/70"
					href="mailto:halo@doktermetabolik.id"
					><Mail size={16} aria-hidden="true" />halo@doktermetabolik.id</a
				>
			</div>
		</div>
		<div
			class="mt-12 grid gap-4 border-t border-white/15 pt-6 text-xs leading-5 text-white/55 sm:grid-cols-[1fr_auto]"
		>
			<p>{$_('footer.disclaimer')}</p>
			<p>© {year} Dokter Metabolik. {$_('footer.copyright')}</p>
		</div>
	</div>
</footer>
