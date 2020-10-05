"use strict"

const ky = require("ky-universal")
const roundIntervals = require("round-intervals")

const quantumSeed = async ({ size = 1024 } = {}) => {
	if (!Number.isInteger(size) || size < 1) {
		throw new TypeError("`size` must be a positive integer.")
	}

	const length = roundIntervals.up(size, 1024) / 1024

	const { data, success } = await ky("https://qrng.anu.edu.au/API/jsonI.php", {
		searchParams: {
			type: "hex16",
			length: length > 1024 ? 1024 : length,
			size: length > 1 ? 1024 : size
		}
	}).json()

	if (!success) {
		throw new Error("The API endpoint isn't working.")
	}

	const result = data.join("").slice(0, size)

	return size <= 1048576 ? result : result + await quantumSeed({ size: size - 1048576 })
}

module.exports = quantumSeed
