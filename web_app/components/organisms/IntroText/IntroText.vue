<template>
	<div class="intro">
		<CustomTag tag-name="p" class="intro__text" :tag-text="introText" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
export default defineComponent({
	name: 'IntroText',
	components: {
		CustomTag,
	},
	props: {
		introText: {
			type: String,
			required: true,
			default: null,
		},
	},
});
</script>

<style lang="scss" scoped>
.intro {
	width: 100%;
	&__text {
		text-align: center;
		font-size: 1.5rem;
		color: var(--vivid-orange);
		padding: 3rem 2rem;
		line-height: 2rem;
		@include breakpoint(lg) {
			padding: 3rem;
			text-align: justify;
		}
		@include breakpoint(xl) {
			padding: 3rem 6rem;
			font-size: 1.4rem;
			line-height: 3rem;
			text-align: justify;
		}
		@include breakpoint(xxl) {
			padding: 2rem 3rem;
			text-align: justify;
		}
	}
	@media screen and (min-width: 1920px) {
		&__text {
			font-size: 2.2rem;
			text-align: justify;
		}
	}
}

// .intro-text {
// 	margin: 2em;
// 	position: relative;
// 	max-width: 900px;

// 	@media screen and (min-width: 992px) {
// 		position: absolute;
// 		display: inline-block;
// 		top: 46%;
// 		margin-top: 0.5em;
// 	}

// 	@media screen and (min-width: 1200px) {
// 		top: 40%;
// 	}

// 	@media screen and (min-width: 2500px) {
// 		top: 45%;
// 		margin-left: 19em;
// 	}
// 	.intro-wrapper {
// 		text-align: center;
// 		color: var(--vivid-orange);

// 		@media screen and (min-width: 992px) {
// 			text-align: left;
// 			margin-left: 6.3em;
// 			padding-right: 20em;
// 		}

// 		@media screen and (min-width: 1200px) {
// 			padding-right: 15em;
// 			.intro {
// 				font-size: 2.5rem;
// 				widows: 480px;
// 			}
// 		}

// 		@media screen and (min-width: 2500px) {
// 			padding-right: 11em;
// 			.intro {
// 				font-size: 2.5rem;
// 				widows: 480px;
// 			}
// 		}
// 	}
// }
</style>
