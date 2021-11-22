import { computed, map } from 'nanostores'

import isEqual from 'lodash/isEqual'

export type Data = {
	text: string
	result: string
	loading: boolean
	previousText: string
}

const emptyText = ''

export const data = map<Data>({
	text: emptyText,
	result: '',
	loading: false,
	previousText: emptyText,
})

const getTextIsChanged = (store: Data): boolean => {
	return store.text !== store.previousText
}
export const getValidation = (value: string): boolean => {
	return value === emptyText || value.trim().split(' ').length >= 3
}
export const getIsEmpty = (store: Data): boolean => isEqual(store.text, emptyText)

export const hasResult = computed(data, store => store.result !== emptyText)
export const isEmpty = computed(data, store => getIsEmpty(store))
export const textIsChanged = computed(data, store => getTextIsChanged(store))
export const canSubmit = computed(data, store => {
	if (getIsEmpty(store)) return false
	return getTextIsChanged(store) && getValidation(store.text)
})
export const textIsValid = computed(data, store => {
	return getValidation(store.text)
})
export const clear = (): void => {
	data.setKey('text', emptyText)
	data.setKey('result', emptyText)
	data.setKey('previousText', emptyText)
}

export const validationErrorMessage = 'Text must be at least 3 words'
