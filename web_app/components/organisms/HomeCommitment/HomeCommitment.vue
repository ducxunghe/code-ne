<template>
	<div class="home-commitment" data-parallax="scroll" data-image-src="images/backgrounds/bg-home2.jpg">
		<div class="common-container">
			<CustomTag tag-name="h1" classes="home-commitment__title" :tag-text="$t('pages.homepage.commitment.title')" />
			<div class="row">
				<CommitmentItem
					classes="col-md-6 col-12 item-mb left"
					:item-title="$t('pages.homepage.commitment.commitment-list.item-1.title')"
					:item-subtitle="$t('pages.homepage.commitment.commitment-list.item-1.subtitle')"
				/>
				<CommitmentItem
					classes="col-md-6 col-12 item-mb right"
					:item-title="$t('pages.homepage.commitment.commitment-list.item-2.title')"
					:item-subtitle="$t('pages.homepage.commitment.commitment-list.item-2.subtitle')"
				/>
			</div>
			<div class="row commitment-list-2">
				<CommitmentItem
					classes="col-md-6 col-12 item-mb left"
					:item-title="$t('pages.homepage.commitment.commitment-list.item-3.title')"
					:item-subtitle="$t('pages.homepage.commitment.commitment-list.item-3.subtitle')"
				/><CommitmentItem
					classes="col-md-6 col-12 item-mb right"
					:item-title="$t('pages.homepage.commitment.commitment-list.item-4.title')"
					:item-subtitle="$t('pages.homepage.commitment.commitment-list.item-4.subtitle')"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
import CommitmentItem from '~/components/molecules/Commitment/CommitmentItem.vue';

export default defineComponent({
	name: 'HomeCommitment',
	components: {
		CustomTag,
		CommitmentItem,
	},
	props: {},
});
</script>
<style lang="scss" scoped>
.home-commitment {
	// background-image: url('/images/backgrounds/bg-home2.jpg'), linear-gradient(90.36deg, rgba(0, 0, 0, 0.2) 28.21%, rgba(255, 122, 0, 0.166) 104.46%);
	min-height: 400px;
	background: transparent;
	background-size: cover;
	padding: 5em 0;
	text-align: center;
	&__title {
		font-family: var(--font-primary);
		font-size: 2.125em;
		font-weight: 600;
		margin-bottom: 1.5em;
		@media screen and (min-width: 1200px) {
			font-size: 3.125em;
		}
	}
}
.commitment-list-2 {
	@media screen and (min-width: 767px) {
		margin-top: 2em;
	}
}
.item-mb {
	margin-bottom: 1em;
	@media screen and (min-width: 1200px) {
		margin-bottom: 1em;
	}
}
</style>
