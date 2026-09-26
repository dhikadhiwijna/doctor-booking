<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
</script>

<svelte:head
	><title>Articles | Dokter Metabolik</title><meta
		name="description"
		content="Artikel tentang kesehatan metabolik dan pola hidup sehat."
	/><link rel="canonical" href="https://doktermetabolik.id/articles" /></svelte:head
>
<EditorialPage
	eyebrow="PUBLIKASI"
	title="Artikel untuk dipahami."
	description="Bacaan ringkas dan penuh konteks untuk membantu Anda mengenal kesehatan metabolik."
	links={[
		{ label: 'Resistensi insulin', href: '/articles/resistensi-insulin' },
		{ label: 'Pola makan sadar', href: '/articles/pola-makan-sadar' },
		{ label: 'Tubuh saat menua', href: '/articles/tubuh-saat-menua' },
	]}
/>
