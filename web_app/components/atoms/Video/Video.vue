<template>
	<video id="banner-video" :class="classes" autoplay="1" loop>
		<source :src="videoSrc" type="video/mp4" />
	</video>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Video',
	props: {
		classes: {
			type: String,
			default: null,
		},
		videoSrc: {
			type: String,
			required: true,
			default: null,
		},
	},
});
</script>
