<template>
	<div>
		<ContactTemplate />
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import ContactTemplate from '~/components/templates/ContactTemplate/ContactTemplate.vue';

export default defineComponent({
	name: 'ContactPage',
	components: {
		ContactTemplate,
	},
	setup() {
		const context = useContext();

		useMeta({
			title: `${context.$i18n('pages.contact.messages.page-title')}${context.$i18n('common.web-title')}}`,
		});
		return {};
	},
	head: {},
});
</script>

<style></style>
