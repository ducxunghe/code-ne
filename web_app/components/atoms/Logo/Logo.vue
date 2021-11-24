<template>
	<nuxt-link to="/" class="navbar-brand" @click.native="clearActive()">
		<img :src="logoSrc" :alt="logoAlt" />
	</nuxt-link>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
import { Logo } from '~/constants/common.constants';
export default defineComponent({
	name: 'Logo',
	props: {
		logoSrc: {
			type: String,
			required: true,
			default: Logo.default_src,
		},
		logoAlt: {
			type: String,
			default: null,
		},
	},
	emits: ['clearActive'],
	setup(_, context: SetupContext) {
		const clearActive = (): void => {
			context.emit('clearActive');
		};
		return {
			clearActive,
		};
	},
});
</script>

<style lang="scss">
.navbar-brand {
	margin-right: 0;

	@media screen and (min-width: 768px) {
		width: 11.25rem;
	}

	@media screen and (min-width: 992px) {
		width: 20%;

		& img {
			padding: 0;
			margin: 0;
			width: 250px;
		}
	}

	@media screen and (min-width: 1400px) {
		& img {
			padding: 0px;
			margin: 0;
			width: 100%;
		}
	}
}
</style>
