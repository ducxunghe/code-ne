<template>
	<ValidationProvider v-slot="{ validate, errors }" :rules="textareaFieldRules" :class="classes" class="form__group">
		<div class="form__label">
			<Icons classes="form__icon" />
			<Label :for="textareaFieldId" :label-text="textareaFieldLabel" />
		</div>
		<Textarea
			:textarea-id="textareaFieldId"
			:textarea-title="textareaFieldTitle"
			:textarea-placeholder="textareaFieldPlaceholder"
			:textarea-cols="textareaFieldCols"
			:textarea-rows="textareaFieldRows"
			:textarea-maxlength="textareaFieldMaxlength"
			:textarea-validate="validate"
			@handleInputChange="handleInputChange($event)"
		/>
		<CustomTag
			v-if="errors[0]"
			tag-name="p"
			classes="form__warning"
			:tag-text="getErrorMessage(errors[0], $t(`common.field.${textareaFieldField}`)).toLowerCase()"
		/>
	</ValidationProvider>
</template>

<script lang="ts">
import { defineComponent, SetupContext, useContext } from '@nuxtjs/composition-api';
import Label from '~/components/atoms/Form/Label.vue';
import Textarea from '~/components/atoms/Form/Textarea.vue';
import Icons from '~/components/atoms/Icon/Icons.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import { TextareaFieldProps } from '~/models/dtos/props.dto';

export default defineComponent({
	name: 'TextareaField',
	components: {
		Label,
		Textarea,
		Icons,
		CustomTag,
	},
	props: {
		textareaFieldTitle: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: 'col-12',
		},
		textareaFieldId: {
			type: String,
			default: null,
		},
		textareaFieldPlaceholder: {
			type: String,
			default: null,
		},
		textareaFieldLabel: {
			type: String,
			required: true,
			default: null,
		},
		textareaFieldMaxlength: {
			type: Number,
			default: null,
		},
		textareaFieldRows: {
			type: Number,
			default: null,
		},
		textareaFieldCols: {
			type: Number,
			default: null,
		},
		textareaFieldRules: {
			type: String,
			default: null,
		},
		textareaFieldField: {
			type: String,
			default: null,
		},
	},
	emits: ['handleInputChange'],
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setup(textareaFieldProps: TextareaFieldProps, context: SetupContext) {
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
