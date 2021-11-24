<template>
	<div :id="collapseId" :class="classes" class="collapse">
		<p>{{ collapseContent }}</p>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'CollapseItem',
	props: {
		collapseContent: {
			type: String,
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
