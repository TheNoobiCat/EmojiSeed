const {emojiSequenceToSeed} = require("../src/index")

test("generate a seed from an emoji sequence", () => {
    const sequence = "👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀"
    const seed = emojiSequenceToSeed(sequence)
    expect(seed).toBe("fad8929af1f7855b863f02f99f7ca999b852cf75f3d3aa1e266721c8704664ea5e62d270dc3d66fb6242157a8a7bd3225c8becf82f152bc8cbad73aec6c02baa")
});