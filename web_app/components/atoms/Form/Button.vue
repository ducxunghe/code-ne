<template>
	<button :id="buttonId" :class="classes" :type="buttonType" :title="buttonTitle" :disabled="buttonDisabled" @click="handleClick()">{{ buttonLabel }}</button>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
import { ButtonType } from '~/constants/settings.constants';

export default defineComponent({
	name: 'Button',
	props: {
		classes: {
			type: String,
			default: null,
		},
		buttonId: {
			type: String,
			default: null,
		},
		buttonTitle: {
			type: String,
			default: null,
		},
		buttonLabel: {
			type: String,
			required: true,
			default: null,
		},
		buttonType: {
			type: String as () => ButtonType,
			default: ButtonType.BUTTON,
		},
		buttonDisabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['handleClick'],
	setup(_: unknown, context: SetupContext) {
		const handleClick = (): void => {
			context.emit('handleClick');
		};
		return {
			handleClick,
		};
	},
});
</script>
