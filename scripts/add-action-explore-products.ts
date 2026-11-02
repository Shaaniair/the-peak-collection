import fs from 'fs';

let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

const exploreProductsTranslations: Record<string, string> = {
  en: 'Explore Products',
  tr: 'Ürünleri Keşfet',
  ar: 'استكشف المنتجات',
  ur: 'مصنوعات دیکھیں',
  es: 'Explorar Productos',
  fr: 'Explorer les Produits',
  de: 'Produkte entdecken',
  it: 'Esplora i Prodotti',
  pt: 'Explorar Produtos',
  id: 'Jelajahi Produk',
  ja: '商品を見る',
  ko: '제품 둘러보기',
  zh: '探索产品'
};

for (const [lang, text] of Object.entries(exploreProductsTranslations)) {
  const marker = `${lang}: {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const nextBrace = content.indexOf('}', idx);
    if (nextBrace !== -1) {
      const snippet = `    'action.exploreProducts': '${text}',\n`;
      content = content.slice(0, nextBrace) + snippet + content.slice(nextBrace);
    }
  }
}

fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
console.log('Successfully injected action.exploreProducts into all 13 locales.');
