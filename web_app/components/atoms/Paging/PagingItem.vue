<template>
	<li :id="pagingItemId" :class="classes" class="page-item">
		<a class="page-link" href="#" :aria-label="pagingItemAriaLabel">
			<span v-if="pagingItemIcon !== ''" aria-hidden="true">{{ pagingItemIcon }}</span>
			{{ pagingItemText }}
		</a>
	</li>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'PagingItem',
	props: {
		pagingItemAriaLabel: {
			type: String,
			default: null,
		},
		pagingItemId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		pagingItemIcon: {
			type: String,
			default: null,
		},
		pagingItemText: {
			type: String,
			default: null,
		},
	},
});
</script>
