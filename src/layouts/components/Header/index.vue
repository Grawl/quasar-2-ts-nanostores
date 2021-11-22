<script lang='ts'>
import { defineComponent } from 'vue'

import Container from 'components/Container.vue'
import Logo from '../Logo.vue'

type Link = {
	href: string
	label: string
	target?: string
}

export default defineComponent({
	name: 'Header',
	components: {
		Container,
		Logo,
	},
	data: () => {
		const links: Link[] = [
			{
				href: 'https://quasar.dev/',
				target: '_blank',
				label: 'Quasar',
			},
			{
				href: 'https://github.com/nanostores',
				target: '_blank',
				label: 'Nano Stores',
			},
		]
		return {
			links,
		}
	},
})
</script>
<template lang='pug'>
.header: Container: .inner
	Logo
	.links
		.divider
		template(v-for='({ label, ...props }, index) in links' :key='label')
			a.link(
				v-html='label'
				v-bind='props'
			)
			.divider(v-if='index < links.length - 1')
</template>
<style lang='sass' scoped>
@import src/css/media
.header
	display: flex
	justify-content: center
	box-shadow: 0 8px 8px hsla(216, 100%, 16%, 0.1)
.inner
	display: flex
	align-items: center
	flex-grow: 1
	padding: 0.625em
	font-size: 0.875em
.divider
	display: block
	align-self: stretch
	width: 1px
	margin-x: 0.75em
	background-color: hsl(0, 0%, 85%)
.links
	display: flex
	align-items: center
	+vw-sm-down
		display: none
.link
	border:
		radius: 0.2em
	padding: 0.65em
	color: hsl(0, 0%, 36%)
	text-decoration: unset
	background-color: hsla(216, 58%, 64%, 0)
	transition: background-color 0.5s
	&:hover
		background-color: hsl(216, 58%, 64%, 0.1)
</style>
