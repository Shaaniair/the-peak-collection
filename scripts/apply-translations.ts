import fs from 'fs';

const translations: Record<string, Record<string, string>> = {
  ar: {
    'discover.hero.title': 'اعثر على ما يستحق الاقتناء.',
    'discover.hero.description': 'استكشف منتجات مفيدة وهدايا قيّمة وأفكاراً عملية مختارة من The Peak Collection.',
    'discover.products.title': 'مختارات مميزة',
    'discover.products.description': 'استكشف المنتجات المميزة حالياً في The Peak Collection.',
    'discover.guides.title': 'أفكار مفيدة',
    'discover.guides.description': 'محتوى عملي يساعدك في استكشاف المنتجات واتخاذ قرارات شراء مدروسة.',
    'discover.cta.title': 'اكتشف ما يستحق اقتناءك القادم.',
    'discover.cta.description': 'واصل استكشاف المنتجات والأدلة والأفكار المصممة لتسهيل تجربة الاكتشاف.',
    'discover.cta.button': 'ابدأ الاستكشاف'
  },
  es: {
    'discover.hero.title': 'Encuentra algo que valga la pena tener.',
    'discover.hero.description': 'Explora productos útiles, regalos bien pensados e ideas prácticas seleccionadas por The Peak Collection.',
    'discover.products.title': 'Hallazgos Destacados',
    'discover.products.description': 'Explora productos actualmente destacados por The Peak Collection.',
    'discover.guides.title': 'Ideas Útiles',
    'discover.guides.description': 'Contenido práctico para ayudarte a explorar productos y tomar decisiones informadas.',
    'discover.cta.title': 'Descubre tu próximo gran hallazgo.',
    'discover.cta.description': 'Sigue explorando productos, guías e ideas pensadas para simplificar el descubrimiento.',
    'discover.cta.button': 'Empezar a Explorar'
  },
  fr: {
    'discover.hero.title': 'Trouvez des objets qui en valent la peine.',
    'discover.hero.description': 'Explorez des produits utiles, des cadeaux attentionnés et des idées pratiques sélectionnés par The Peak Collection.',
    'discover.products.title': 'Sélections en Vedette',
    'discover.products.description': 'Découvrez les produits actuellement mis en avant par The Peak Collection.',
    'discover.guides.title': 'Idées Utiles',
    'discover.guides.description': 'Des contenus pratiques pour explorer nos trouvailles et décider en toute confiance.',
    'discover.cta.title': 'Découvrez votre prochaine trouvaille.',
    'discover.cta.description': 'Continuez à explorer des produits, guides et idées conçus pour simplifier vos choix.',
    'discover.cta.button': 'Commencer à Explorer'
  },
  de: {
    'discover.hero.title': 'Finden Sie Dinge, die es wert sind.',
    'discover.hero.description': 'Entdecken Sie praktische Produkte, durchdachte Geschenke und nützliche Ideen, kuratiert von The Peak Collection.',
    'discover.products.title': 'Besondere Empfehlungen',
    'discover.products.description': 'Entdecken Sie Produkte, die aktuell von The Peak Collection empfohlen werden.',
    'discover.guides.title': 'Nützliche Ratgeber',
    'discover.guides.description': 'Praktische Inhalte, die Ihnen helfen, Produkte zu verstehen und fundierte Entscheidungen zu treffen.',
    'discover.cta.title': 'Entdecken Sie Ihren nächsten Fund.',
    'discover.cta.description': 'Entdecken Sie Produkte, Ratgeber und Ideen für einfachere Kaufentscheidungen.',
    'discover.cta.button': 'Jetzt Entdecken'
  },
  it: {
    'discover.hero.title': 'Trova qualcosa che valga la pena avere.',
    'discover.hero.description': 'Esplora prodotti utili, regali pensati e idee pratiche selezionate da The Peak Collection.',
    'discover.products.title': 'Prodotti in Evidenza',
    'discover.products.description': 'Scopri i prodotti attualmente in primo piano su The Peak Collection.',
    'discover.guides.title': 'Idee Utili',
    'discover.guides.description': 'Contenuti pratici per aiutarti a esplorare i prodotti e scegliere con consapevolezza.',
    'discover.cta.title': 'Scopri la tua prossima grande scoperta.',
    'discover.cta.description': 'Continua a esplorare prodotti, guide e idee pensati per rendere semplice ogni scelta.',
    'discover.cta.button': 'Inizia a Esplorare'
  },
  pt: {
    'discover.hero.title': 'Encontre algo que realmente valha a pena.',
    'discover.hero.description': 'Explore produtos úteis, presentes atenciosos e ideias práticas selecionadas pela The Peak Collection.',
    'discover.products.title': 'Destaques Selecionados',
    'discover.products.description': 'Explore os produtos atualmente em destaque na The Peak Collection.',
    'discover.guides.title': 'Ideias Úteis',
    'discover.guides.description': 'Conteúdo prático para ajudar você a explorar produtos e tomar decisões informadas.',
    'discover.cta.title': 'Descubra seu próximo achado valioso.',
    'discover.cta.description': 'Continue explorando produtos, guias e ideias feitas para tornar a descoberta mais simples.',
    'discover.cta.button': 'Começar a Explorar'
  },
  id: {
    'discover.hero.title': 'Temukan sesuatu yang layak Anda miliki.',
    'discover.hero.description': 'Jelajahi produk bermanfaat, hadiah istimewa, dan ide praktis kurasi The Peak Collection.',
    'discover.products.title': 'Pilihan Utama',
    'discover.products.description': 'Jelajahi produk yang saat ini ditampilkan oleh The Peak Collection.',
    'discover.guides.title': 'Ide Bermanfaat',
    'discover.guides.description': 'Panduan praktis untuk membantu Anda memilih produk dengan lebih cermat.',
    'discover.cta.title': 'Temukan pilihan terbaik Anda berikutnya.',
    'discover.cta.description': 'Terus jelajahi produk, panduan, dan inspirasi untuk mempermudah pencarian Anda.',
    'discover.cta.button': 'Mulai Menjelajah'
  },
  ja: {
    'discover.hero.title': '本当に価値あるアイテムを見つけよう。',
    'discover.hero.description': 'The Peak Collectionが厳選した実用的な商品、気の利いたギフト、役立つアイデアをご紹介します。',
    'discover.products.title': '注目のアイテム',
    'discover.products.description': '現在The Peak Collectionがおすすめしている厳選商品をご覧ください。',
    'discover.guides.title': '役立つアイデア',
    'discover.guides.description': '商品選びをサポートし、より納得のいく発見をお手伝いする実践ガイド。',
    'discover.cta.title': '次に手に入れたいお気に入りを見つけよう。',
    'discover.cta.description': '買い物をもっと快適に、厳選された商品やガイドをお楽しみください。',
    'discover.cta.button': '今すぐ見る'
  },
  ko: {
    'discover.hero.title': '간직할 만한 가치가 있는 제품을 발견하세요.',
    'discover.hero.description': 'The Peak Collection이 엄선한 실용적인 제품, 감동을 주는 선물, 유용한 아이디어를 둘러보세요.',
    'discover.products.title': '주목할 만한 추천',
    'discover.products.description': 'The Peak Collection에서 현재 추천하는 엄선 제품들을 확인해보세요.',
    'discover.guides.title': '유용한 아이디어',
    'discover.guides.description': '더 나은 소비 결정을 돕는 실용적이고 체계적인 가이드입니다.',
    'discover.cta.title': '다음으로 소장할 가치 있는 아이템을 찾아보세요.',
    'discover.cta.description': '더 쉬운 발견을 위해 준비된 제품과 가이드를 계속 둘러보세요.',
    'discover.cta.button': '둘러보기 시작'
  },
  zh: {
    'discover.hero.title': '发现真正值得拥有的好物。',
    'discover.hero.description': '探索由 The Peak Collection 精选的实用好物、贴心礼品与实用灵感。',
    'discover.products.title': '精选发现',
    'discover.products.description': '浏览 The Peak Collection 当前主推的精选好物。',
    'discover.guides.title': '实用灵感',
    'discover.guides.description': '助您深入了解产品并做出明智购买决策的实用指南。',
    'discover.cta.title': '发现您的下一件心仪好物。',
    'discover.cta.description': '让探索更简单，继续浏览我们精心挑选的产品与指南。',
    'discover.cta.button': '开始探索'
  }
};

let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

for (const [lang, keys] of Object.entries(translations)) {
  const targetStr = `'hub.digital.empty':`;
  const langHeader = `${lang}: {`;
  const langIdx = content.indexOf(langHeader);
  if (langIdx !== -1) {
    const hubIdx = content.indexOf(targetStr, langIdx);
    if (hubIdx !== -1) {
      const lineEnd = content.indexOf('\n', hubIdx);
      const insertStr = Object.entries(keys)
        .map(([k, v]) => `    '${k}': '${v}',`)
        .join('\n');
      content = content.slice(0, lineEnd + 1) + insertStr + '\n' + content.slice(lineEnd + 1);
    }
  }
}

fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
console.log('Successfully updated src/i18n/ui.ts with missing discover translation keys.');
