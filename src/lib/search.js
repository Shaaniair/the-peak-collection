/** @typedef {{ type: string, title: string, description: string, category?: string, tags?: string[], href: string }} SearchEntry */

export function normalizeSearchQuery(value) {
	return value
		.normalize("NFKD")
		.replace(/\p{Diacritic}/gu, "")
		.toLocaleLowerCase("en-US")
		.trim();
}

/**
 * Search the small, build-generated content index without loading article bodies.
 * Every query term must match one of the published entry's searchable fields.
 * @param {SearchEntry[]} entries
 * @param {string} rawQuery
 * @param {number} limit
 */
export function searchContent(entries, rawQuery, limit = 6) {
	const query = normalizeSearchQuery(rawQuery);
	if (!query) return [];

	const terms = query.split(/\s+/).filter(Boolean);
	return entries
		.map((entry) => {
			const title = normalizeSearchQuery(entry.title);
			const searchable = normalizeSearchQuery([
				entry.title,
				entry.description,
				entry.category || "",
				...(entry.tags || []),
			].join(" "));
			if (!terms.every((term) => searchable.includes(term))) return null;

			const score = (title === query ? 100 : title.startsWith(query) ? 60 : title.includes(query) ? 35 : 0)
				+ terms.reduce((sum, term) => sum + (title.includes(term) ? 8 : 0), 0);
			return { entry, score };
		})
		.filter((match) => match !== null)
		.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
		.slice(0, Math.max(0, limit));
}
