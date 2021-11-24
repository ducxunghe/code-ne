<template>
	<div>
		<PrivacyPolicyTemplate />
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import PrivacyPolicyTemplate from '~/components/templates/PrivacyPolicy/PrivacyPolicyTemplate.vue';

export default defineComponent({
	name: 'PrivacyPolicyPage',
	components: {
		PrivacyPolicyTemplate,
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
