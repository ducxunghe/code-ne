<template>
	<img :id="imgId" :class="classes" :src="imgSrc" :alt="imgAlt" :title="imgTitle" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'ImageAtom',
	props: {
		imgTitle: {
			type: String,
			default: null,
		},
		imgId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		imgSrc: {
			type: String,
			required: true,
			default: null,
		},
		imgAlt: {
			type: String,
			default: null,
		},
	},
});
</script>
