<template>
	<component :is="tagName" :id="tagId" :class="classes">
		{{ head }}<span :class="highlightClasses" class="tab__box__author--highlight">{{ middle }}</span
		>{{ foot }}
	</component>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, SetupContext } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'CustomHighlightTag',
	props: {
		tagName: {
			type: String,
			required: true,
			default: 'p',
		},
		tagId: {
			type: String,
			default: null,
		},
		classes: {
			type: String,
			default: null,
		},
		tagText: {
			type: String,
			required: true,
			default: null,
		},
		highlightText: {
			type: String,
			required: true,
			default: null,
		},
		highlightClasses: {
			type: String,
			default: null,
		},
	},
	setup(props: any, _context: SetupContext) {
		const text = props.tagText;
		const highlight = props.highlightText;
		const head = ref(props.head);
		const middle = ref(props.middle);
		const foot = ref(props.foot);

		const setHighlight = (): void => {
			for (let i = 0; i < text.length - highlight.length + 1; i++) {
				const temp = text.slice(i, i + highlight.length);
				if (temp === highlight) {
					head.value = props.tagText.slice(0, i);
					middle.value = temp;
					foot.value = props.tagText.slice(i + highlight.length, text.length);
					break;
				}
			}
		};
		onMounted(() => {
			setHighlight();
		});
		return {
			head,
			middle,
			foot,
		};
	},
});
</script>

<style lang="scss" scoped>
.tab__box__author--highlight {
	color: var(--vivid-orange);
}
</style>
