<template lang='pug'>
.c-container
	slot
</template>
<style lang='sass' scoped>
.c-container
	--c-width: 75em
	max-width: var(--c-width)
	width: 100%
	display: flex
</style>
