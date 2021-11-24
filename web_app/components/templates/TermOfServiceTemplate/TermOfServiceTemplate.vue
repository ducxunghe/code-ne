<template>
	<div class="common-container">
		<CustomTag tag-name="h1" classes="term-header" :tag-text="$t('pages.term-of-service.header')" />
		<div v-html="data"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
export default defineComponent({
	name: 'TermOfServiceTemplate',
	components: {
		CustomTag,
	},
	setup() {
		const context = useContext();
		const data = 'this is content';
		useMeta({
			title: `${context.$i18n('pages.term-of-service.page-title')}${context.$i18n('common.web-title')}}`,
		});
		return {
			data,
		};
	},
	head: {},
});
</script>

<style lang="scss" scoped>
.term-header {
	text-align: center;
	font-size: 50px;
	color: var(--vivid-orange);
}
</style>
