<template>
	<div>
		<TermOfServiceTemplate />
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import TermOfServiceTemplate from '~/components/templates/TermOfServiceTemplate/TermOfServiceTemplate.vue';
export default defineComponent({
	name: 'TermOfServicePage',
	components: {
		TermOfServiceTemplate,
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
