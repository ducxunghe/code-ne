import { Context, Plugin } from '@nuxt/types';
import { initializeAxios } from '~/utilities/axios.util';

const accessor: Plugin = (context: Context) => {
	initializeAxios(context.$axios);

	context.$axios.onRequest((config: any) => {
		config.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
		config.headers.common['Access-Token'] = process.env.ACCESS_TOKEN;
		config.headers.common['Device-Uuid'] = process.env.DEVICE_UUID;
		config.headers.common['Device-Secret-Key'] = process.env.DEVIECE_SECRET_KEY;
		config.headers.common['App-Locale'] = (context.app.i18n as any).locale;
		config.headers.common.Accept = 'application/json';
		return config;
	});
};

export default accessor;
