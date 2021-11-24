import { $axios } from './axios.util';

export default class HttpUtils {
	private static httpOptions = {
		'App-Locale': 'ja',
		'Content-Type': 'application/json; charset=UTF-8', // 'Content-Type': 'multipart/form-data',
		'Device-Secret-Key': 'xxxxxx',
	};

	public static doGet = (requestUrl: string): Promise<any> => {
		return $axios.$get(requestUrl);
	};

	public static doPost = (requestUrl: string, paramBody: any): Promise<any> => {
		return $axios.$post(requestUrl, paramBody);
	};

	public static doPut = (requestUrl: string, paramBody: any): Promise<any> => {
		return $axios.$put(requestUrl, paramBody);
	};

	public static doPatch = (requestUrl: string, paramBody: any): Promise<any> => {
		return $axios.$patch(requestUrl, paramBody);
	};

	public static doDelete = (requestUrl: string, paramBody: any): Promise<any> => {
		return $axios.$delete(requestUrl, paramBody);
	};

	// public static doUpload = (requestUrl: string, fd: FormData): Promise<any> => {
	// 	return $axios.$post(requestUrl, fd, { headers: httpOptions });
	// };
}
