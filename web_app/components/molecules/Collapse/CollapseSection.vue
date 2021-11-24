<template>
	<li :class="classes">
		<CollapseButton :collapse-id="collapseId" classes="democlass" :collapse-text="collapseTitle" />
		<CollapseItem :collapse-id="collapseId" :collapse-content="collapseContent" />
	</li>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CollapseButton from '~/components/atoms/Collapse/CollapseButton.vue';
import CollapseItem from '~/components/atoms/Collapse/CollapseItem.vue';
export default defineComponent({
	name: 'CollapseSection',
	components: {
		CollapseButton,
		CollapseItem,
	},
	props: {
		collapseTitle: {
			type: String,
			required: true,
			default: null,
		},
		collapseId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		collapseContent: {
			type: String,
			default: null,
		},
	},
});
</script>
