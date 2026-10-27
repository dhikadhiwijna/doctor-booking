<script lang="ts">
	import { Mail, Plus } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
	import { appPath } from '$lib/site.js';
	const year = new Date().getFullYear();
</script>

<footer class="bg-[#15251d] text-[#fbfaf6]">
	<div class="page-frame py-12 sm:py-16">
		<div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
			<div class="max-w-sm">
				<a
					class="brand-link inline-flex items-center gap-2.5"
					href={appPath('/')}
					aria-label={$_('brand.home')}
					><span class="grid size-10 place-items-center rounded-xl bg-white/10 text-white"
						><Plus class="size-7" strokeWidth={3} aria-hidden="true" /></span
					><span class="text-base font-semibold leading-tight tracking-tight"
						>Dokter<br />Metabolik.</span
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
		<div class="mt-12 grid gap-4 text-sm leading-6 text-white/70 sm:grid-cols-[1fr_auto]">
			<p>{$_('footer.disclaimer')}</p>
			<p>© {year} Dokter Metabolik. {$_('footer.copyright')}</p>
			<p>
				<a class="underline underline-offset-4 hover:text-white" href="https://unsplash.com/"
					>{$_('care.imageCredit')}</a
				>
			</p>
		</div>
	</div>
</footer>
