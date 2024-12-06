const {emojiSequenceToSeed} = require("../src/index")

test("generate a seed from an emoji sequence", () => {
    const sequence = "👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀"
    const seed = emojiSequenceToSeed(sequence)
    expect(seed).toBe("6e7ec6dd44c7a85b758957d792ccd669dad0aadd26ffa8caed37d273b4d23e25cac6765a77747a1f6a9077b3694962f9658c6ce7c1b9527c464b7954bd352afb")
});