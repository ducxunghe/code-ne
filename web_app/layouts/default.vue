<template>
	<div class="wrapper">
		<Header></Header>
		<Nuxt />
		<Footer></Footer>
		<Preloading />
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import Preloading from '~/components/atoms/Preloading/Preloading.vue';
import Header from '~/components/organisms/Header/Header.vue';
import Footer from '~/components/organisms/Footer/Footer.vue';
export default defineComponent({
	components: {
		Preloading,
		Header,
		Footer,
	},
});
</script>

<style lang="scss" scoped>
.wrapper {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
footer {
	background-color: black;
}
</style>
