<template>
	<div>
		<div class="flower-container common-container">
			<div class="flower-intro">
				<CustomHighlightTag
					tag-name="h2"
					class="flower-intro__title"
					:tag-text="$t('pages.weprovide.process.title')"
					:highlight-text="$t('pages.weprovide.process.title')"
				/>
				<CustomTag class="flower-intro__text" tag-name="p" :tag-text="$t('pages.weprovide.process.content')" />
			</div>
			<div class="flower">
				<FlowerItem
					v-for="(item, index) in flowerList"
					:key="index"
					:src="item.src"
					:alt="item.alt"
					:index="index"
					:title="item.title"
					:text="item.text"
					:classes="item.classes"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import FlowerItem from '~/components/molecules/Flower/FlowerItem.vue';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
type FlowerList = {
	src: string;
	alt?: string;
	title: string;
	text: string;
	classes: string;
};

export default defineComponent({
	name: 'Flower',
	components: {
		FlowerItem,
		CustomTag,
		CustomHighlightTag,
	},
	setup() {
		const app = useContext();
		const flowerList = ref<FlowerList[]>([
			{
				src: '/images/icons/icon-advise.png',
				alt: app.$i18n('pages.weprovide.flower-list.item1.alt'),
				title: app.$i18n('pages.weprovide.flower-list.item1.title'),
				text: app.$i18n('pages.weprovide.flower-list.item1.text'),
				classes: 'horizontal',
			},
			{
				src: '/images/icons/icon-oursoucing.png',
				alt: app.$i18n('pages.weprovide.flower-list.item2.alt'),
				title: app.$i18n('pages.weprovide.flower-list.item2.title'),
				text: app.$i18n('pages.weprovide.flower-list.item2.text'),
				classes: 'vertical',
			},
			{
				src: '/images/icons/icon-optimize.png',
				alt: app.$i18n('pages.weprovide.flower-list.item3.alt'),
				title: app.$i18n('pages.weprovide.flower-list.item3.title'),
				text: app.$i18n('pages.weprovide.flower-list.item3.text'),
				classes: 'horizontal',
			},
			{
				src: '/images/icons/icon-run.png',
				alt: app.$i18n('pages.weprovide.flower-list.item4.alt'),
				title: app.$i18n('pages.weprovide.flower-list.item4.title'),
				text: app.$i18n('pages.weprovide.flower-list.item4.text'),
				classes: 'vertical',
			},
		]);

		return {
			flowerList,
		};
	},
});
</script>

<style lang="scss" scoped>
.flower-container {
	margin-top: 155px;
}
.flower-intro {
	padding: 0 1.4rem;
	margin: 0 auto;
	&__title {
		font-size: 1.875rem;
	}
	&__text {
		font-size: 1.3rem;
	}
}

.flower {
	display: grid;
	grid-template-rows: repeat(4, 1fr);
	row-gap: 20px;
	text-align: center;
	padding: 20px;
	@include breakpoint(lg) {
		grid-template-columns: repeat(3, 1fr);
		column-gap: 20px;
		row-gap: 20px;
	}
	&-item {
		display: flex;
		flex-direction: column;
		background-color: #131313;
	}

	&-img {
		padding: 40px 0 30px;
		margin: 0 auto;
	}
	&-content {
		font-style: var(--font-primary);
		font-weight: lighter;
	}
	&-title {
		text-align: center;
	}
	&-subtitle {
		color: var(--very-light-gray);
		margin-top: 30px;
		line-height: 1.5rem;
		padding: 0 30px;
		text-align: justify;
	}
}

@media screen and (min-width: 992px) {
	.flower {
		grid-template-rows: 300px 150px 300px;
		&-item {
			display: flex;
			align-items: center;
			text-align: center;
			padding: 20px;
			background-color: #131313;
		}
		&-item:first-child {
			grid-column: 1/3;
			grid-row: 1/2;
			flex-direction: row;
		}
		&-item:nth-child(2) {
			grid-column: 3/4;
			grid-row: 1/3;
			flex-direction: column;
		}
		&-item:nth-child(3) {
			grid-column: 2/4;
			grid-row: 3/4;
			flex-direction: row;
		}
		&-item:last-child {
			grid-column: 1/2;
			grid-row: 2/4;
			flex-direction: column;
		}
		&-img {
			flex-shrink: 0;
			padding: 20px 10px;
		}
		&-content {
			// margin: 0 30px;
			text-align: start;
		}
	}
}
</style>
