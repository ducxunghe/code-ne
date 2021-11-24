import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { Validations } from '~/constants/validations.constants';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
	...required,
	message: 'common.validation.error-message.required',
});

extend('email', {
	...email,
	message: 'common.validation.error-message.invalid',
});

extend('text', (value: string) => {
	if (Validations.no_special_character_pattern.test(value)) {
		return 'common.validation.error-message.invalid';
	}

	return true;
});

extend('message', (value: string) => {
	if (Validations.message_pattern.test(value)) {
		return 'common.validation.error-message.invalid';
	}

	return true;
});

extend('phoneNumber', (value: string) => {
	if (Validations.phone_pattern.test(value)) {
		return true;
	}

	return 'common.validation.error-message.invalid';
});
