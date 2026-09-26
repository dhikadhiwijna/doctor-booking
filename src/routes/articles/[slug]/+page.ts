import type { PageLoad } from './$types.js';

const articleSlugs = ['resistensi-insulin', 'pola-makan-sadar', 'tubuh-saat-menua'];

export const entries = () => articleSlugs.map((slug) => ({ slug }));

export const load: PageLoad = ({ params }) => ({ slug: params.slug });
