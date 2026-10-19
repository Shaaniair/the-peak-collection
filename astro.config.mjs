// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
	i18n: {
		defaultLocale: "en",

		locales: [
			"en",
			"tr",
			"ar",
			"ur",
			"es",
			"fr",
			"de",
			"it",
			"pt",
			"id",
			"ja",
			"ko",
			"zh",
		],

		routing: {
			prefixDefaultLocale: false,
			fallbackType: "rewrite",
		},

		fallback: {
			tr: "en",
			ar: "en",
			ur: "en",
			es: "en",
			fr: "en",
			de: "en",
			it: "en",
			pt: "en",
			id: "en",
			ja: "en",
			ko: "en",
			zh: "en",
		},
	},
});