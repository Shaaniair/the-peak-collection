import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/products",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date().optional(),
			category: z.string(),
			productType: z.enum(["physical", "digital"]).default("physical"),
			tags: z.array(z.string()).default([]),
			featuredImage: image().optional(),
			author: z.string().default("The Peak Collection"),
			affiliate: z.boolean().default(true),
			affiliateUrl: z.string().url().optional(),
			featured: z.boolean().default(false),
			// Digital entries remain hidden unless explicitly published after review.
			published: z.boolean().optional(),
		}).superRefine((data, context) => {
			if (data.productType === "digital" && data.published && (!data.affiliate || !data.affiliateUrl?.startsWith("https://"))) {
				context.addIssue({
					code: "custom",
					path: ["affiliateUrl"],
					message: "Published digital products require an approved affiliate relationship and an HTTPS destination.",
				});
			}
		}),
});

const guides = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/guides",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.coerce.date(),
			category: z.string(),
			tags: z.array(z.string()).default([]),
			featuredImage: image().optional(),
			author: z.string().default("The Peak Collection"),
		}),
});

const categories = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/categories",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	products,
	guides,
	categories,
};
