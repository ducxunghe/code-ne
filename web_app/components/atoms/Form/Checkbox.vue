<template>
	<input :id="checkboxId" :value="checkboxValue" :name="checkboxName" :class="classes" type="checkbox" class="form-check-input" @change="handleInputChange" />
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Checkbox',
	props: {
		checkboxValue: {
			type: String,
			default: null,
		},
		checkboxName: {
			type: String,
			default: null,
		},
		checkboxId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
	},
	emits: ['handleInputChange'],
	setup(_, context: SetupContext) {
		const handleInputChange = (value: string): void => {
			context.emit('handleInputChange', value);
		};
		return {
			handleInputChange,
		};
	},
});
</script>

<style lang="scss">
input[type='checkbox'] {
	visibility: hidden;
}
input[type='checkbox']:checked ~ .form__checkbox-label .icon-checkbox:after {
	opacity: 1;
}
</style>
