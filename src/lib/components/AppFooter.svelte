<script lang="ts">
	import { Mail } from '@lucide/svelte';
	import { _ } from 'svelte-i18n';
</script>

<footer
	class="mx-auto grid max-w-6xl gap-5 px-5 py-10 text-sm text-ink/65 sm:grid-cols-[1fr_2fr_1fr] sm:px-8"
>
	<a
		class="inline-flex items-center gap-2.5 text-ink"
		href="/"
		aria-label="Dokter Metabolik, beranda"
		><span
			class="grid size-8 place-items-center rounded-full bg-coral font-serif text-sm italic text-paper"
			>dm</span
		><span class="text-xs font-bold leading-none tracking-tight">dokter<br />metabolik</span></a
	>
	<p class="leading-6">{$_('footer.disclaimer')}</p>
	<a
		class="inline-flex items-center gap-2 text-ink transition-colors hover:text-coral sm:justify-self-end"
		href="mailto:halo@doktermetabolik.id"
		><Mail size={16} aria-hidden="true" />halo@doktermetabolik.id</a
	>
</footer>
