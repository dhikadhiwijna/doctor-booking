<script lang="ts">
	import EditorialPage from '$lib/components/EditorialPage.svelte';
</script>

<svelte:head
	><title>Contact | Dokter Metabolik</title><meta
		name="description"
		content="Hubungi Dokter Metabolik untuk pertanyaan seputar publikasi kesehatan."
	/><link rel="canonical" href="https://doktermetabolik.id/contact" /></svelte:head
>
<EditorialPage
	eyebrow="KONTAK"
	title="Mari tetap terhubung."
	description="Untuk pertanyaan atau tanggapan tentang publikasi kami, silakan kirim email."
	links={[{ label: 'halo@doktermetabolik.id', href: 'mailto:halo@doktermetabolik.id' }]}
/>
