<template>
	<ValidationProvider v-slot="{ validate, errors }" :rules="inputFieldRules" :class="classes" class="form__group">
		<div class="form__label">
			<Icons classes="form__icon" />
			<Label :for="inputFieldId" :label-text="inputFieldLabel" />
			<Icons :icon-text="inputFieldRules.includes('required') ? '*' : ''" classes="required-star" />
		</div>
		<Input
			:input-id="inputFieldId"
			:input-title="inputFieldTitle"
			:input-type="inputFieldType"
			:input-placeholder="inputFieldPlaceholder"
			:input-maxlength="inputFieldMaxlength"
			:input-validate="validate"
			@handleInputChange="handleInputChange($event)"
		/>
		<CustomTag
			v-if="errors[0]"
			tag-name="p"
			classes="form__warning"
			:tag-text="getErrorMessage(errors[0], $t(`common.field.${inputFieldField}`)).toLowerCase()"
		/>
	</ValidationProvider>
</template>

<script lang="ts">
import { defineComponent, SetupContext, useContext } from '@nuxtjs/composition-api';
import Label from '~/components/atoms/Form/Label.vue';
import Input from '~/components/atoms/Form/Input.vue';
import Icons from '~/components/atoms/Icon/Icons.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import { InputType } from '~/constants/settings.constants';
import { InputFieldProps } from '~/models/dtos/props.dto';

export default defineComponent({
	name: 'InputField',
	components: {
		Label,
		Input,
		Icons,
		CustomTag,
	},
	props: {
		inputFieldTitle: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: 'col-12',
		},
		inputFieldType: {
			type: String as () => InputType,
			default: InputType.TEXT,
		},
		inputFieldId: {
			type: String,
			default: null,
		},
		inputFieldPlaceholder: {
			type: String,
			default: null,
		},
		inputFieldLabel: {
			type: String,
			required: true,
			default: null,
		},
		inputFieldMaxlength: {
			type: Number,
			default: null,
		},
		inputFieldRules: {
			type: String,
			default: null,
		},
		inputFieldField: {
			type: String,
			default: null,
		},
	},
	emits: ['handleInputChange'],
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setup(inputFieldProps: InputFieldProps, context: SetupContext) {
		const app = useContext();

		const handleInputChange = (value: string): void => {
			context.emit('handleInputChange', value);
		};

		const getErrorMessage = (error: string, label: string): string => {
			return app.$i18n(error, { field: label });
		};

		return {
			handleInputChange,
			getErrorMessage,
		};
	},
});
</script>

<style lang="scss">
.form__group {
	margin-bottom: 0.5rem;
}
.form__label {
	display: inline-block;
	font-size: 1.125rem;
	font-weight: 700;
	margin-bottom: 1rem;
	margin-top: 1rem;
}
.form__icon {
	display: inline-block;
	border: 1px var(--vivid-orange) solid;
	width: 0.625rem;
	height: 0.625rem;
	color: var(--vivid-orange);
	background-color: var(--vivid-orange);
	-webkit-transform: rotate(45deg);
	transform: rotate(45deg);
	margin-right: 0.5rem;
}
.form__warning {
	margin-bottom: 0.5em;
	font-size: 0.875rem;
	font-weight: 300;
	color: var(--vivid-orange);
	visibility: unset !important;
}
.required-star {
	display: inline-block;
	color: var(--vivid-orange);
}
</style>
