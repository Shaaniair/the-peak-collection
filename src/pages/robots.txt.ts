import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.origin : 'https://thepeakcollection.com';
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8'
      }
    }
  );
};
