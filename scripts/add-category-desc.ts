import fs from 'fs';

let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

const categoryTranslations: Record<string, string> = {
  en: 'Browse discoveries organized around the things you care about.',
  tr: 'Önem verdiğiniz konular etrafında düzenlenen keşiflere göz atın.',
  ar: 'تصفح الاكتشافات المنظمة حول الأشياء التي تهمك.',
  ur: 'ان چیزوں کے گرد منظم دریافتیں دیکھیں جن کی آپ پروا کرتے ہیں۔',
  es: 'Explora descubrimientos organizados en torno a lo que te interesa.',
  fr: 'Parcourez des découvertes organisées autour de ce qui compte pour vous.',
  de: 'Durchsuchen Sie Entdeckungen, die nach Ihren Interessen geordnet sind.',
  it: 'Esplora le scoperte organizzate attorno alle cose che ti interessano.',
  pt: 'Navegue por descobertas organizadas em torno do que realmente importa.',
  id: 'Jelajahi berbagai pilihan yang dikelompokkan sesuai minat Anda.',
  ja: 'あなたが大切にしたいテーマごとに整理されたアイテムを見る。',
  ko: '관심 있는 분야별로 정리된 엄선된 추천을 둘러보세요.',
  zh: '按您关心的主题浏览精心整理的好物发现。'
};

for (const [lang, desc] of Object.entries(categoryTranslations)) {
  const marker = `${lang}: {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const nextBrace = content.indexOf('}', idx);
    if (nextBrace !== -1) {
      const snippet = `    'categories.card.description': '${desc}',\n`;
      content = content.slice(0, nextBrace) + snippet + content.slice(nextBrace);
    }
  }
}

fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
console.log('Successfully injected categories.card.description across all 13 locales.');
