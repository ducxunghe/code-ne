<template>
	<div class="provide">
		<WeProvide />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import WeProvide from '~/components/templates/WeProvideTemplate/WeProvide.vue';

export default defineComponent({
	name: 'WeProvidePage',
	components: {
		WeProvide,
	},
});
</script>

<style lang="scss" scoped>
.provide {
	background: #000000;
}
</style>
