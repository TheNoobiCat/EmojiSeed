const {emojiSequenceToSeed} = require("../src/index")

test("generate a seed from an emoji sequence", async () => {
    const sequence = "👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀"
    const seed = await emojiSequenceToSeed(sequence)
    expect(seed).toBe("b5b72de6c58a92fa1d654247f866d03e2d4d8d00d2b7a945c9ca5e7c5c857650a70b49dbded9013a2891e98bdc7c75a667142dab037ea318d9dc2b6354e7b3b4")
});