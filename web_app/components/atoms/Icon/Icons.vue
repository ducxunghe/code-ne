<template>
	<div :id="iconId" :class="classes">{{ iconText }}</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Icons',
	props: {
		iconId: {
			type: String,
			default: null,
		},
		iconText: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
	},
});
</script>
