<template>
	<div>
		<CommonBanner :caption="caption" />
		<IntroText :intro-text="$t('pages.businesscontact.messages.page-intro')" />
		<section class="infomation-form">
			<div class="container infomation animate__animated animate__fadeIn wow">
				<CustomHighlightTag
					tag-name="h2"
					classes="infomation__title"
					highlight-classes="orange"
					:tag-text="$t('pages.businesscontact.messages.page-tag')"
					:highlight-text="$t('pages.businesscontact.messages.page-tag-highlight')"
				/>
				<div class="m-5"></div>
				<div class="infomation__form col-md-10 offset-md-1 col-12">
					<BusinessContactForm />
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from '@vue/composition-api';
import { useContext } from '@nuxtjs/composition-api';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import BusinessContactForm from '~/components/organisms/Form/BusinessContactForm.vue';
import CommonBanner from '~/components/organisms/CommonBanner/CommonBanner.vue';
import IntroText from '~/components/organisms/IntroText/IntroText.vue';
import { CaptionProps } from '~/models/dtos/props.dto';

export default defineComponent({
	name: 'BusinessContactTemplate',
	components: {
		BusinessContactForm,
		CustomHighlightTag,
		CommonBanner,
		IntroText,
	},
	setup() {
		const context = useContext();

		const caption = reactive<CaptionProps>({
			captionTag: 'h1',
			class: 'uppercase',
			captionText: context.$i18n('pages.businesscontact.messages.page-header-title'),
		});

		onMounted(() => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			(context as any).$wow({ live: false, offset: 0 }).init();
		});

		return {
			caption,
		};
	},
});
</script>

<style lang="scss" scoped>
.top-banner {
	background: linear-gradient(90.36deg, rgba(0, 0, 0, 0.6) 28.21%, rgba(255, 122, 0, 0.6) 104.46%),
		url('/images/banners/banner-businesscontact-mobile.png') no-repeat;

	@media screen and (min-width: 992px) {
		background: url('/images/banners/banner-businesscontact-pc.png') no-repeat !important;
		background-position: center !important;
		background-size: cover !important;

		&::after {
			min-height: 100vh;
		}
	}
}
.infomation {
	width: 90%;
	margin: 0 auto;

	&__title {
		line-height: 25px;
		text-align: center;
	}

	@media screen and (min-width: 768px) {
		&__title {
			font-size: 1.5625rem;
		}
	}

	@media screen and (min-width: 992px) {
		&__title {
			font-size: 1.75rem;
		}
	}

	@media screen and (min-width: 1200px) {
		&__title {
			font-size: 2rem;
			line-height: 35px;
			letter-spacing: 3%;
		}
	}
}
</style>
