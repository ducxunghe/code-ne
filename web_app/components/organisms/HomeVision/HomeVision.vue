<template>
	<div class="home-vision">
		<div class="common-container">
			<div class="row">
				<div class="col-md-7 col-12 home-vision-mb">
					<div class="left">
						<CustomHighlightTag
							tag-name="h2"
							classes="home-vision__title"
							:tag-text="$t('pages.homepage.vision.title')"
							:highlight-text="$t('pages.homepage.vision.title')"
						/>
						<CustomTag tag-name="p" classes="home-vision__subtitle" :tag-text="$t('pages.homepage.vision.subtitle')" />
						<Link classes="home-vision__button" :link-text="$t('pages.homepage.vision.button')" :link="contactLink" :link-type="0"></Link>
					</div>
				</div>
				<div class="col-md-5 col-12">
					<ImageAtom classes="image" img-src="/images/icons/earth2.png" img-alt="earth" img-title="earth" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import Link from '~/components/atoms/Link/Link.vue';
import { Routes } from '~/constants/routes';

export default defineComponent({
	name: 'HomeVision',
	components: {
		CustomTag,
		CustomHighlightTag,
		Link,
		ImageAtom,
	},
	props: {},
	setup() {
		const contactLink = Routes.contact_page;

		return {
			contactLink,
		};
	},
});
</script>

<style lang="scss" scoped>
.home-vision {
	padding: 2.625em 0 4em;
	&-mb {
		order: 1;
		@media screen and (min-width: 768px) {
			order: unset;
		}
	}
	@media screen and (min-width: 1024px) {
		padding: 5.625em 0;
	}
	@media screen and (min-width: 2559px) {
		padding: 7.625em 0;
	}
	.left {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		padding-left: 2em;
		padding-right: 2em;
		text-align: center;
		@media screen and (min-width: 768px) {
			padding-left: 2.5em;
			padding-right: 0em;
			text-align: left;
		}
		@media screen and (min-width: 1200px) {
			padding: 0 2.5em;
		}
		@media screen and (min-width: 1920px) {
			padding: 0;
		}
	}
	&__title {
		font-size: 1.375em;
		font-weight: 700;
		line-height: 1.5625em;
		@media screen and (min-width: 1200px) {
			font-size: 2em;
		}
		@media screen and (min-width: 1920px) {
			font-size: 2.5em;
		}
		@media screen and (min-width: 2559px) {
			font-size: 3em;
		}
	}
	&__subtitle {
		font-size: 0.9375em;
		font-weight: 500;
		line-height: 1.4375em;
		margin-bottom: 2em;
		@media screen and (min-width: 1200px) {
			font-size: 1.0625em;
		}
		@media screen and (min-width: 1920px) {
			font-size: 1.5625em;
		}
		@media screen and (min-width: 2559px) {
			font-size: 2.0125em;
		}
	}
	&__button {
		// font-family: roboto;
		font-size: 0.875em;
		font-weight: 500;
		line-height: 1em;
		border: 1px solid var(--vivid-orange);
		padding: 1em 2em;
		color: var(--vivid-orange);
		text-decoration: none;
		@media screen and (min-width: 2559px) {
			font-size: 1.4em;
		}
	}
}
.image {
	width: 100%;
	height: auto;
}
</style>
