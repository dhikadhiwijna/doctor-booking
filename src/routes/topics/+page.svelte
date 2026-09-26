<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head
	><title>{$_('meta.topics.title')}</title><meta
		name="description"
		content={$_('meta.topics.description')}
	/><link rel="canonical" href="https://doktermetabolik.id/topics" /></svelte:head
>
<EditorialPage
	eyebrow={$_('topicsPage.eyebrow')}
	title={$_('topicsPage.title')}
	description={$_('topicsPage.description')}
	links={[
		{ label: $_('home.topics.metabolic'), href: '/articles' },
		{ label: $_('home.topics.lifestyle'), href: '/articles' },
		{ label: $_('home.topics.aging'), href: '/articles' },
		{ label: $_('home.topics.foodAndMovement'), href: '/articles' },
	]}
/>
