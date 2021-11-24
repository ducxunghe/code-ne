<template>
	<div class="home-box">
		<CustomHighlightTag tag-name="h2" classes="home-box__title" :tag-text="titleText" :highlight-text="highlightText" />
		<CustomTag tag-name="p" classes="home-box__subtitle" :tag-text="subTitleText" />
		<Link classes="home-box__button" :link-text="linkText" :link="link" :link-type="linkType"></Link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import Link from '~/components/atoms/Link/Link.vue';
import { LinkType } from '~/constants/settings.constants';

export default defineComponent({
	name: 'HomeBox',
	components: {
		CustomTag,
		CustomHighlightTag,
		Link,
	},
	props: {
		classes: {
			type: String,
			default: null,
		},
		titleText: {
			type: String,
			required: true,
			default: '',
		},
		highlightText: {
			type: String,
			required: true,
			default: '',
		},
		subTitleText: {
			type: String,
			required: true,
			default: '',
		},
		linkText: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		linkType: {
			type: Number as () => LinkType,
			default: LinkType.EXTERNAL,
		},
	},
});
</script>

<style lang="scss" scoped>
.home-box {
	text-align: center;
	background: rgba(28, 28, 28, 0.6);
	padding: 3rem 1rem;
	@media screen and (min-width: 768px) {
		width: 600px;
		margin: 0 auto;
	}
	@media screen and (min-width: 1440px) {
		width: 750px;
		margin: 0 auto;
	}
	@media screen and (min-width: 2560px) {
		width: 1000px;
		margin: 0 auto;
		padding: 5rem 3rem;
	}
	&__title {
		font-size: 1rem;
		font-weight: 700;
		@media screen and (min-width: 375px) {
			font-size: 1.2rem;
		}
		@media screen and (min-width: 425px) {
			font-size: 1.4rem;
		}
		@media screen and (min-width: 768px) {
			font-size: 1.4rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 1.7rem;
		}
		@media screen and (min-width: 2560px) {
			font-size: 2.5rem;
		}
	}
	&__subtitle {
		font-size: 0.8rem;
		font-weight: 500;
		line-height: 1.5rem;
		text-align: center;
		padding: 1rem 0.2rem;
		@media screen and (min-width: 425px) {
			font-size: 1rem;
		}
		@media screen and (min-width: 768px) {
			font-size: 0.8rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 1rem;
		}
		@media screen and (min-width: 2560px) {
			font-size: 1.5rem;
			line-height: 2rem;
			padding: 3rem 1rem;
		}
	}
	&__button {
		font-size: 0.7rem;
		font-weight: 500;
		line-height: 1em;
		border: 1px solid var(--vivid-orange);
		padding: 1rem 1rem;
		color: var(--vivid-orange);
		text-decoration: none;
		@media screen and (min-width: 425px) {
			font-size: 1rem;
		}
		@media screen and (min-width: 768px) {
			font-size: 0.8rem;
			padding: 1rem 2rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 1rem;
		}
		@media screen and (min-width: 2560px) {
			font-size: 1.5rem;
			padding: 2rem 3rem;
		}
	}
}
</style>
