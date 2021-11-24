<template>
	<div :id="loadingId" class="item" :class="loadingActive ? 'active' : 'deactive'">
		<i class="loader preload"></i>
	</div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';
export default defineComponent({
	name: 'Preloading',
	props: {
		loadingId: {
			type: String,
			default: null,
		},
		loadingActive: {
			type: Boolean,
			default: false,
		},
	},
	setup() {
		const app = useContext();

		const activeState = app.store.state.preloading.isActive;

		return {
			activeState,
		};
	},
});
</script>

<style lang="scss" scoped>
.loader {
	--color: black;
	--size-mid: 6vmin;
	--size-dot: 1.5vmin;
	--size-bar: 0.4vmin;
	--size-square: 80px;

	display: block;
	position: relative;
	width: 50%;
	display: grid;
	place-items: center;
	transform: translate(50%, 45vh);
}
.loader::before,
.loader::after {
	content: '';
	box-sizing: border-box;
	position: absolute;
}
.loader.preload::before,
.loader.preload::after {
	width: var(--size-square);
	height: var(--size-square);
	background-color: var(--color);
}

.loader.preload::before {
	top: calc(50% - var(--size-square));
	left: calc(50% - var(--size-square));
	animation: loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}

.loader.preload::after {
	top: 50%;
	left: 50%;
	animation: loader-7 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}
@keyframes loader-6 {
	0%,
	100% {
		transform: none;
	}

	25% {
		transform: translateX(100%);
	}

	50% {
		transform: translateX(100%) translateY(100%);
	}

	75% {
		transform: translateY(100%);
	}
}
@keyframes loader-7 {
	0%,
	100% {
		transform: none;
	}

	25% {
		transform: translateX(-100%);
	}

	50% {
		transform: translateX(-100%) translateY(-100%);
	}

	75% {
		transform: translateY(-100%);
	}
}

.active {
	display: block;
	position: fixed;
	background: white;
	width: 100%;
	height: 100%;
	opacity: 0.7;
	z-index: 99;
}
.deactive {
	display: none;
}
</style>
