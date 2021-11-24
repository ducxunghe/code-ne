<template>
	<div>
		<div class="box">
			<ImageAtom :img-src="src" :img-alt="alt" :img-title="alt" class="box__images" />
			<CustomTag tag-name="p" :tag-text="content" class="box__content" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';

export default defineComponent({
	name: 'ClientStoryBox',
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
		content: {
			type: String,
			required: true,
			default: '',
		},
		title: {
			type: String,
			required: false,
			default: '',
		},
		alt: {
			type: String,
			required: false,
			default: '',
		},
	},
});
</script>
<style lang="scss" scoped>
.box {
	width: 370px;
	height: auto;
	position: relative;
	top: 2rem;
	padding-top: 2rem;
	background-color: rgba(30, 30, 30, 0.6);
	color: #fff;
	margin: 0 auto;
	&__images {
		margin: 0 auto;
	}

	&__content {
		text-align: justify;
		padding: 1rem 1rem;
		margin: 0 auto;
	}
}
@media screen and (min-width: 992px) {
	.box {
		width: 1000px;
		top: 6rem;
		&__content {
			padding: 0 10rem 3rem 10rem;
		}
	}
}
</style>
