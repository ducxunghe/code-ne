<template>
	<component
		:is="linkType === 1 ? 'a' : 'nuxt-link'"
		:id="linkId"
		:to="linkType === 0 ? link : ''"
		:href="linkType === 1 ? (externalType === '' ? link : `${externalType}to:${link}`) : ''"
		:target="linkType === 0 ? '' : '_blank'"
		:class="classes"
		@click.native="doChangeLocale()"
	>
		{{ linkText }}
	</component>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
import { LinkType, ExternalLinkType } from '~/constants/settings.constants';
import { Validations } from '~/constants/validations.constants';
import { PropertyProps } from '~/models/dtos/props.dto';

export default defineComponent({
	name: 'Link',
	props: {
		classes: {
			type: String,
			default: null,
		},
		linkId: {
			type: String,
			default: null,
		},
		linkText: {
			type: String,
			required: true,
			default: null,
		},
		link: {
			type: String,
			default: null,
		},
		linkType: {
			type: Number as () => LinkType,
			default: LinkType.EXTERNAL,
		},
		externalType: {
			type: String as () => ExternalLinkType,
			default: ExternalLinkType.NONE,
		},
	},
	emits: ['doChangeLocale'],
	setup(props: PropertyProps, context: SetupContext) {
		const doChangeLocale = (): void => {
			if (props.linkText !== undefined) {
				context.emit('doChangeLocale', props.linkText.replace(Validations.not_letter_and_space_pattern, '').trim());
			}
		};

		return {
			doChangeLocale,
		};
	},
});
</script>
