<template>
	<div class="home-template">
		<HomeBanner />
		<div class="gradient-background1">
			<HomeSlogan />
			<div class="container">
				<HomeBox
					:title-text="$t('pages.homepage.box-1.title-text')"
					:highlight-text="$t('pages.homepage.box-1.highlight')"
					:link-text="$t('pages.homepage.box-1.button-text')"
					:link="contactLink"
					:sub-title-text="$t('pages.homepage.box-1.sub-title-text')"
					:link-type="0"
				/>
			</div>
		</div>
		<div class="dark-bg">
			<Services />
		</div>
		<div class="box-section-2">
			<div class="container box-section-2-mb">
				<HomeBox
					:title-text="$t('pages.homepage.box-2.title-text')"
					:highlight-text="$t('pages.homepage.box-2.highlight')"
					:link-text="$t('pages.homepage.box-2.button-text')"
					:link="contactLink"
					:sub-title-text="$t('pages.homepage.box-2.sub-title-text')"
					:link-type="0"
				/>
			</div>
		</div>
		<HomeVision />
		<HomeCommitment />
		<!-- <HomeBlog /> -->
		<Partner />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import HomeBanner from '~/components/organisms/HomeBanner/HomeBanner.vue';
import HomeBox from '~/components/molecules/HomeBox/HomeBox.vue';
import HomeSlogan from '~/components/organisms/HomeSlogan/HomeSlogan.vue';
import Services from '~/components/organisms/Services/Services.vue';
import HomeVision from '~/components/organisms/HomeVision/HomeVision.vue';
import HomeCommitment from '~/components/organisms/HomeCommitment/HomeCommitment.vue';
// import HomeBlog from '~/components/organisms/HomeBlog/HomeBlog.vue';
import Partner from '~/components/organisms/Partner/Partner.vue';
import { Routes } from '~/constants/routes';
export default defineComponent({
	name: 'HomeTemplate',
	components: {
		HomeBanner,
		HomeSlogan,
		HomeBox,
		Services,
		HomeVision,
		HomeCommitment,
		// HomeBlog,
		Partner,
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
.gradient-background1 {
	background: #000000;
	padding: 2rem 0;
	margin-top: -5px;
}
.dark-bg {
	background-color: #000000;
}
.box-section-2 {
	background-image: url('/images/backgrounds/bg-home1.jpg');
	background-size: cover;
	padding: 2em 0;
	@media screen and (min-width: 1023px) {
		padding: 5em 0;
	}
	&-mb {
		@media screen and (min-width: 768px) {
			padding: 12px;
		}
	}
}
.home-template {
	margin-top: 5.6em;

	overflow: hidden;
}
</style>
