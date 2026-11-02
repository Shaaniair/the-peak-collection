import fs from 'fs';
import path from 'path';

/**
 * The Peak Collection Content Translation Architecture & Automation Helper
 * Supports 13 locales: en (source), tr, ar, ur, es, fr, de, it, pt, id, ja, ko, zh
 */

const LOCALES = ['tr', 'ar', 'ur', 'es', 'fr', 'de', 'it', 'pt', 'id', 'ja', 'ko', 'zh'];

export interface TranslationStatus {
  sourceFile: string;
  locale: string;
  status: 'translated' | 'pending' | 'source';
  lastUpdated: string;
}

export function scanMissingTranslations(contentDir: string): { products: string[]; guides: string[] } {
  const products = fs.existsSync(path.join(contentDir, 'products'))
    ? fs.readdirSync(path.join(contentDir, 'products')).filter(f => f.endsWith('.md'))
    : [];
  const guides = fs.existsSync(path.join(contentDir, 'guides'))
    ? fs.readdirSync(path.join(contentDir, 'guides')).filter(f => f.endsWith('.md'))
    : [];

  return { products, guides };
}

console.log('Content Translation Automation Workflow Initialized for 13 locales.');
