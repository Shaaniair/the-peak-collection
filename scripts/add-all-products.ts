import fs from 'fs';

let content = fs.readFileSync('src/i18n/ui.ts', 'utf8');

const productTranslations: Record<string, { title: string; description: string; category: string }> = {
  tr: {
    title: 'Cozyberry Kısılabilir Mum Isıtıcı Lamba',
    description: 'Kokulu mumları nazikçe eritmek ve alanınıza sıcak dekoratif aydınlatma katmak için tasarlanmış alevsiz mum ısıtıcı lamba.',
    category: 'Ev Dekorasyonu'
  },
  ar: {
    title: 'مصباح تسخين الشموع القابل للخافت Cozyberry',
    description: 'مصباح تسخين شموع بدون لهب مصمم لتذوب الشموع المعطرة بلطف مع إضافة إضاءة ديكورية دافئة لمكانك.',
    category: 'ديكور المنزل'
  },
  ur: {
    title: 'کوزی بیری ڈم ایبل کینڈل وارمر لیمپ',
    description: 'بغیر شعلے کے کینڈل وارمر لیمپ جو خوشبو والی موم بتیوں کو نرمی سے پگھلانے اور آپ کی جگہ کو خوبصورت روشنی دینے کے لیے بنایا گیا ہے۔',
    category: 'ہوم ڈیکور'
  },
  es: {
    title: 'Lámpara Calentador de Velas Regulable Cozyberry',
    description: 'Una lámpara calentador de velas sin llama diseñada para derretir velas aromáticas suavemente mientras añade iluminación decorativa.',
    category: 'Decoración del Hogar'
  },
  fr: {
    title: 'Lampe Chauffe-Bougie Dimmable Cozyberry',
    description: 'Une lampe chauffe-bougie sans flamme conçue pour fondre délicatement les bougies parfumées tout en décorant votre espace.',
    category: 'Décoration Maison'
  },
  de: {
    title: 'Cozyberry Dimmbare Kerzenwärmer-Lampe',
    description: 'Eine flammenlose Kerzenwärmer-Lampe, die Duftkerzen sanft schmilzt und dekoratives Licht in Ihren Raum bringt.',
    category: 'Heimdekoration'
  },
  it: {
    title: 'Lampada Scalda Candela Dimmerabile Cozyberry',
    description: 'Una lampada scalda candela senza fiamma progettata per sciogliere delicatamente le candele profumate.',
    category: 'Arredamento Casa'
  },
  pt: {
    title: 'Lâmpada Aquecedora de Velas Dimmer Cozyberry',
    description: 'Uma lâmpada aquecedora de velas sem chama projetada para derreter velas perfumadas suavemente.',
    category: 'Decoração de Casa'
  },
  id: {
    title: 'Lampu Penghangat Lilin Dimmable Cozyberry',
    description: 'Lampu penghangat lilin tanpa api yang dirancang untuk melelehkan lilin beraroma dengan lembut.',
    category: 'Dekorasi Rumah'
  },
  ja: {
    title: 'Cozyberry 調光式キャンドルウォーマーランプ',
    description: 'アロマキャンドルを優しく溶かし、お部屋に温かみのある装飾照明をプラスする、炎の出ないキャンドルウォーマー。',
    category: 'ホームデコ'
  },
  ko: {
    title: '코지베리 디밍 캔들 워머 램프',
    description: '향초를 부드럽게 녹이고 공간에 따뜻한 장식 조명을 더하도록 설계된 무화염 캔들 워머 램프.',
    category: '홈 데코'
  },
  zh: {
    title: 'Cozyberry 可调光香薰蜡烛暖灯',
    description: '一款无焰蜡烛融蜡灯，旨在温和融化香薰蜡烛，同时为您的空间增添温暖的装饰照明。',
    category: '家居饰品'
  }
};

for (const [lang, data] of Object.entries(productTranslations)) {
  const marker = `${lang}: {`;
  const idx = content.indexOf(marker);
  if (idx !== -1) {
    const nextBrace = content.indexOf('}', idx);
    if (nextBrace !== -1) {
      const snippet = `    'product.candleWarmer.title': '${data.title}',\n    'product.candleWarmer.description': '${data.description}',\n    'product.candleWarmer.category': '${data.category}',\n`;
      content = content.slice(0, nextBrace) + snippet + content.slice(nextBrace);
    }
  }
}

fs.writeFileSync('src/i18n/ui.ts', content, 'utf8');
console.log('Successfully injected product translations into all locales.');
