<template>
	<CustomTag v-if="caption" :tag-name="caption.captionTag" :classes="caption.class" :tag-text="caption.captionText" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
// import IntroText from '~/components/organisms/IntroText/IntroText.vue';
export default defineComponent({
	name: 'Banner',
	components: {
		CustomTag,
		// IntroText,
	},
	props: {
		caption: {
			type: Object,
			default: undefined,
		},
	},
});
</script>

<style lang="scss" scoped></style>
