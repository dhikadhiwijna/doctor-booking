<script lang="ts">
	import HomePage from '../features/home/HomePage.svelte';
	import { _, locale } from 'svelte-i18n';
	import { siteUrl } from '$lib/site.js';
</script>

<svelte:head>
	<title>{$_('meta.home.title')}</title>
	<meta name="description" content={$_('meta.home.description')} />
	<link rel="canonical" href={siteUrl + '/'} />
	<meta property="og:title" content="Dokter Metabolik" />
	<meta property="og:description" content={$_('meta.home.ogDescription')} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={$locale === 'en' ? 'en_US' : 'id_ID'} />
</svelte:head>

<HomePage />
