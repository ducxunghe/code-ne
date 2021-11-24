<template>
	<footer class="footer">
		<div class="container">
			<a :href="contactInfo.web_url">
				<ImageAtom classes="footer__logo" img-src="images/logos/logo-inotech-footer.png" img-alt="Inotech Footer Logo" />
			</a>
			<FooterNavigation :navigation-list="navigationList" />
			<div class="footer__group">
				<div class="footer__group__info">
					<CustomTag tag-name="h2" :tag-text="$t('common.footer.connection')" />
					<p><ImageAtom img-src="images/icons/icon-phone.svg" img-alt="inotek-phone" />{{ $t('common.footer.phone') }}</p>
					<p>
						<ImageAtom img-src="images/icons/icon-mail.svg" img-alt="inotek-email" />
						{{ $t('common.footer.email') }}
					</p>
					<p><ImageAtom img-src="images/icons/icon-location.svg" img-alt="inotek-address" />{{ $t('common.footer.address') }}</p>
				</div>

				<div class="footer__group__social">
					<a :href="contactInfo.web_url" target="_blank">
						<ImageAtom img-src="images/icons/icon-website.svg" img-alt="website" />
					</a>
					<a :href="contactInfo.twitter_url" target="_blank" class="filter-color">
						<ImageAtom img-src="images/icons/icon-twitter.svg" img-alt="twitter" />
					</a>
					<a :href="contactInfo.linkedin_url" target="_blank" class="filter-color">
						<ImageAtom img-src="images/icons/icon-linkedin.svg" img-alt="linkedin" />
					</a>
					<a :href="contactInfo.facebook_url" target="_blank">
						<ImageAtom img-src="images/icons/icon-facebook.svg" img-alt="facebook" />
					</a>
				</div>
			</div>

			<!-- <div class="footer__copyright">
				<CustomTag tag-name="p" :tag-text="$t('common.copyright.copyright')" />
				<p>
					<Link :link-type="0" :link="routes.term_of_service" :link-text="$t('common.copyright.terms-of-service')" /> |
					<Link :link-type="0" :link="routes.privacy_policy" :link-text="$t('common.copyright.privacy-policy')" />
				</p>
			</div> -->
		</div>
	</footer>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api';
import FooterNavigation from '~/components/molecules/Navigation/FooterNavigation.vue';
import ImageAtom from '~/components/atoms/Image/ImageAtom.vue';
import CustomTag from '~/components/atoms/CustomTag/CustomTag.vue';
// import Link from '~/components/atoms/Link/Link.vue';
import { NavigationListProps } from '~/models/dtos/props.dto';
import { Routes } from '~/constants/routes';
import { Contact } from '~/constants/common.constants';

export default defineComponent({
	name: 'Footer',
	components: {
		FooterNavigation,
		ImageAtom,
		CustomTag,
		// Link,
	},
	setup() {
		const context = useContext();
		const navigationList = ref<NavigationListProps[]>([
			{
				link: Routes.home_page,
				text: context.$i18n('common.navigation.home'),
			},
			{
				link: Routes.we_provide,
				text: context.$i18n('common.navigation.weprovide'),
			},
			{
				link: Routes.contact_page,
				text: context.$i18n('common.navigation.contact'),
			},
		]);
		const contactInfo = Contact;
		const routes = Routes;
		return {
			navigationList,
			contactInfo,
			routes,
		};
	},
});
</script>

<style lang="scss" scoped>
.footer {
	height: 100%;

	.container {
		position: relative;
	}

	// &::before {
	// 	content: '';
	// 	display: block;
	// 	background-color: var(--black);
	// 	width: 100%;
	// 	height: 2px;
	// 	margin-bottom: 2em;
	// }

	&__logo {
		display: flex;
		justify-content: center;
		margin: 0 auto;
	}

	&__group {
		padding: 1em 0.8em;

		&__info {
			margin-bottom: 2em;
			display: flex;
			flex-direction: column;

			h2 {
				line-height: 25px;
				color: var(--vivid-orange);
			}

			p {
				display: flex;
				align-items: flex-start;
				font-weight: 400;

				> img {
					padding-top: 0.5em;
					padding-right: 1em;
				}
			}
		}

		&__social {
			display: flex;
			align-items: center;
			justify-content: center;

			a {
				padding: 1em;
			}
		}
	}

	&__copyright {
		p {
			font-size: 0.875rem;
			font-weight: 300;
			line-height: 20.27px;
			text-align: center;
			color: var(--very-light-gray);
			margin-bottom: 0;

			a {
				color: var(--very-light-gray);

				&:hover,
				&:focus {
					color: var(--vivid-orange);
				}
			}
		}
	}

	// @media screen and (min-width: 768px) {
	// 	&__group {
	// 		&__info {
	// 			margin-left: -1.5em;
	// 		}
	// 	}
	// }

	@media screen and (min-width: 992px) {
		&__logo {
			content: url('/images/logos/logo-inotek-nobackground.png');
			position: absolute;
			top: 33%;
			right: 6%;
		}

		&__group {
			&__info {
				margin-left: 2.8em;

				h2 {
					margin-bottom: 1em;
				}

				p {
					align-items: center;
					font-size: 1.0625rem;
					padding-top: 0.5em;

					&:nth-child(1) {
						order: 3;
					}

					&:nth-child(2) {
						order: 1;
					}

					br {
						display: none;
					}

					> img {
						width: 35px;
						padding-top: 0.2em;
					}
				}
			}

			&__social {
				margin-top: 3em;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		&__logo {
			right: 7%;
		}

		&__group {
			&__info {
				margin-left: 0.2em;
			}

			&__social {
				margin-top: 5em;
			}
		}
	}

	@media screen and (min-width: 1400px) {
		&__logo {
			right: 8%;
		}

		&__group {
			&__info {
				margin-left: 6em;
			}

			&__social {
				margin-top: 0;
			}
		}
	}
}

.filter-color {
	filter: invert(55%) sepia(22%) saturate(6394%) hue-rotate(348deg) brightness(99%) contrast(93%);
}
</style>
