// import { Context } from '@nuxt/types';
// import Vue from 'vue';
// @ts-ignore
import { WOW } from 'wowjs';

// Vue.use(new WOW({
//   live: false
// }).init());

// export default (_context: Context, inject: any) => {
//   inject('wow', () => new WOW())
// }

import { Plugin } from '@nuxt/types';

declare module '@nuxt/types' {
	interface Context {
		$wow(config: string): void;
	}
}

const wowPlugin: Plugin = (context) => {
	context.$wow = (config: string): void => new WOW(config);
};

export default wowPlugin;
