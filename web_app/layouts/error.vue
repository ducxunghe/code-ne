<template>
	<div>
		<h1>Page not found123</h1>
	</div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
	layout: 'default',
	prop: {
		error: {
			type: Object,
			default: null,
		},
	},
});
</script>
