<template>
	<div class="product-container common-container">
		<div class="product-intro">
			<CustomHighlightTag
				tag-name="h2"
				class="product-intro__title"
				:tag-text="$t('pages.weprovide.product-and-service.title')"
				:highlight-text="$t('pages.weprovide.product-and-service.title')"
			/>
			<CustomTag class="product-intro__text" tag-name="p" :tag-text="$t('pages.weprovide.product-and-service.content')" />
		</div>

		<div class="proOur">
			<ProductAndServiceItem
				v-for="(item, index) in productAndServiceList"
				:key="index"
				:src="item.src"
				:alt="item.alt"
				:index="index"
				:title="item.title"
				:content="item.content"
				:classes="item.classes"
				:img1="item.img1"
				:text1="item.text1"
				:img2="item.img2"
				:text2="item.text2"
				:title-text="item.titleText"
				:highlight-text="item.highlightText"
				:link-text="item.linkText"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import ProductAndServiceItem from '~/components/molecules/ProductAndService/ProductAndServiceItem.vue';

type ProductAndServiceList = {
	src: string;
	alt?: string;
	title: string;
	titleText: string;
	classes: string;
	img1?: string;
	text1?: string;
	img2?: string;
	text2?: string;
	content?: string;
	highlightText?: string;
	linkText?: string;
};

export default defineComponent({
	name: 'ProductAndService',
	components: {
		CustomTag,
		CustomHighlightTag,
		ProductAndServiceItem,
	},
	setup() {
		const app = useContext();
		const productAndServiceList = ref<ProductAndServiceList[]>([
			{
				src: '/images/icons/icon-production.png',
				alt: app.$i18n('pages.weprovide.flower-list.item1.alt'),
				title: app.$i18n('pages.weprovide.product-and-service.card1.title'),
				content: app.$i18n('pages.weprovide.product-and-service.card1.content'),
				titleText: app.$i18n('pages.weprovide.product-and-service.card1.text'),
				highlightText: app.$i18n('pages.weprovide.product-and-service.card1.highlight'),
				classes: 'left-title',
				img1: '/images/weprovide/product-and-service1.png',
				text1: app.$i18n('pages.weprovide.product-and-service.card1.img-text1'),
				img2: '/images/weprovide/product-and-service1.png',
				text2: app.$i18n('pages.weprovide.product-and-service.card1.img-text2'),
				linkText: app.$i18n('pages.weprovide.product-and-service.card1.link'),
			},
			{
				src: '/images/icons/icon-oursoucing.png',
				alt: app.$i18n('pages.weprovide.flower-list.item2.alt'),
				title: app.$i18n('pages.weprovide.product-and-service.card2.title'),
				content: app.$i18n('pages.weprovide.product-and-service.card2.content'),
				titleText: app.$i18n('pages.weprovide.product-and-service.card2.text'),
				highlightText: app.$i18n('pages.weprovide.product-and-service.card2.highlight'),
				classes: 'animate__fadeInDown',
				img1: '/images/weprovide/product-and-service2.png',
				text1: app.$i18n('pages.weprovide.product-and-service.card2.img-text1'),
				img2: '/images/weprovide/product-and-service3.png',
				text2: app.$i18n('pages.weprovide.product-and-service.card2.img-text2'),
				linkText: app.$i18n('pages.weprovide.product-and-service.card1.link'),
			},
		]);

		return {
			productAndServiceList,
		};
	},
});
</script>

<style lang="scss" scoped>
.product-container {
	margin-top: 155px;
}
.product-intro {
	padding: 0 1.3rem;
	margin: 0 auto;
	@include breakpoint(lg) {
		padding: 0 2rem 1rem 2rem;
	}
	&__title {
		font-size: 1.875rem;
	}
	&__text {
		font-size: 1.3rem;
	}
}

.proOur {
	display: grid;
	grid-template-columns: 1fr;
	column-gap: 50px;
	row-gap: 50px;
	box-shadow: 0px 0px 6px var(--black);
	font-style: var(--font-slogan);
	width: 95%;
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
</style>
