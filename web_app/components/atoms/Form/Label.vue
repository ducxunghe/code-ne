<template>
	<label :for="labelId" :class="classes" class="form-label">{{ labelText }}</label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Label',
	props: {
		labelId: {
			type: String,
			default: null,
		},
		labelText: {
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
