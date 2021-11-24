<template>
	<div class="footer__nav">
		<div class="footer__nav__left">
			<nuxt-link v-for="(item, index) in leftNavigation" :key="index" :to="item.link" class="footer__nav__link uppercase none-decoration">
				<ImageAtom img-src="images/icons/icon-arrow.svg" img-alt="arrow-navigation" />
				{{ item.text }}
			</nuxt-link>
		</div>
		<div class="footer__nav__mid">
			<nuxt-link v-for="(item, index) in midNavigation" :key="index" :to="item.link" class="footer__nav__link uppercase none-decoration">
				<ImageAtom img-src="images/icons/icon-arrow.svg" img-alt="arrow-navigation" />
				{{ item.text }}
			</nuxt-link>
		</div>
		<div class="footer__nav__right">
			<nuxt-link v-for="(item, index) in rightNavigation" :key="index" :to="item.link" class="footer__nav__link uppercase none-decoration">
				<ImageAtom img-src="images/icons/icon-arrow.svg" img-alt="arrow-navigation" />
				{{ item.text }}
			</nuxt-link>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import { NavigationListProps } from '~/models/dtos/props.dto';
import { Routes } from '~/constants/routes';

export default defineComponent({
	name: 'FooterNavigation',
	components: {
		ImageAtom,
	},
	setup() {
		const context = useContext();
		const leftNavigation = ref<NavigationListProps[]>([
			{
				link: Routes.home_page,
				class: 'nav-link',
				text: context.$i18n('common.navigation.home'),
			},
		]);
		const midNavigation = ref<NavigationListProps[]>([
			{
				link: Routes.we_provide,
				class: 'nav-link',
				text: context.$i18n('common.navigation.weprovide'),
			},
		]);
		const rightNavigation = ref<NavigationListProps[]>([
			{
				link: Routes.contact_page,
				class: 'nav-link',
				text: context.$i18n('common.navigation.contact'),
			},
		]);
		return {
			leftNavigation,
			midNavigation,
			rightNavigation,
		};
	},
});
</script>

<style lang="scss" scoped>
.footer__nav {
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	padding: 1em 0.8em;
	margin: 2em 0 1em;

	&__left {
		grid-column: 1 / 6;
	}

	&__right {
		grid-column: 8 / -1;
	}

	&__link {
		display: flex;
		font-weight: 400;
		color: var(--very-light-gray);
		padding: 0.3em 0;
		@include transition-ease;

		> img {
			margin-right: 0.5em;
		}

		&:hover {
			color: var(--vivid-orange);
		}
	}

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: center;

		&__left {
			display: flex;
		}

		&__right {
			display: flex;
		}

		&__link {
			padding: 0 1em;
			white-space: nowrap;

			> img {
				display: none;
			}
		}
	}

	@media screen and (min-width: 992px) {
		margin-bottom: 3em;

		&__link {
			padding: 0 1.5em;
			font-weight: 700;
		}
	}

	@media screen and (min-width: 1200px) {
		&__link {
			padding: 0 1.8em;
			font-size: rem(20);
			font-weight: 700;
		}
	}
}
.none-decoration {
	text-decoration: none;
}
</style>
