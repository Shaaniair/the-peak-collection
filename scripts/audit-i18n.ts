import { ui, languages, defaultLang, type SupportedLocale, type TranslationKey } from '../src/i18n/ui';

console.log('=== TPC 13-Language UI Translation Audit ===\n');

const masterKeys = Object.keys(ui[defaultLang]) as TranslationKey[];
const locales = Object.keys(languages) as SupportedLocale[];

let totalKeys = masterKeys.length;
let hasError = false;

console.log(`Master Language (en) Keys Count: ${totalKeys}`);
console.log(`Total Locales Checked: ${locales.length}\n`);

const auditResults: Record<SupportedLocale, { missing: string[]; empty: string[]; count: number }> = {} as any;

for (const locale of locales) {
  auditResults[locale] = { missing: [], empty: [], count: 0 };
  const dict = (ui as any)[locale] || {};
  
  for (const key of masterKeys) {
    if (!(key in dict)) {
      auditResults[locale].missing.push(key);
      hasError = true;
    } else if (!dict[key] || dict[key].trim() === '') {
      auditResults[locale].empty.push(key);
      hasError = true;
    } else {
      auditResults[locale].count++;
    }
  }
}

console.log('--- Coverage Report Per Locale ---');
for (const locale of locales) {
  const res = auditResults[locale];
  const percent = Math.round((res.count / totalKeys) * 100);
  const status = res.count === totalKeys ? '✅ 100%' : `⚠️ ${percent}% (${res.count}/${totalKeys})`;
  console.log(`${locale.padEnd(5)} (${languages[locale].padEnd(18)}): ${status}`);
  if (res.missing.length > 0) {
    console.log(`      Missing Keys: ${res.missing.join(', ')}`);
  }
  if (res.empty.length > 0) {
    console.log(`      Empty Keys: ${res.empty.join(', ')}`);
  }
}

console.log('\n=== Audit Summary ===');
if (!hasError) {
  console.log('🎉 PASS: All 13 locales have complete UI key coverage without missing or empty values!');
} else {
  console.log('⚠️ WARNING: Some locales are missing dictionary keys. Fallbacks will apply for missing strings.');
}
