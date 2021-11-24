<template>
	<div class="home-blog">
		<div class="common-container">
			<CustomTag tag-name="h1" classes="home-blog__title" :tag-text="$t('pages.homepage.blog.title')" />
			<div class="row">
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
				<HomeBlogItem classes="col-md-4 col-6" blog-title="Sit ament consectetur adipiscing dolor sit amet ." blog-author="inotek" blog-date="23/02/2021" />
			</div>
			<CustomTag tag-name="p" classes="home-blog__read-more" :tag-text="$t('pages.homepage.blog.read-more')" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import HomeBlogItem from '~/components/molecules/HomeBlog/HomeBlogItem.vue';

export default defineComponent({
	name: 'HomeBlog',
	components: {
		CustomTag,
		HomeBlogItem,
	},
	props: {},
});
</script>
<style lang="scss" scoped>
.home-blog {
	padding: 3em 0 0.5em 0;
	@media screen and (min-width: 1200px) {
		padding: 6em 0 3em 0;
	}
	margin-left: 1em;
	margin-right: 1em;
	&__title {
		font-size: 2.125em;
		font-weight: 700;
		color: var(--vivid-orange);
		margin-bottom: 1em;
		@media screen and (min-width: 1023px) {
			font-size: 3.125em;
			margin-top: 2rem;
		}
	}
	&__read-more {
		color: var(--vivid-orange);
		font-size: 1.125em;
		text-align: right;
		font-weight: 700;
		margin-top: 1em;
	}
}
</style>
