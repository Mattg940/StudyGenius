import en from './locales/en.json' assert { type: 'json' };
import es from './locales/es.json' assert { type: 'json' };
import fr from './locales/fr.json' assert { type: 'json' };
import de from './locales/de.json' assert { type: 'json' };
import pt from './locales/pt.json' assert { type: 'json' };
import it from './locales/it.json' assert { type: 'json' };
import zh from './locales/zh.json' assert { type: 'json' };
import ja from './locales/ja.json' assert { type: 'json' };
import ko from './locales/ko.json' assert { type: 'json' };
import hi from './locales/hi.json' assert { type: 'json' };
import ar from './locales/ar.json' assert { type: 'json' };
import ru from './locales/ru.json' assert { type: 'json' };
import tr from './locales/tr.json' assert { type: 'json' };
import id from './locales/id.json' assert { type: 'json' };
import vi from './locales/vi.json' assert { type: 'json' };

export const dictionaries: Record<string, Record<string, string>> = {
	en: en as Record<string, string>,
	es: es as Record<string, string>,
	fr: fr as Record<string, string>,
	de: de as Record<string, string>,
	pt: pt as Record<string, string>,
	it: it as Record<string, string>,
	zh: zh as Record<string, string>,
	ja: ja as Record<string, string>,
	ko: ko as Record<string, string>,
	hi: hi as Record<string, string>,
	ar: ar as Record<string, string>,
	ru: ru as Record<string, string>,
	tr: tr as Record<string, string>,
	id: id as Record<string, string>,
	vi: vi as Record<string, string>,
};

export function t(key: string, locale: string = 'en'): string {
	const base = dictionaries['en'] as Record<string, string>;
	const dict = (dictionaries[locale] as Record<string, string> | undefined) ?? base;
	return (dict?.[key] as string | undefined) ?? (base?.[key] as string | undefined) ?? key;
}