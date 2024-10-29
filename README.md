![NPM Version](https://img.shields.io/npm/v/emojiseedjs) ![NPM Downloads](https://img.shields.io/npm/dw/emojiseedjs)
# EmojiSeed
Generate random emoji sequences and seeds.

### Example
Creating a random sequence of emojis
```js
const emojiSequence = generateSequence(256)
// example result: 🚶‍♀️‍➡️ 🤵🏿‍♂️ 🙇🏾‍♂️ 😓 🙎🏽 🫷 🧚🏿‍♀ 🙇🏼‍♂️ 🫵🏻 🧑🏽‍🎄 🙅🏽‍♀️ ✊ 🦸🏻‍♂ 🙍🏿 🤜🏿 🧑🏿‍✈ 🙇🏻‍♂️ 👨🏿‍⚖️ 💁🏿‍♀ 👨 👨🏻‍🦱 🫱🏻‍🫲🏽 😛 👮🏻‍♂️ 👱🏽‍♀️ 🤨 👩🏻‍🏭 😀
```

Getting a seed from the sequence of emojis
```js
const { generateSeed } = require("./dist/index")
const seed = emojiSequenceToSeed("🚶‍♀️‍➡️ 🤵🏿‍♂️ 🙇🏾‍♂️ 😓 🙎🏽 🫷 🧚🏿‍♀ 🙇🏼‍♂️ 🫵🏻 🧑🏽‍🎄 🙅🏽‍♀️ ✊ 🦸🏻‍♂ 🙍🏿 🤜🏿 🧑🏿‍✈ 🙇🏻‍♂️ 👨🏿‍⚖️ 💁🏿‍♀ 👨 👨🏻‍🦱 🫱🏻‍🫲🏽 😛 👮🏻‍♂️ 👱🏽‍♀️ 🤨 👩🏻‍🏭 😀", "saltandpepper")
```

### PRs and Issues Welcome
