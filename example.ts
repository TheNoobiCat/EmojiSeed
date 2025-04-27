import { generateSequence, emojiSequenceToSeed } from "./src/index";

async function main() {
    // const sequence:string = generateSequence(32)
    const seed:string = await emojiSequenceToSeed("👨🏽‍🎓 🧔🏼‍♀ 🙅🏿 😀")
    console.log(seed)
    // console.log(sequence)
}

main()