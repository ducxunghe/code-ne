<template>
	<label :for="checkboxLabelId" :class="classes" class="form__checkbox-label">
		<i class="icon-checkbox"></i>
		{{ checkboxLabel }}
	</label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'CheckboxLabel',
	props: {
		checkboxLabelId: {
			type: String,
			default: null,
		},
		checkboxLabel: {
			type: String,
			required: true,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
	},
});
</script>

<style lang="scss">
.form__checkbox-label {
	display: inline;
	cursor: pointer;
}

.icon-checkbox {
	display: inline-block;
	border: 1px var(--vivid-orange) solid;
	width: 16px;
	height: 16px;
	margin-right: 8px;
	position: relative;
	bottom: -2px;

	&::after {
		opacity: 0;
		content: '';
		display: inline-block;
		border: 1px var(--vivid-orange) solid;
		background-color: var(--vivid-orange);
		width: 8px;
		height: 8px;
		margin-right: 8px;
		position: relative;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
