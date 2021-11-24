<template>
	<ValidationObserver ref="form" v-slot="{ handleSubmit, invalid }">
		<form class="form" @submit.prevent="handleSubmit(doSendContactForm)">
			<div class="row animate__animated animate__fadeIn wow">
				<InputField
					v-model="contactForm.name"
					input-field-id="name"
					input-field-type="text"
					:input-field-title="$t('pages.contact.messages.input-fullname.title')"
					:input-field-label="$t('pages.contact.messages.input-fullname.label')"
					:input-field-field="'fullname'"
					classes="col-12"
					:input-field-placeholder="$t('pages.contact.messages.input-fullname.placeholder')"
					input-field-rules="required|text"
					:input-field-maxlength="100"
					@handleInputChange="setName($event)"
				/>
			</div>
			<div class="row animate__animated animate__fadeIn wow">
				<InputField
					v-model="contactForm.email"
					input-field-id="email"
					input-field-type="text"
					:input-field-title="$t('pages.contact.messages.input-email.title')"
					:input-field-label="$t('pages.contact.messages.input-email.label')"
					:input-field-field="'email'"
					classes="col-12"
					:input-field-placeholder="$t('pages.contact.messages.input-email.placeholder')"
					input-field-rules="required|email"
					:input-field-maxlength="100"
					@handleInputChange="setEmail($event)"
				/>
			</div>
			<div class="row animate__animated animate__fadeIn wow">
				<InputField
					v-model="contactForm.company"
					input-field-id="company"
					input-field-type="text"
					:input-field-title="$t('pages.contact.messages.input-company.title')"
					:input-field-label="$t('pages.contact.messages.input-company.label')"
					:input-field-field="'company'"
					classes="col-12 col-lg-6"
					:input-field-placeholder="$t('pages.contact.messages.input-company.placeholder')"
					input-field-rules="text"
					:input-field-maxlength="100"
					@handleInputChange="setCompany($event)"
				/>
				<InputField
					v-model="contactForm.phone"
					input-field-id="phone"
					input-field-type="text"
					:input-field-title="$t('pages.contact.messages.input-phone.title')"
					:input-field-label="$t('pages.contact.messages.input-phone.label')"
					classes="col-12 col-lg-6"
					:input-field-placeholder="$t('pages.contact.messages.input-phone.placeholder')"
					input-field-rules="phoneNumber"
					:input-field-field="'phone'"
					:input-field-maxlength="20"
					@handleInputChange="setPhone($event)"
				/>
			</div>
			<div class="row animate__animated animate__fadeIn wow">
				<TextareaField
					v-model="contactForm.message"
					textarea-field-id="message"
					:textarea-field-title="$t('pages.contact.messages.input-message.title')"
					:textarea-field-label="$t('pages.contact.messages.input-message.label')"
					:textarea-field-field="'message'"
					textarea-field-rules="message"
					classes="col-12"
					:textarea-field-placeholder="$t('pages.contact.messages.input-message.placeholder')"
					:textarea-field-cols="30"
					:textarea-field-rows="5"
					:textarea-field-maxlength="400"
					@handleInputChange="setMessage($event)"
				/>
			</div>
			<div class="row animate__animated animate__fadeIn wow">
				<div class="form__button col-12">
					<Button
						button-type="submit"
						classes="cta-btn"
						:class="invalid ? 'cta-btn--disabled' : ''"
						:button-label="$t('common.buttons.send')"
						:button-title="$t('common.buttons.send')"
						:button-disabled="invalid"
					/>
				</div>
			</div>
		</form>
	</ValidationObserver>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api';
import TextareaField from '~/components/molecules/Form/TextareaField.vue';
import InputField from '~/components/molecules/Form/InputField.vue';
import Button from '~/components/atoms/Form/Button.vue';

// import { languageReplace } from '~/utilities/string.util';
import { useService } from '~/services/service';
import { BusinessContactFormDto } from '~/models/dtos/businesscontactform.dto';

export default defineComponent({
	name: 'BusinessContactForm',
	components: {
		InputField,
		Button,
		TextareaField,
	},
	props: {},
	setup() {
		const context = useContext();
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const vm: any = context;
		const contactForm = reactive<BusinessContactFormDto>({
			customerName: '',
			customerEmail: '',
			companyName: '',
			customerPhone: '',
			contactMessage: '',
		});

		const setName = (value: string): void => {
			contactForm.customerName = value;
		};
		const setEmail = (value: string): void => {
			contactForm.customerEmail = value;
		};
		const setCompany = (value: string): void => {
			contactForm.companyName = value;
		};
		const setPhone = (value: string): void => {
			contactForm.customerPhone = value;
		};
		const setMessage = (value: string): void => {
			contactForm.contactMessage = value;
		};

		// const verifyCaptcha = async (): Promise<any> => {
		// 	try {
		// 		const token = await (context as any).$recaptcha.execute();
		// 		const response = await context.$axios.$post(languageReplace(`${process.env.RECAPCHA_URL}`, [`${process.env.SECRET_KEY}`, token]));
		// 		return response;
		// 	} catch (error) {
		// 		return error;
		// 	}
		// };
		const doSendContactForm = async (): Promise<void> => {
			// call api here or continues emit value to template
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			// const response = await verifyCaptcha();

			const businessContactService = useService().businessContactService;
			const response = await businessContactService.doSendBusinessContact(contactForm);
			if (response.responseStatus === 200) {
				vm.$swal
					.fire(
						context.$i18n('pages.contact.success-messages.success-alert.header'),
						context.$i18n(response.content.message),
						context.$i18n('pages.contact.success-messages.success-alert.icon'),
					)
					.then(() => {
						location.reload();
					});
			} else {
				vm.$swal.fire(context.$i18n('pages.contact.error-message'), context.$i18n(response.content.message), 'error');
			}
		};

		return {
			contactForm,
			doSendContactForm,
			setName,
			setEmail,
			setCompany,
			setPhone,
			setMessage,
		};
	},
});
</script>

<style lang="scss">
.form {
	position: relative;
	width: 100%;
	margin: 0 auto;

	input,
	textarea {
		padding: 10px;
	}
	input::-webkit-input-placeholder {
		color: var(--gray);
	}
	input:-ms-input-placeholder {
		color: var(--gray);
	}
	input::-ms-input-placeholder {
		color: var(--gray);
	}
	input::placeholder {
		color: var(--gray);
	}
	textarea {
		height: 200px;
	}
	textarea::-webkit-input-placeholder {
		color: var(--gray);
	}
	textarea:-ms-input-placeholder {
		color: var(--gray);
	}
	textarea::-ms-input-placeholder {
		color: var(--gray);
	}
	textarea::placeholder {
		color: var(--gray);
	}

	&__button {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
}

.cta-btn {
	width: -webkit-fit-content;
	width: -moz-fit-content;
	width: fit-content;
	border: 1px solid var(--vivid-orange);
	padding: 0.4em 2em;
	font-weight: bold;
	margin: 1em auto;
	color: var(--vivid-orange);
	background: transparent;
	-webkit-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;

	// &:hover,
	// &:focus {
	// 	background: var(--vivid-orange);
	// 	color: var(--white);
	// }

	&--disabled,
	&[disabled],
	&[readonly] {
		color: var(--very-light-gray);
		opacity: 0.6;
		cursor: not-allowed;
		pointer-events: none;
	}
}
</style>
