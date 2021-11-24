import { Plugin } from '@nuxt/types';
import { Path, Values } from 'vue-i18n/types';

declare module '@nuxt/types' {
	interface Context {
		$i18n(key: Path, values?: Values): string;
	}
}

const i18nPlugin: Plugin = (context) => {
	context.$i18n = (key: Path, values?: Values): string => (context.app.i18n as any).t(key, values);
};

export default i18nPlugin;
