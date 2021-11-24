<template>
	<div>
		<HomeTemplate />
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import HomeTemplate from '~/components/templates/HomeTemplate/HomeTemplate.vue';
export default defineComponent({
	name: 'HomePage',
	components: {
		HomeTemplate,
	},
	setup() {
		const context = useContext();

		useMeta({
			title: `${context.$i18n('pages.homepage.page-title')}${context.$i18n('common.web-title')}}`,
		});
		return {};
	},
	head: {},
});
</script>

<style lang="scss" scoped></style>
