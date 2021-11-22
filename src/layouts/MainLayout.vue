<script lang='ts'>
import { defineComponent } from 'vue'

import Header from './components/Header/index.vue'

export default defineComponent({
	components: {
		Header,
	},
})
</script>
<template lang='pug'>
.layout
	Header
	.page
		router-view/
</template>
<style lang='sass' scoped>
.layout
	display: flex
	flex-flow: column
	height: 100%
.page
	display: flex
	flex-flow: column
	align-items: center
	flex-grow: 1
</style>
