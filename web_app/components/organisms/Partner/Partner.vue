<template>
	<section class="partner">
		<div class="common-container trust-us animate__animated animate__fadeInLeft wow">
			<CustomTag tag-name="h1" classes="partner__title uppercase" :tag-text="$t('pages.homepage.partner.title')" />
			<div class="partner__logo">
				<div class="row">
					<div class="col-12 col-lg-6">
						<div class="row">
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/hqsv.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/lastmile.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/hepi.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/vogroup.png" img-alt="" classes="partner__image" />
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-6">
						<div class="row">
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/tokunabi-blue.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/tokunabi-green.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/nrit.png" img-alt="" classes="partner__image" />
							</div>
							<div class="col-6 col-lg-3">
								<ImageAtom img-src="/images/logos/kawme.png" img-alt="" classes="partner__image" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="common-container">
			<HomeBox
				:title-text="$t('pages.homepage.partner.box.title-text')"
				:highlight-text="$t('pages.homepage.partner.box.highlight')"
				:link-text="$t('pages.homepage.partner.box.button-text')"
				:link="contactLink"
				:sub-title-text="$t('pages.homepage.partner.box.sub-title-text')"
				:link-type="0"
			/>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import HomeBox from '~/components/molecules/HomeBox/HomeBox.vue';
import { Routes } from '~/constants/routes';
export default defineComponent({
	name: 'Partner',
	components: {
		CustomTag,
		ImageAtom,
		HomeBox,
	},
	setup() {
		const contactLink = Routes.contact_page;

		return {
			contactLink,
		};
	},
});
</script>

<style lang="scss" scoped>
.trust-us {
	background: rgba(28, 28, 28, 0.6);
	padding: 2rem 3rem 3rem 3rem;
	margin-bottom: 4rem;
	@media screen and (min-width: 1023px) {
		padding: 3rem;
	}
}
.box-3 {
	.home-box {
		background: rgba(28, 28, 28, 0.6);
		box-shadow: 0px 0px 6px #000000;
	}
}
.partner {
	padding-top: 4em;
	padding-bottom: 7em;
	background-image: url('/images/backgrounds/bg-home3.jpg');
	background-size: cover;
	&__title {
		text-align: center;
		line-height: 30px;
		letter-spacing: 0.1rem;
		max-width: 100%;

		&::after {
			content: '';
			display: block;
			margin: 0.2em auto;
			// width: 8%;
			width: 60px;
			height: 3px;
			border-radius: 3px;
			background-color: var(--vivid-orange);
		}
	}

	@include breakpoint(lg) {
		padding-top: 5em;

		&__title {
			font-size: rem(35);
		}
	}

	@include breakpoint(xl) {
		&__title {
			font-size: rem(40);
		}
	}
}
.partner {
	&__image {
		border-radius: 50%;
		width: 70%;
		margin: 0 auto;
		margin-bottom: 15px;
		@media screen and (min-width: 1023px) {
			width: 100%;
		}
	}
}
</style>
