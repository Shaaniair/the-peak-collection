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
			tags: z.array(z.string()).default([]),
			featuredImage: image().optional(),
			author: z.string().default("The Peak Collection"),
			affiliate: z.boolean().default(true),
			affiliateUrl: z.string().url().optional(),
		}),
});

const guides = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/guides",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		featuredImage: z.string().optional(),
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