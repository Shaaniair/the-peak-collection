import { ui, defaultLang, rtlLocales, type SupportedLocale, type TranslationKey } from './ui';

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as SupportedLocale;
  return defaultLang;
}

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as SupportedLocale);
}

export function getLocaleDirection(locale: string): 'rtl' | 'ltr' {
  return isRtlLocale(locale) ? 'rtl' : 'ltr';
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: TranslationKey): string {
    const dict = ui[lang] as Record<string, string> | undefined;
    const defaultDict = ui[defaultLang] as Record<string, string>;
    return dict?.[key] || defaultDict[key] || key;
  };
}
