const {emojiSequenceToSeed} = require("../src/index")

test("generate a seed from an emoji sequence", () => {
    const sequence = "👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀"
    const seed = emojiSequenceToSeed(sequence)
    expect(seed).toBe("7532ec0476c1bb18080b430a298f60924f1ea34d5ff1947b612d0bc3fcc89434cb6a8902e14ea4f00f679c7b321556db7d8d906996d9f39a122118578cac4383")
});