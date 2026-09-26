<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
	import { _ } from 'svelte-i18n';
	import { siteUrl } from '$lib/site.js';
</script>

<svelte:head
	><title>{$_('meta.about.title')}</title><meta
		name="description"
		content={$_('meta.about.description')}
	/><link rel="canonical" href={siteUrl + '/about/'} /></svelte:head
>
<EditorialPage
	eyebrow={$_('aboutPage.eyebrow')}
	title={$_('aboutPage.title')}
	description={$_('aboutPage.description')}
/>
