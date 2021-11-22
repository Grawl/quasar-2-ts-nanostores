<template lang='pug'>
.fullscreen.bg-blue.text-white.text-center.q-pa-md.flex.flex-center
	div
		div(style='font-size: 15vh') Not found
		.text-h2(style='opacity:.4') Nothing to see here
		q-btn.q-mt-xl(
			to='/'
			label='Go home'
			color='white'
			text-color='blue'
			unelevated
			no-caps
		)
</template>
