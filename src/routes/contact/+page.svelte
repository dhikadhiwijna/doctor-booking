<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
	import { _ } from 'svelte-i18n';
	import { siteUrl } from '$lib/site.js';
</script>

<svelte:head
	><title>{$_('meta.contact.title')}</title><meta
		name="description"
		content={$_('meta.contact.description')}
	/><link rel="canonical" href={siteUrl + '/contact/'} /></svelte:head
>
<EditorialPage
	eyebrow={$_('contactPage.eyebrow')}
	title={$_('contactPage.title')}
	description={$_('contactPage.description')}
	links={[{ label: 'halo@doktermetabolik.id', href: 'mailto:halo@doktermetabolik.id' }]}
/>
