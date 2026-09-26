import { addMessages, init, locale } from 'svelte-i18n';
import en from './messages/en.js';
import id from './messages/id.js';

export const supportedLocales = ['id', 'en'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];

addMessages('id', id);
addMessages('en', en);
init({ fallbackLocale: 'id', initialLocale: 'id' });

export function setLocale(nextLocale: SupportedLocale) {
	locale.set(nextLocale);
}
