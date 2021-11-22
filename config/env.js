/* eslint-env node */

const path = require('path')
const dotEnv = require('dotenv-safe')
const isFile = require('is-file')

/**
 * @param {string} [local=.env]
 * @param {string} [example=.env.example]
 *
 * @returns void
 */
const init = (local = '.env', example = '.env.example') => {
	dotEnv.config({
		allowEmptyValues: true,
		debug: process.env.DEBUG || false,
		path: isFile(path.join(process.cwd(), local)) ? local : example,
		example,
	})
}
module.exports = init
