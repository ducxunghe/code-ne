<template>
	<div :class="classes" class="flower-item">
		<div class="flower-icon">
			<ImageAtom :img-src="src" :img-alt="alt" class="flower-img" />
		</div>

		<div class="flower-content">
			<CustomTag tag-name="h2" classes="flower-title" :class="index % 2 === 0 ? 'flower-title--1' : ''" :tag-text="title" />
			<CustomTag tag-name="p" classes="flower-subtitle" :tag-text="text" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';

export default defineComponent({
	name: 'FlowerItem',
	components: {
		CustomTag,
		ImageAtom,
	},
	props: {
		classes: {
			type: String,
			default: '',
		},
		src: {
			type: String,
			required: true,
			default: '',
		},
		alt: {
			type: String,
			default: '',
		},
		index: {
			type: Number,
			default: 1,
		},
		title: {
			type: String,
			default: '',
		},
		text: {
			type: String,
			default: '',
		},
	},
});
</script>

<style lang="scss" scoped>
.flower-icon {
	margin-top: 40px;
	@media (min-width: 992px) {
		margin-bottom: 20px;
	}
}
.flower-img {
	width: 100px;
	height: 100px;
	margin: 0 auto;
	&::after {
		content: '';
		display: block;
		margin: 0.2em auto;
		width: 40px;
		height: 3px;
		border-radius: 3px;
		background-color: var(--vivid-orange);
	}
}

.flower-item {
	display: flex;
}

.flower-icon {
	flex: 3;
	@include breakpoint(lg) {
		margin-bottom: 20px;
	}
}

.flower-content {
	flex: 7;
	padding: 2rem 0.5rem;
}

.horizontal {
	.flower-title {
		text-align: center;
		padding: 1rem;
		@include breakpoint(lg) {
			text-align: left;
			padding-left: 1rem;
		}
	}
	.flower-subtitle {
		padding: 0 1rem;
		text-align: center;

		@include breakpoint(sm) {
			padding: 1rem 1rem;
		}
		@include breakpoint(lg) {
			padding: 0 1rem;
			text-align: justify;
		}
	}
}

.vertical {
	.flower-title {
		text-align: center;
		padding: 1rem;
	}
	.flower-subtitle {
		padding: 0 1rem;
		text-align: center;
		@include breakpoint(lg) {
			padding: 0;
			text-align: justify;
		}
	}
}
</style>
