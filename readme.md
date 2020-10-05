# quantum-random [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/quantum-random/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/quantum-random)

Generate a truly random hexadecimal string. Useful for seeding [pseudorandom number generators](https://en.wikipedia.org/wiki/Pseudorandom_number_generator).

[![NPM Badge](https://nodei.co/npm/quantum-random.png)](https://npmjs.com/package/quantum-random)

## Install

```sh
npm install quantum-random
```

## Usage

```js
const quantumRandom = require("quantum-random")
const Chance = require("chance")

const chance = new Chance(await quantumRandom({ size: 19937 }))
```

## API

### quantumRandom(options?)

Get a randomly generated hexadecimal string. Returns a promise that resolves with a string.

#### options

Type: `object`

##### size

Type: `number`\
Default: `1024`

The amount of hexadecimal characters to generate. If used to seed a [pseudorandom number generator](https://en.wikipedia.org/wiki/Pseudorandom_number_generator), it should ideally [be equal to](https://stackoverflow.com/a/50411024/8384910) the [state length](https://en.wikipedia.org/wiki/State-space_representation) of the algorithm used.
