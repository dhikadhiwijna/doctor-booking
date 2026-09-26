<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	let {
		src,
		alt,
		width,
		height,
		loading = 'lazy',
		decoding = 'async',
		...rest
	}: HTMLImgAttributes = $props();
</script>

<img {src} {alt} {width} {height} {loading} {decoding} {...rest} />
