<template>
	<div class="language language__link">
		<Link
			v-for="(item, index) in localeList"
			:key="index"
			:link-type="0"
			:link="''"
			classes="language__item language__link--white-text"
			:link-text="item"
			@doChangeLocale="doChangeLocale($event)"
		></Link>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import Link from '~/components/atoms/Link/Link.vue';
import { Locale } from '~/constants/settings.constants';

export default defineComponent({
	name: 'LanguageBar',
	components: {
		Link,
	},
	setup() {
		const context = useContext();
		const localeList = ref<string[]>([Locale.english, Locale.vietnamese, Locale.japanse]);
		const doChangeLocale = (locale: string): void => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(context.app.i18n as any).setLocale(locale.toLowerCase());
			context.app.router?.go(0);
		};
		return {
			localeList,
			doChangeLocale,
		};
	},
});
</script>

<style lang="scss" scoped>
.language {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	margin-top: 15px;
	margin-left: 30px;
	display: none;
	@media screen and (min-width: 2560px) {
		font-size: 1.5rem;
	}
	&__link {
		margin-top: 0;

		&--white-text {
			color: var(--white);
			text-decoration: none;

			&:hover {
				color: var(--vivid-orange);
				transition: all 0.5s ease-in-out;
			}
		}
	}

	&__item {
		padding-right: 2px;
		border-right: 1px solid var(--white);

		&:nth-child(2),
		&:nth-child(3) {
			padding-left: 4px;
		}

		&:nth-child(3) {
			border-right: none;
		}
	}

	@media screen and (min-width: 992px) {
		display: block;
	}
}
</style>
