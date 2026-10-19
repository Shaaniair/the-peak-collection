# THE PEAK COLLECTION
## AI Coding Agent — Project Briefing

### 1. Project overview
The Peak Collection is a content-driven affiliate discovery website. Its purpose is to help visitors discover useful products, thoughtful gifts, home finds and practical buying ideas through trustworthy content and clear navigation.

The website should feel like a professionally operated digital brand, not a generic starter template.

### 2. Primary business goals
- Publish useful, original product pages and buying guides.
- Build a scalable content architecture.
- Deliver a responsive, fast and accessible experience.
- Establish SEO foundations for long-term organic discovery.
- Support affiliate monetization with clear disclosures and accurate claims.
- Keep development costs low and avoid unnecessary paid dependencies.

### 3. Technology and development environment
Known setup:
- Astro website project.
- TypeScript and CSS.
- Astro content collections for products, guides and categories.
- Markdown-based content where supported by the existing implementation.
- Local Windows development with VS Code, Node.js and npm.
- Continue.dev connected to local Ollama models.

Verify all version numbers and configuration against the current workspace before making changes.

### 4. Existing project state — verify before editing
Previously established features include:
- Homepage and site navigation.
- Shared layout and footer.
- Product listing and individual product pages.
- Guide listing and individual guide pages.
- Content collections and content schema.
- SEO and social metadata work.
- Static site build.

These features are historical context, not proof that every route currently works. Inspect the repository and run the build to establish the actual state.

### 5. Existing content architecture
Known project architecture

Previously created or used:

src/content/products/

src/content/guides/

src/content/categories/

src/content.config.ts

A reusable Layout.astro

global.css

Product and guide routes

Discover and Guides pages

Navigation and footer

Affiliate disclosure, privacy, terms, and contact links/pages
Known collection names:
- products
- guides
- categories

Known schema fields include title, description, date, category, tags, featuredImage, author, affiliate and affiliateUrl. Verify the actual schema before changing content or adding fields.

Existing product content has included a candle-warmer lamp. Verify its current Markdown/MDX entry, image assets and affiliate URL before using or editing it.

### 6. Brand and design direction
Create a distinctive, polished and premium experience:
- Strong typography and visual hierarchy.
- Consistent spacing and color system.
- High-quality product imagery.
- Responsive product cards and detail layouts.
- Refined buttons, hover states and focus states.
- Accessible, keyboard-friendly navigation.
- Fast loading and minimal unnecessary JavaScript.

Do not introduce an unrelated design system or rewrite working components without justification.

### 7. SEO, content and affiliate requirements
- Preserve existing URLs wherever practical.
- Validate canonical URLs and metadata.
- Use descriptive titles, meta descriptions and image alt text.
- Keep affiliate disclosures clear and visible.
- Never invent ratings, review counts, pricing, product specifications or testimonials.
- Preserve correct affiliate links.
- Avoid duplicate routes and thin, repetitive content.

### 8. Required quality checks
After meaningful changes:
1. Run npm run build.
2. Fix build errors before moving to unrelated work.
3. Inspect affected pages in the browser.
4. Check desktop and mobile layouts.
5. Verify links, images, metadata and console errors where possible.
6. Summarize changed files and tests.

### 9. Known workflow and constraints
- Use local Ollama models through Continue.dev where practical.
- DeepSeek-R1:7b is available for reasoning and planning.
- Qwen2.5-Coder:7b is available for coding tasks.
- Do not assume either model supports every agent tool or long-context workflow.
- Prefer small, reviewable changes and a clean build.
- Never expose API keys, passwords, tokens or private configuration.

### 10. First task
Audit the current repository without changing any files. Identify:
- The actual project structure and Astro version.
- Current Git status and uncommitted changes.
- Existing routes and content collections.
- Current state of Layout.astro and global.css.
- Build status and errors.
- Duplicate routes, missing assets and unfinished features.
- The most recent incomplete task that can be verified from the repository.

Return a prioritized plan. Do not begin implementation until the audit and proposed next task have been presented.