![NPM Version](https://img.shields.io/npm/v/emojiseed) ![NPM Downloads](https://img.shields.io/npm/dw/emojiseed)
# EmojiSeed
Generate random emoji sequences and seeds.

### Example
```js
const emojiSequence = generateSequence(256)
// example result: 🚶‍♀️‍➡️ 🤵🏿‍♂️ 🙇🏾‍♂️ 😓 🙎🏽 🫷 🧚🏿‍♀ 🙇🏼‍♂️ 🫵🏻 🧑🏽‍🎄 🙅🏽‍♀️ ✊ 🦸🏻‍♂ 🙍🏿 🤜🏿 🧑🏿‍✈ 🙇🏻‍♂️ 👨🏿‍⚖️ 💁🏿‍♀ 👨 👨🏻‍🦱 🫱🏻‍🫲🏽 😛 👮🏻‍♂️ 👱🏽‍♀️ 🤨 👩🏻‍🏭 😀
```

```js
const { generateSeed } = require("./dist/index")
const seed = emojiSequenceToSeed("🚶‍♀️‍➡️ 🤵🏿‍♂️ 🙇🏾‍♂️ 😓 🙎🏽 🫷 🧚🏿‍♀ 🙇🏼‍♂️ 🫵🏻 🧑🏽‍🎄 🙅🏽‍♀️ ✊ 🦸🏻‍♂ 🙍🏿 🤜🏿 🧑🏿‍✈ 🙇🏻‍♂️ 👨🏿‍⚖️ 💁🏿‍♀ 👨 👨🏻‍🦱 🫱🏻‍🫲🏽 😛 👮🏻‍♂️ 👱🏽‍♀️ 🤨 👩🏻‍🏭 😀")
// result: aef2bbb4b610dceba6d31b213b358d77492f6bda34a172192ec8e2be65ebd846500c8fe44f7bc6722d9b7f47b9e17d43867cab57efbd3a602382e0a87f6b12fd
```

### PRs and Issues Welcome
