<template>
	<input
		:id="inputId"
		v-model="value"
		:type="inputType"
		:title="inputTitle"
		:class="classes"
		class="form-control"
		:placeholder="inputPlaceholder"
		:maxlength="`${inputMaxlength}`"
		@input="inputValidate"
		@change="handleInputChange()"
	/>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from '@nuxtjs/composition-api';
import { InputType } from '~/constants/settings.constants';
export default defineComponent({
	name: 'Input',
	props: {
		inputType: {
			type: String as () => InputType,
			default: InputType.TEXT,
		},
		inputTitle: {
			type: String,
			default: null,
		},
		inputId: {
			type: String,
			default: null,
		},
		inputPlaceholder: {
			type: String,
			default: null,
		},
		inputMaxlength: {
			type: Number,
			default: null,
		},
		inputValidate: {
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
input {
	background: #323232;
	height: 50px;
	border: none;
	color: #fff;
}
</style>
