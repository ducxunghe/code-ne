<template>
	<textarea
		:id="textareaId"
		v-model="value"
		:class="classes"
		:title="textareaTitle"
		class="form-control"
		:rows="`${textareaRows}`"
		:cols="`${textareaCols}`"
		:placeholder="textareaPlaceholder"
		:maxlength="`${textareaMaxlength}`"
		@input="textareaValidate"
		@change="handleInputChange()"
	></textarea>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Textarea',
	props: {
		textareaId: {
			type: String,
			default: null,
		},
		textareaTitle: {
			type: String,
			default: null,
		},
		textareaPlaceholder: {
			type: String,
			default: null,
		},
		textareaRows: {
			type: Number,
			default: null,
		},
		textareaCols: {
			type: Number,
			default: null,
		},
		textareaMaxlength: {
			type: Number,
			default: null,
		},
		textareaValidate: {
			type: Function,
			default: undefined,
		},
		classes: {
			type: String,
			default: null,
		},
	},
	emits: ['handleInputChange'],
	setup(_: any, context: SetupContext) {
		const value = ref('');

		const handleInputChange = (): void => {
			context.emit('handleInputChange', value.value);
		};

		return {
			handleInputChange,
			value,
		};
	},
});
</script>

<style lang="scss" scoped>
textarea {
	background: #323232;
	border: none;
	color: #fff;
}
</style>
