const {emojiSequenceToSeed} = require("../src/index")

test("generate a seed from an emoji sequence", () => {
    const sequence = "👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀"
    const seed = emojiSequenceToSeed(sequence)
    expect(seed).toBe("ea2745387482574d19c4e7981d9e1017a85b4341c8938853f23939f8da6afc16b030463d42074dedca67fbaef8a176a7df30f899addd5ae698b973a7f1e8e75f")
});