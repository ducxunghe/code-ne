import { NuxtAppOptions } from '@nuxt/types';
import { User } from '~/models/dtos/user.dto';
// import HttpUtils from "~/utils/http"
export const useAuthenticationService = () => {
	const login = (user: User, context: NuxtAppOptions): any => {
		return context.$auth.loginWith('local', { data: user });
	};

	return {
		login,
	};
};
