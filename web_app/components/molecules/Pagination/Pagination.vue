<template>
	<nav :aria-label="pagingAriaLabel">
		<ul :id="pagingId" :class="classes" class="pagination">
			<!-- call paging here -->
			<PagingItem text="1" />
			<PagingItem text="2" />
			<PagingItem text="3" />
		</ul>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PagingItem from '~/components/atoms/Paging/PagingItem.vue';
export default defineComponent({
	name: 'Paging',
	components: {
		PagingItem,
	},
	props: {
		pagingAriaLabel: {
			type: String,
			default: null,
		},
		pagingId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		item: {
			type: Number,
			default: null,
		},
	},
});
</script>
