import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => ({ slug: params.slug });
