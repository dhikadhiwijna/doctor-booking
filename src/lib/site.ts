import { base } from '$app/paths';

const defaultSiteUrl = 'https://dhikadhiwijna.github.io/doctor-booking';

export const siteUrl = (import.meta.env.PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, '');

export const appPath = (href: string) =>
	href.startsWith('/') ? `${base}${href === '/' || href.endsWith('/') ? href : `${href}/`}` : href;
