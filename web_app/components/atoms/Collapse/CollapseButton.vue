<template>
	<button :class="classes" type="button" data-bs-toggle="collapse" :data-bs-target="`#${collapseId}`" aria-expanded="false" :aria-controls="`#${collapseId}`">
		{{ collapseText }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'CollapseButton',
	props: {
		collapseText: {
			type: String,
			required: true,
			default: null,
		},
		collapseId: {
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
