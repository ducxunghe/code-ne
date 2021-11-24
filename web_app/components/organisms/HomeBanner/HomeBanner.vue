<template>
	<section class="home-banner">
		<!-- <Video classes="home-banner__video" video-src="/videos/720hd.mp4" /> -->
		<!-- <ImageAtom img-src="images/banners/home-banner.png" class="home-img" /> -->
	</section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
// import Video from '~/components/atoms/Video/Video.vue';
// import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
export default defineComponent({
	name: 'HomeSlogan',
	components: {
		// Video,
		// ImageAtom,
	},
	props: {},
});
</script>

<style lang="scss" scoped>
.home-banner {
	height: 90vh;
	background: url('/images/banners/home-banner-moblie.png') no-repeat center center;
	background-size: cover;
	@media screen and (min-width: 768px) {
		background: url('/images/banners/home-banner.png') no-repeat center center;
		background-size: cover;
	}
	@media screen and (min-width: 1024px) {
		height: 90vh;
	}
	@media screen and (min-width: 2560px) {
		height: 100vh;
	}
}
</style>
