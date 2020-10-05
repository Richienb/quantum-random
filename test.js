const test = require("ava")
const quantumRandom = require(".")

test("main", async t => {
	const randomString = await quantumRandom({ size: 512 })
	t.is(typeof randomString, "string")
	t.is(randomString.length, 512)
})
