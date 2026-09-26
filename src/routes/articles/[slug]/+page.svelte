<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
	let { data }: { data: { slug: string } } = $props();
	const articles: Record<string, { title: string; description: string }> = {
		'resistensi-insulin': {
			title: 'Memahami resistensi insulin',
			description:
				'Tanda awal resistensi insulin dapat hadir perlahan. Pelajari konteksnya sebelum mengambil langkah berikutnya.',
		},
		'pola-makan-sadar': {
			title: 'Makan lebih sadar',
			description:
				'Pola makan yang mendukung kesehatan metabolik dimulai dari kebiasaan yang realistis dan berkelanjutan.',
		},
		'tubuh-saat-menua': {
			title: 'Tubuh saat menua',
			description:
				'Perubahan tubuh seiring usia adalah bagian alami kehidupan dan dapat dirawat dengan pengetahuan yang tepat.',
		},
	};
	const article = $derived(
		articles[data.slug] ?? {
			title: 'Artikel Dokter Metabolik',
			description: 'Bacaan kesehatan metabolik yang dibuat untuk dipahami dengan jernih.',
		},
	);
</script>

<svelte:head
	><title>{article.title} | Dokter Metabolik</title><meta
		name="description"
		content={article.description}
	/><link rel="canonical" href={'https://doktermetabolik.id/articles/' + data.slug} /></svelte:head
>
<EditorialPage
	eyebrow="ARTIKEL"
	title={article.title}
	description={article.description}
	links={[{ label: 'Kembali ke semua artikel', href: '/articles' }]}
/>
