<template>
	<div>
		<BusinessContactTemplate />
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import BusinessContactTemplate from '~/components/templates/BusinessContactTemplate/BusinessContactTemplate.vue';

export default defineComponent({
	name: 'BusinessContactPage',
	components: {
		BusinessContactTemplate,
	},
	setup() {
		const context = useContext();

		useMeta({
			title: `${context.$i18n('pages.businesscontact.messages.page-title')}${context.$i18n('common.web-title')}}`,
		});
		return {};
	},
	head: {},
});
</script>

<style></style>
