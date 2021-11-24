<template>
	<div :class="classes">
		<div class="provide-item">
			<h1 class="provide-number">{{ provideServiceNumber }}</h1>
			<h2 class="provide-title">{{ provideServiceTitle }}</h2>
			<ImageAtom classes="provide-image" :img-src="provideServiceSrc" :img-alt="provideServiceAlt" :img-title="provideServiceAlt" />
			<p class="provide-subtitle">{{ provideServiceSubtitle }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';

export default defineComponent({
	name: 'ProvideServiceItem',
	components: {
		ImageAtom,
	},
	props: {
		classes: {
			type: String,
			default: null,
		},
		provideServiceNumber: {
			type: String,
			default: null,
		},
		provideServiceTitle: {
			type: String,
			default: null,
		},
		provideServiceSubtitle: {
			type: String,
			default: null,
		},
		provideServiceSrc: {
			type: String,
			default: null,
		},
		provideServiceAlt: {
			type: String,
			default: null,
		},
	},
});
</script>

<style lang="scss" scoped>
.provide-number {
	font-family: 'Roboto';
	font-size: 7.5em;
	-webkit-text-stroke-width: 1px;
	color: transparent;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: white;
}
.provide-title {
	font-size: 1em;
	letter-spacing: 0.03em;
	width: 100%;
	margin-top: -20px;
	@media screen and (min-width: 1023px) {
		font-size: 1.5em;
		width: 80%;
	}
	@media screen and (min-width: 1200px) {
		font-size: 2em;
	}
}
.provide-subtitle {
	font-weight: 500;
	font-size: 1em;
	line-height: 1.4375em;
	@media screen and (min-width: 1023px) {
		font-size: 1.0625em;
	}
}
.provide-image {
	margin: 0 auto;
}
.provide-item {
	background: linear-gradient(16.98deg, #1b1b1b 0%, rgba(0, 0, 0, 0) 100.71%);
	padding: 10px 16px;
	min-height: 525px;
	@media screen and (min-width: 767px) {
		width: 70%;
		margin: 0 auto;
	}
	@media screen and (min-width: 1024px) {
		width: 100%;
		margin: unset;
	}
}
.odd {
	@media screen and (min-width: 1023px) {
		margin-top: 4em;
	}
}
</style>
