<template>
	<header>
		<nav class="navbar navbar-expand-lg navigation-wrap">
			<div class="container">
				<Logo class="logo" logo-src="images/logos/logo-inotek.png" logo-alt="Inotek logo" @clearActive="clearActive()" />
				<div class="toggle" data-bs-toggle="collapse" data-bs-target="#navbarText"><span></span><span></span><span></span><span></span></div>
				<HeaderNavigation :navigation-list="navigationList" @doActive="doActive($event)" />
				<LanguageBar />
			</div>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import Logo from '~/components/atoms/Logo/Logo.vue';
import HeaderNavigation from '~/components/molecules/Navigation/HeaderNavigation.vue';
import LanguageBar from '~/components/molecules/LanguageBar/LanguageBar.vue';
import { NavigationListProps } from '~/models/dtos/props.dto';
import { Routes } from '~/constants/routes';

export default defineComponent({
	name: 'Header',
	components: {
		Logo,
		HeaderNavigation,
		LanguageBar,
	},
	setup() {
		const context = useContext();
		const navigationList = ref<NavigationListProps[]>([
			{
				link: Routes.home_page,
				class: 'nav-link',
				text: context.$i18n('common.navigation.home'),
				isActive: false,
			},
			{
				link: Routes.we_provide,
				class: 'nav-link',
				text: context.$i18n('common.navigation.weprovide'),
				isActive: false,
			},
			{
				link: Routes.contact_page,
				class: 'nav-link',
				text: context.$i18n('common.navigation.contact'),
				isActive: false,
			},
		]);
		const doActive = (value: string): void => {
			navigationList.value.forEach((item: NavigationListProps, _index: number) => {
				if (value === item.text) {
					navigationList.value.forEach((item: NavigationListProps) => {
						item.isActive = false;
					});
					item.isActive = true;
				}
			});
		};
		const clearActive = (): void => {
			navigationList.value.forEach((item: NavigationListProps) => {
				item.isActive = false;
			});
		};
		return {
			navigationList,
			doActive,
			clearActive,
		};
	},
});
</script>

<style lang="scss" scoped>
.logo {
	width: 175px;
	height: 40px;
	margin-bottom: 10px;
	@media screen and (min-width: 2560px) {
		width: 250px;
		height: 80px;
	}
}
.navigation-wrap {
	position: fixed;
	top: -1px;
	width: 100%;
	z-index: 1000;
	-webkit-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
	background: var(--dark-bg);
	text-align: center;
	@media screen and (min-width: 2560px) {
		height: 150px;
	}
}

.toggle {
	margin-top: 15px;
	transform: translate(-50%, -50%);
	width: 40px;
	padding: 10px;

	& span {
		display: block;
		width: 30px;
		height: 3px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: var(--white);
		@include transition-ease;
		box-shadow: 0 2px 2px rgba(134, 116, 116, 0.2);

		&:nth-child(1) {
			transform: translate(-50%, -50%) translateY(-10px);
			transition: 0.3s;
		}
		&:nth-child(4) {
			transform: translate(-50%, -50%) translateY(10px);
			transition: 0.3s;
		}
	}

	&.open span:nth-child(1) {
		transform: translate(-50%, -50%) translateY(-35px);
		opacity: 0;
	}
	&.open span:nth-child(4) {
		transform: translate(-50%, -50%) translateY(35px);
		opacity: 0;
	}
	&.open span:nth-child(2) {
		transform: translate(-50%, -50%) rotate(45deg);
		transition-delay: 0.2s ease;
	}
	&.open span:nth-child(3) {
		transform: translate(-50%, -50%) rotate(-45deg);
		transition-delay: 0.2s ease;
	}

	@media screen and (min-width: 576px) {
		display: block;
	}

	@media screen and (min-width: 992px) {
		display: none;
	}
}
</style>
