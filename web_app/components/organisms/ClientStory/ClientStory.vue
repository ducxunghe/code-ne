<template>
	<div class="story">
		<CustomTag class="story__title" tag-name="h2" :tag-text="$t('pages.weprovide.client-story.title')" />
		<ClientStoryBox
			v-for="(item, index) in clientBox"
			:key="index"
			:src="item.src"
			:alt="item.alt"
			:index="index"
			:title="item.title"
			:content="item.content"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ClientStoryBox from '~/components/molecules/ClientStoryBox/ClientStoryBox.vue';
type ClientBox = {
	src: string;
	alt?: string;
	content?: string;
	title?: string;
};

export default defineComponent({
	name: 'ClientStory',
	components: {
		CustomTag,
		ClientStoryBox,
	},
	setup() {
		const app = useContext();
		const clientBox = ref<ClientBox[]>([
			{
				src: '/images/weprovide/last-mile-logo.png',
				alt: app.$i18n('pages.weprovide.flower-list.item1.alt'),
				title: app.$i18n('pages.weprovide.product-and-service.card1.title'),
				content: app.$i18n('pages.weprovide.client-story.box-content'),
			},
		]);

		return {
			clientBox,
		};
	},
});
</script>

<style lang="scss" scoped>
.story {
	margin-top: 155px;
	width: 100%;
	height: 465px;
	background-image: url('/images/weprovide/client-story-mobile.png');
	background-size: cover;
	padding: 5em 0;
	&__title {
		text-align: center;
		font-size: 1.875rem;
		&::after {
			content: '';
			display: block;
			margin: 0.2em auto;
			width: 185px;
			height: 3px;
			border-radius: 3px;
			background-color: var(--vivid-orange);
		}
	}
}
@media (min-width: 992px) {
	.story {
		background-image: url('/images/weprovide/story-banner.png');
		background-size: cover;
	}
}
</style>
