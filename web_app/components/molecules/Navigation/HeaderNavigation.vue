<template>
	<div id="navbarText" class="collapse navbar-collapse">
		<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
			<li v-for="item in navigationList" :key="item.index" class="nav-item">
				<Link :link-type="0" :link="item.link" :classes="item.isActive ? 'nav-link active' : 'nav-link'" :link-text="item.text" />
			</li>
			<li class="nav-item language-item">
				<LanguageBar class="mobile-language" />
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
import Link from '~/components/atoms/Link/Link.vue';
import LanguageBar from '~/components/molecules/LanguageBar/LanguageBar.vue';
export default defineComponent({
	name: 'HeaderNavigation',
	components: {
		Link,
		LanguageBar,
	},
	props: {
		navigationList: {
			type: Array,
			required: true,
		},
	},
	emits: ['doActive'],
	setup(_, context: SetupContext) {
		const doActive = (event: any): void => {
			context.emit('doActive', event);
		};
		return {
			doActive,
		};
	},
});
</script>

<style lang="scss" scoped>
.nav-link {
	font-weight: 600;
	-webkit-transition: all 0.5s ease-in-out;
	transition: all 0.5s ease-in-out;
	color: var(--white);

	&:hover {
		color: var(--white);
	}

	@media screen and (min-width: 576px) {
		font-size: 0.8rem;

		&:hover {
			color: var(--vivid-orange);
		}
	}

	@media screen and (min-width: 1400px) {
		margin-left: 15px;
		font-size: 1rem;
	}
	@media screen and (min-width: 2560px) {
		margin-left: 15px;
		font-size: 1.5rem;
	}
}
.mobile-language {
	display: block;
	margin-left: 0;
	margin-top: 10px;
}
.active {
	color: var(--vivid-orange) !important;
}

@media screen and (min-width: 992px) {
	.language-item {
		display: none;
	}
}
</style>
