const {generateSequence} = require("../src/index")

test("generate a random sequence of emojis", () => {
    const sequence = generateSequence();
    expect(typeof sequence).toBe("string")
});