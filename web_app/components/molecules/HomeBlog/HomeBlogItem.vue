<template>
	<div :class="classes">
		<div class="blog">
			<ImageAtom :img-src="blogImgSrc" classes="blog-image" :img-alt="blogImgAlt" :img-title="blogImgAlt" />
			<div class="content">
				<CustomTag tag-name="p" classes="blog__title" :tag-text="blogTitle" />
				<div class="author">
					<CustomHighlightTag tag-name="h2" classes="blog__author" :tag-text="`By ${blogAuthor}`" :highlight-text="blogAuthor" />
					<CustomTag tag-name="p" classes="blog__date" :tag-text="blogDate" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
export default defineComponent({
	name: 'HomeBlogItem',
	components: {
		CustomTag,
		ImageAtom,
		CustomHighlightTag,
	},
	props: {
		classes: {
			type: String,
			default: null,
		},
		blogImgSrc: {
			type: String,
			default: '/images/blogs/default-blog.jpg',
		},
		blogImgAlt: {
			type: String,
			default: null,
		},
		blogTitle: {
			type: String,
			default: null,
		},
		blogAuthor: {
			type: String,
			default: null,
		},
		blogDate: {
			type: String,
			default: null,
		},
	},
});
</script>
<style lang="scss" scoped>
.blog {
	background: linear-gradient(16.98deg, #1b1b1b 0%, rgba(0, 0, 0, 0) 100.71%);
	margin-bottom: 1.875em;
	&-image {
		width: 100%;
		height: auto;
	}
	.content {
		padding: 0.6em;
		@media screen and (min-width: 1023px) {
			padding: 1em;
		}
	}
	&__title {
		font-size: 0.9em;
		font-weight: 700;
		margin-bottom: 1em;
		@media screen and (min-width: 1023px) {
			font-size: 1.25em;
			margin-bottom: 2em;
		}
	}
	.author {
		display: flex;
	}
	&__author {
		flex: 1;
		text-align: left;
		font-size: 0.8em;
		@media screen and (min-width: 767px) {
			font-size: 0.875em;
		}
	}
	&__date {
		flex: 1;
		text-align: right;
		font-size: 0.8em;
		@media screen and (min-width: 767px) {
			font-size: 0.875em;
		}
	}
}
</style>
