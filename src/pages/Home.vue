<script lang='ts'>
import { defineComponent } from 'vue'

import { mapStores, useVModel } from '@nanostores/vue'

import Container from 'components/Container.vue'

import {
	canSubmit,
	data,
	hasResult,
	isEmpty,
	textIsChanged,
	textIsValid,
	clear,
	getValidation,
	validationErrorMessage,
} from './store'

export default defineComponent({
	components: { Container },
	setup() {
		return {
			...mapStores({
				store: data,
				hasResult,
				isEmpty,
				textIsChanged,
				canSubmit,
				textIsValid,
			}),
			text: useVModel(data, 'text'),
			clear,
			getValidation,
			validationErrorMessage,
		}
	},
	methods: {
		submit(): void {
			data.setKey('result', this.text.toUpperCase())
			data.setKey('previousText', this.text)
		},
	},
})
</script>
<template lang='pug'>
Container: .home
	q-form(@submit='submit' @reset='clear')
		div
			q-input.full-width(
				v-model='text'
				type='textarea'
				placeholder='Write 3 words or more to uppercase it'
				:rules=`[value => getValidation(value) || validationErrorMessage]`
				no-error-icon
				outlined
			)
		.q-mt-md
			q-btn(
				type='submit'
				label='Uppercase input'
				:disable='!canSubmit'
				color='primary'
			)
			q-btn.q-ml-xs(
				type='reset'
				label='Reset'
				:disable='isEmpty'
			)
		.q-mt-md(v-if='hasResult')
			p Result:
			div(v-html='store.result')
</template>
<style lang='sass' scoped>
.home
	width: 100%
	padding: 2em
</style>
