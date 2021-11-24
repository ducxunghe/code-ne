import { NuxtAxiosInstance } from '@nuxtjs/axios';

let $axios: NuxtAxiosInstance; // eslint-disable-line

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
	$axios = axiosInstance;
};

export { $axios };
