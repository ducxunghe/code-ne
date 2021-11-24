<template>
	<div>
		<div class="proOur__item animate__animated animate__fadeInLeft wow bounce" data-wow-delay="0.5s">
			<ImageAtom :img-src="src" :img-alt="alt" :img-title="alt" classes="proOur__icon" />
			<CustomTag tag-name="h2" classes="proOur__title" :tag-text="title" />
			<CustomTag tag-name="p" classes="proOur__subtitle" :tag-text="content" />
			<CustomHighlightTag tag-name="h2" classes="proOur__intro" :tag-text="titleText" :highlight-text="highlightText" />
			<div class="proOur__img">
				<div>
					<ImageAtom class="img-card" :img-src="img1" :img-alt="alt" :img-title="alt" />
					<CustomTag tag-name="p" classes="img-text1" :tag-text="text1" />
				</div>
				<div>
					<ImageAtom class="img-card" :img-src="img2" :img-alt="alt" :img-title="alt" />
					<CustomTag tag-name="p" classes="img-text2" :tag-text="text2" />
				</div>
			</div>
			<div class="introduce">
				<Link :link-text="linkText" :link="link" :link-type="0" class="introduce-btn" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import Link from '~/components/atoms/Link/Link.vue';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import { LinkType } from '~/constants';
export default defineComponent({
	name: 'ProductAndServiceItem',
	components: {
		CustomTag,
		ImageAtom,
		Link,
		CustomHighlightTag,
	},
	props: {
		src: {
			type: String,
			required: true,
			default: '',
		},
		img1: {
			type: String,
			required: true,
			default: '',
		},
		img2: {
			type: String,
			required: true,
			default: '',
		},
		content: {
			type: String,
			required: true,
			default: '',
		},
		highlightText: {
			type: String,
			required: true,
			default: '',
		},
		text1: {
			type: String,
			required: false,
			default: '',
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
		text2: {
			type: String,
			required: false,
			default: '',
		},
		alt: {
			type: String,
			required: false,
			default: '',
		},
		titleText: {
			type: String,
			required: false,
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
.proOur {
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 50px;
	row-gap: 50px;
	box-shadow: 0px 0px 6px var(--black);
	font-style: var(--font-slogan);
	width: 90%;
	margin: 0 auto;

	@include breakpoint(md) {
		grid-template-columns: 1fr 1fr;
	}

	&__item {
		display: flex;
		flex-direction: column;
		background-color: var(--very-dark-gray-4);
	}

	&__icon {
		margin-left: auto;
		margin-right: auto;
		margin-top: 40px;
	}

	&__title {
		color: var(--white);
		line-height: 25px;
		text-align: center;
		padding: 1rem 1rem 0.2rem 1rem;

		&::after {
			content: '';
			display: block;
			margin: 0.2em auto;
			width: 40px;
			height: 3px;
			border-radius: 3px;
			background-color: var(--vivid-orange);
		}
	}

	&__intro {
		text-align: center;
		padding-bottom: 20px;
		span {
			color: var(--vivid-orange);
		}
	}

	&__subtitle {
		color: var(--very-light-gray);
		font-size: rem(15);
		line-height: 23px;
		text-align: center;
		padding: 0 2rem 2em;
		font-weight: lighter;
	}

	&__img {
		margin: 0 auto;
	}
	// &__text{
	//     margin-top: -100px;
	//     width: 450px;
	// 	color: var(--very-light-gray);
	// 	font-size: rem(15);
	// 	line-height: 23px;
	// 	text-align: center;
	// 	padding: 0 1rem 0 0rem;
	// 	margin-bottom: 80px;
	// }
}

.proOur__icon {
	width: 100px;
	height: 100px;
}

.img-card {
	width: 100%;
	margin-bottom: 20px;
	background: linear-gradient(90.36deg, rgba(0, 0, 0, 0.6) 28.21%, rgba(255, 122, 0, 1) 104.46%);
}

.proOur__img {
	position: relative;
	width: 100%;
}
.img-text1 {
	position: absolute;
	bottom: 15rem;
	left: 0.5rem;
	padding: 0 2rem;
	@include breakpoint(sm) {
		bottom: 22rem;
	}
	@include breakpoint(md) {
		bottom: 15rem;
	}
	@include breakpoint(lg) {
		bottom: 18rem;
	}
	@include breakpoint(xl) {
		bottom: 22rem;
	}
	@include breakpoint(xxl) {
		bottom: 22rem;
	}
}
// @media screen and (min-width: 1024px) {
// 	.img-text1 {
// 		bottom: 19rem;
// 	}
// }
@media screen and (min-width: 1920px) {
	.img-text1 {
		bottom: 22rem;
	}
}
.img-text2 {
	position: absolute;
	bottom: 2rem;
	left: 0.5rem;
	padding: 0 2rem;
}
.introduce {
	text-align: center;
	margin-bottom: 30px;
	margin: 30px 0 30px;
	.introduce-btn {
		height: 60px;
		border: 1px solid var(--vivid-orange);
		padding: 1em 3em;
		font-weight: bold;
		line-height: 23px;
		color: var(--vivid-orange);
		background: transparent;
		@include transition-ease;

		&:hover {
			background: var(--vivid-orange);
			color: var(--white);
		}
	}
}
</style>
