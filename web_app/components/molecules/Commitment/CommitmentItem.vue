<template>
	<div :class="classes">
		<div class="commitment-item">
			<CustomTag tag-name="h2" classes="commitment-item__title" :tag-text="itemTitle" />
			<CustomTag tag-name="p" classes="commitment-item__subtitle" :tag-text="itemSubtitle" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
export default defineComponent({
	name: 'CommitmentItem',
	components: {
		CustomTag,
	},
	props: {
		classes: {
			type: String,
			default: null,
		},
		itemTitle: {
			type: String,
			default: null,
		},
		itemSubtitle: {
			type: String,
			default: null,
		},
	},
});
</script>
<style lang="scss" scoped>
.commitment-item {
	width: 90%;
	padding: 3.5em 2em;
	border-radius: 30px;
	background: rgba(0, 0, 0, 0.7);
	margin: 0 auto;
	height: 100%;
	@media screen and (min-width: 768px) {
		padding: 3em 2em;
	}
	@media screen and (min-width: 1200px) {
		padding: 5em 2em;
	}
	&__title {
		font-family: var(--font-primary);
		font-size: 1.5em;
		color: var(--vivid-orange);
		@media screen and (min-width: 1200px) {
			font-size: 2em;
		}
	}
	&__subtitle {
		font-family: var(--font-primary);
		font-size: 1em;
		margin-top: 1em;
		@media screen and (min-width: 1024px) {
			margin-top: 0em;
		}
		@media screen and (min-width: 1200px) {
			font-size: 1.0625em;
			margin-top: 1em;
		}
	}
}
.left {
	.commitment-item {
		@media screen and (min-width: 767px) {
			margin-left: 2rem;
		}
		@media screen and (min-width: 1024px) {
			margin-left: 3rem;
		}
		@media screen and (min-width: 1200px) {
			margin: 0 auto;
		}
	}
}
.right {
	.commitment-item {
		@media screen and (min-width: 767px) {
			margin-right: 2rem;
		}
		@media screen and (min-width: 1024px) {
			margin-right: 3rem;
		}
		@media screen and (min-width: 1200px) {
			margin: 0 auto;
		}
	}
}
</style>
