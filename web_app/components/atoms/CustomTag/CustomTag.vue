<template>
	<component :is="tagName" :id="tagId" :class="classes"> {{ tagText }} </component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'CustomTag',
	props: {
		tagName: {
			type: String,
			required: true,
			default: 'p',
		},
		tagId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		tagText: {
			type: String,
			default: null,
		},
	},
});
</script>
