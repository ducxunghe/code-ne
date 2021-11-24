<template>
	<div class="service-layout">
		<div class="services common-container">
			<CustomTag tag-name="div" classes="cilent title" :tag-text="$t('pages.homepage.services.title')" />
			<div class="m-3"></div>
			<div class="serveices__list animate__animated animate__fadeInLeft wow bounce">
				<ServicesItem v-for="(item, index) in serviceList" :key="index" :src="item.src" :alt="item.alt" :text="item.text" />
			</div>
			<div class="m-5"></div>
		</div>
		<!-- <div class="provide-service common-container">
			<CustomTag tag-name="h1" classes="provide-service__title" tag-text="Cung cấp dịch vụ giải pháp" />
			<div class="row">
				<ProvideServiceItem
					classes="col-lg-3 col-6 "
					provide-service-number="01"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-1.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-1.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 odd"
					provide-service-number="02"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-2.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-2.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 "
					provide-service-number="03"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-3.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-3.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 odd"
					provide-service-number="04"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-4.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-4.subtitle')"
				/>
			</div>
			<div class="row service-row-2">
				<ProvideServiceItem
					classes="col-lg-3 col-6 "
					provide-service-number="05"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-5.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-5.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 odd"
					provide-service-number="06"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-6.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-6.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 "
					provide-service-number="07"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-7.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-7.subtitle')"
				/>
				<ProvideServiceItem
					classes="col-lg-3 col-6 odd"
					provide-service-number="08"
					:provide-service-title="$t('pages.homepage.services.provide-list.item-8.title')"
					provide-service-src="/images/icons/earth.png"
					:provide-service-subtitle="$t('pages.homepage.services.provide-list.item-8.subtitle')"
				/>
			</div>
		</div> -->
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
// import ProvideServiceItem from '~/components/molecules/Services/ProvideServiceItem.vue';
import ServicesItem from '~/components/molecules/Services/ServiceItem.vue';

type ServicesList = {
	src: string;
	alt?: string;
	text: string;
};
export default defineComponent({
	name: 'Services',
	components: {
		CustomTag,
		ServicesItem,
		// ProvideServiceItem,
	},
	setup() {
		const app = useContext();
		const serviceList = ref<ServicesList[]>([
			{
				src: 'images/icons/icon-advise.png',
				text: app.$i18n('pages.homepage.services.advise.text'),
				alt: app.$i18n('pages.homepage.services.advise.alt'),
			},
			{
				src: 'images/icons/icon-build.png',
				text: app.$i18n('pages.homepage.services.build.text'),
				alt: app.$i18n('pages.homepage.services.build.alt'),
			},
			{
				src: 'images/icons/icon-optimize.png',
				text: app.$i18n('pages.homepage.services.optimize.text'),
				alt: app.$i18n('pages.homepage.services.optimize.alt'),
			},
			{
				src: 'images/icons/icon-run.png',
				text: app.$i18n('pages.homepage.services.run.text'),
				alt: app.$i18n('pages.homepage.services.run.alt'),
			},
		]);
		return {
			serviceList,
		};
	},
});
</script>

<style lang="scss" scoped>
.service-layout {
	padding-top: 3em;
	padding-bottom: 6em;
	padding-right: 1em;
	padding-left: 1em;
}
.title {
	display: inline-block;
	padding: 0 1em;
	font-size: 2em;
	background-color: #000000;
	&::after {
		margin: 1rem auto;
	}
	@media screen and (min-width: 2560px) {
		font-size: 2.5rem;
	}
}
.services {
	margin: 0 auto;
	width: 95%;
	text-align: center;
	position: relative;
	box-sizing: border-box;
	z-index: 0;
	&::before {
		visibility: hidden;
		width: 94%;
		position: absolute;
		content: '';
		top: 20px;
		left: 22px;
		right: 30px;
		bottom: 70px;
		border: 3px solid var(--vivid-orange);
		z-index: -1;
		margin: 0 auto;
		@include breakpoint(md) {
			visibility: visible;
		}

		@media screen and (min-width: 1024px) {
			width: 90%;
			left: 30px;
		}
	}
	.serveices__list {
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@include breakpoint(md) {
			width: 90%;
			grid-template-columns: repeat(4, 1fr);
			position: relative;
			top: -32px;
		}
		@include breakpoint(lg) {
			width: 85%;
			grid-template-columns: repeat(4, 1fr);
			position: relative;
			top: 0;
		}
	}
}
.provide-service {
	&__title {
		font-size: 2em;
		@media screen and (min-width: 1023px) {
			font-size: 2.5em;
			margin-top: 2em;
		}
	}
}
.service-row-2 {
	margin-top: 4em;
}
</style>
