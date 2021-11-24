<template>
	<div class="slogan">
		<div class="slogan__title">
			<CustomTag tag-name="h2" tag-text="Innovation" />
			<CustomTag tag-name="h2" tag-text="Technology" />
		</div>
		<div class="slogan__name">
			<CustomTag tag-name="p" :tag-text="$t('pages.homepage.slogan.main-slogan')" />
			<CustomTag tag-name="p" :tag-text="$t('pages.homepage.slogan.sub-slogan')" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';

export default defineComponent({
	name: 'HomeSlogan',
	components: {
		CustomTag,
	},
	props: {},
});
</script>

<style lang="scss" scoped>
.slogan {
	position: relative;
	text-align: justify;
	padding: 2rem 0;
	&__title > h2 {
		text-align: center;
		color: #000;
		opacity: 0.6;
		text-transform: uppercase;
		font-family: var(--font-slogan);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: white;
		font-size: 2.8rem;
		&:nth-of-type(1) {
			letter-spacing: 6px;
		}
		&:nth-of-type(2) {
			letter-spacing: 3px;
		}
		@media screen and (min-width: 375px) {
			font-size: 3.4rem;
		}
		@media screen and (min-width: 425px) {
			font-size: 3.8rem;
			&:nth-of-type(1) {
				letter-spacing: 7px;
			}
		}
		@media screen and (min-width: 768px) {
			font-size: 7.1rem;
			&:nth-of-type(1) {
				letter-spacing: 10px;
			}
		}
		@media screen and (min-width: 1024px) {
			&:nth-of-type(1) {
				font-size: 9.9rem;
				letter-spacing: 10px;
			}
			&:nth-of-type(2) {
				font-size: 8.9rem;
				letter-spacing: 10px;
			}
		}
		@media screen and (min-width: 1440px) {
			&:nth-of-type(1) {
				font-size: 14.2rem;
				letter-spacing: 10px;
			}
			&:nth-of-type(2) {
				font-size: 12.8rem;
			}
		}
		@media screen and (min-width: 2560px) {
			&:nth-of-type(1) {
				font-size: 26rem;
				letter-spacing: 10px;
			}
			&:nth-of-type(2) {
				font-size: 23.5rem;
			}
		}
	}
	&__name {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: bold;
		color: var(--vivid-orange);
		font-size: 2rem;
		text-align: center;
		line-height: 2rem;
		width: fit-content;
		background: #000000;
		margin: 0, auto;
		p {
			margin: 0;
		}
		@media screen and (min-width: 425px) {
			font-size: 2.5rem;
			line-height: 2.5rem;
		}
		@media screen and (min-width: 768px) {
			font-size: 4rem;
			line-height: 4rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 5rem;
			line-height: 5rem;
		}
		@media screen and (min-width: 1440px) {
			font-size: 8rem;
			line-height: 8rem;
		}
		@media screen and (min-width: 2560px) {
			font-size: 12rem;
			line-height: 12rem;
		}
	}
}
</style>
