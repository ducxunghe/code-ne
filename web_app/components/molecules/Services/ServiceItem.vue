<template>
	<div class="serveices__item">
		<ImageAtom classes="serveices__image" :img-alt="alt" :img-src="src" :img-title="alt" />
		<div>
			<CustomTag tag-name="h3" classes="serveices__name" :tag-text="text" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
export default defineComponent({
	name: 'ServicesItem',
	components: {
		ImageAtom,
		CustomTag,
	},
	props: {
		src: {
			type: String,
			required: true,
			default: '',
		},
		alt: {
			type: String,
			required: false,
			default: '',
		},
		text: {
			type: String,
			required: false,
			default: '',
		},
	},
});
</script>

<style lang="scss" scoped>
.serveices__image {
	margin: 0 auto;
	width: 95px;
	@media screen and (min-width: 1024px) {
		font-size: 2.5rem;
		width: 150px;
	}
}
.serveices__item {
	padding: 2rem 2rem 1rem 2rem;
	text-align: center;
	margin: 0 auto;
	background: linear-gradient(180deg, #000000 0%, #2b1000 100%);
	@media screen and (max-width: 426px) {
		width: 80%;
	}
	/* Drop Shadow */
	box-shadow: 0px 0px 6px #000000;
	@include breakpoint(md) {
		margin: 10px;
		background-color: var(--very-dark-gray-4);
		padding: 2rem 1.5rem 1rem 1.5rem;
	}
	@include breakpoint(lg) {
		background-color: var(--very-dark-gray-4);
		padding: 2rem 1.5rem 1rem 1.5rem;
	}
	@include breakpoint(xl) {
		background-color: var(--very-dark-gray-4);
		padding: 2.5rem 2.5rem 2rem 2.5rem;
	}
}
.serveices__name {
	margin-top: 1.5em;
	font-size: 1rem;
	font-weight: 700;
	@include breakpoint(xl) {
		margin-top: 2em;
		font-size: 2rem;
	}
}
</style>
