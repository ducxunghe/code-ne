<template>
	<div>
		<div class="top-banner">
			<div class="top-banner__caption">
				<CommonBanner :caption="caption" />
				<IntroText :intro-text="$t('pages.contact.messages.page-intro')" />
			</div>
		</div>
		<CustomHighlightTag
			tag-name="h2"
			classes="contact__title"
			highlight-classes="orange"
			:tag-text="$t('pages.contact.messages.page-tag-fill')"
			:highlight-text="$t('pages.contact.messages.page-tag-highlight')"
		/>
		<CustomTag tag-name="div" classes="contact__content animate__animated animate__fadeIn wow" :tag-text="$t('pages.contact.messages.page-tag')" />
		<section class="infomation-form">
			<div class="container infomation">
				<div class="m-5"></div>
				<div class="infomation__form col-md-10 offset-md-1 col-12">
					<ContactForm />
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, useContext } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import CustomHighlightTag from '~/components/atoms/CustomTag/CustomHighlightTag.vue';
import ContactForm from '~/components/organisms/Form/ContactForm.vue';
import CommonBanner from '~/components/organisms/CommonBanner/CommonBanner.vue';
import IntroText from '~/components/organisms/IntroText/IntroText.vue';
import { CaptionProps } from '~/models/dtos/props.dto';

export default defineComponent({
	name: 'ContactTemplate',
	components: {
		CustomTag,
		CustomHighlightTag,
		ContactForm,
		CommonBanner,
		IntroText,
	},
	setup() {
		const context = useContext();

		const caption = reactive<CaptionProps>({
			captionTag: 'h1',
			class: 'uppercase',
			captionText: context.$i18n('pages.contact.messages.page-header-title'),
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
	background: linear-gradient(90.36deg, rgba(0, 0, 0, 0.6) 28.21%, rgba(255, 122, 0, 0.6) 104.46%), url('/images/banners/banner-contact-mobile.png') no-repeat;
}

.infomation {
	width: 90%;
	margin: 0 auto;
}
.contact__title {
	line-height: 25px;
	text-align: center;
	padding-top: 5rem;
}
.contact__content {
	text-align: center;
	line-height: 25px;
	padding: 1em 4em;
	font-size: 1rem;
}
@media screen and (min-width: 768px) {
	.contact__title {
		font-size: 1.5625rem;
	}
	.contact__content {
		font-size: 1.1rem;
	}
}
@media screen and (min-width: 992px) {
	.top-banner {
		background: url('/images/banners/banner-contact-pc.png') no-repeat !important;
		background-position: center !important;
		background-size: cover !important;

		&::after {
			min-height: 100vh;
		}
	}

	.contact__title {
		font-size: 1.75rem;
	}
	.contact__content {
		font-size: 1.2rem;
	}
}
@media screen and (min-width: 1200px) {
	.contact__title {
		font-size: 2rem;
		line-height: 35px;
		letter-spacing: 3%;
	}
	.contact__content {
		font-size: 1.3rem;
	}
}
@media screen and (min-width: 2500px) {
	.contact__content {
		font-size: 1.4rem;
	}
}
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
</style>
