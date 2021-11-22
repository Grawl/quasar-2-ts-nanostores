<template lang='pug'>
mixin logo
	span Quasar App
div: router-link(
	:to=`{ name: 'home' }`
	v-slot='{ href, isExactActive, navigate }'
	custom
)
	span.logo(v-if='isExactActive'): +logo
	a.logo(v-else :href='href' @click='navigate'): +logo
</template>
<style lang='sass' scoped>
.logo
	margin-right: 1em
	@at-root a#{&}
		text-decoration: unset
</style>
