declare namespace quantumRandom {
	export interface Options {
		/**
		The amount of hexadecimal characters to generate. If used to seed a [pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator), it should ideally [be equal to](https://stackoverflow.com/a/50411024/8384910) the [state length](https://en.wikipedia.org/wiki/State-space_representation) of the algorithm used.

		@default 0
		*/
		size?: number
	}
}

/**
Get a randomly generated hexadecimal string.

@example
```
const quantumRandom = require("quantum-random")
const Chance = require("chance")

const chance = new Chance(await quantumRandom({ size: 19937 }))
```
*/
declare function quantumRandom(options?: quantumRandom.Options): Promise<string>

export = quantumRandom
