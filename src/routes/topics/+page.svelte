<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
</script>

<svelte:head
	><title>Health Topics | Dokter Metabolik</title><meta
		name="description"
		content="Jelajahi topik kesehatan metabolik, pola makan, gerak, dan penuaan sehat."
	/><link rel="canonical" href="https://doktermetabolik.id/topics" /></svelte:head
>
<EditorialPage
	eyebrow="TOPIK KESEHATAN"
	title="Mulai dari yang dekat."
	description="Pilih topik yang paling relevan dengan keseharian dan kebutuhan Anda saat ini."
	links={[
		{ label: 'Kesehatan metabolik', href: '/articles' },
		{ label: 'Pola hidup sehat', href: '/articles' },
		{ label: 'Tubuh saat menua', href: '/articles' },
		{ label: 'Pola makan & gerak', href: '/articles' },
	]}
/>
