<template>
	<div>
		<div class="top-banner">
			<div class="top-banner__caption">
				<CommonBanner :caption="caption" />
				<IntroText :intro-text="$t('pages.weprovide.intro-text.text')" />
			</div>
		</div>
		<Flower />
		<ProductAndService />
		<!-- <ClientStory /> -->
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, useContext } from '@nuxtjs/composition-api';
import CommonBanner from '~/components/organisms/CommonBanner/CommonBanner.vue';
import { CaptionProps } from '~/models/dtos/props.dto';
import Flower from '~/components/organisms/Flower/Flower.vue';
import IntroText from '~/components/organisms/IntroText/IntroText.vue';
import ProductAndService from '~/components/organisms/ProductAndService/ProductAndService.vue';
// import ClientStory from '~/components/organisms/ClientStory/ClientStory.vue';
export default defineComponent({
	name: 'WeProvide',
	components: {
		CommonBanner,
		Flower,
		ProductAndService,
		IntroText,
		// ClientStory,
	},
	setup() {
		const context = useContext();

		const caption = reactive<CaptionProps>({
			captionTag: 'h1',
			class: 'uppercase',
			captionText: context.$i18n('pages.weprovide.banner.caption'),
		});

		onMounted(() => {
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
	height: 100%;
	min-height: 70vh;
	position: relative;
	background-position: center !important;
	background-size: cover !important;

	&__caption {
		position: absolute;
		left: 0;
		top: 30%;
		text-align: center;
		h1 {
			line-height: 30px;
			font-size: 1.875rem;
			text-align: center;
			font-weight: bold;
		}
		@include breakpoint(sm) {
			top: 38%;
		}
	}

	@media screen and (min-width: 992px) {
		min-height: 100vh;

		&::after {
			content: '';
			display: block;
			margin-left: 2rem;
			height: 100%;
			width: 400px;
			background: var(--black);
			opacity: 0.8;
		}

		&__caption {
			text-align: left;
			top: 36%;
			left: -4%;
			z-index: 5;

			width: 537px;

			h1 {
				font-size: 2rem;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		&::after {
			width: 400px;
			margin-left: 1rem;
		}
		&__caption {
			text-align: left;
			top: 36%;
			left: -5%;
			z-index: 5;
			h1 {
				font-size: 2rem;
				text-align: center;
				font-weight: bold;
			}
		}
	}

	@media screen and (min-width: 1400px) {
		min-height: 100vh;

		&::after {
			content: '';
			display: block;
			margin-left: 7em;
			height: 100%;
			width: 500px;
			background: var(--black);
			opacity: 0.8;
		}

		&__caption {
			margin-left: 6em;
			top: 36%;
			left: 0%;
			z-index: 5;
			width: 537px;

			h1 {
				font-size: 2.5rem;
			}
		}
	}

	@media screen and (min-width: 1500px) {
		&::after {
			width: 500px;
			margin-left: 13rem;
		}
		&__caption {
			text-align: left;
			top: 36%;
			margin-left: 13rem;
			width: 500px;
			z-index: 5;
			h1 {
				font-size: 2.5rem;
				text-align: center;
				font-weight: bold;
			}
		}
	}

	@media screen and (min-width: 1920px) {
		&::after {
			width: 500px;
			margin-left: 23rem;
		}
		&__caption {
			text-align: left;
			top: 36%;
			margin-left: 23rem;
			width: 500px;
			z-index: 5;
			h1 {
				font-size: 2.8rem;
				text-align: center;
				font-weight: bold;
			}
		}
	}
}
.top-banner {
	background: linear-gradient(90.36deg, rgba(0, 0, 0, 0.6) 28.21%, rgba(30, 30, 30, 0.6) 104.46%), url('/images/banners/banner-we-provide-mobile.png') no-repeat;
}

@media screen and (min-width: 992px) {
	.top-banner {
		background: url('/images/banners/banner-we-provide-pc.png') no-repeat !important;
		background-position: center !important;
		background-size: cover !important;
		&::after {
			min-height: 100vh;
		}
	}
}
</style>
