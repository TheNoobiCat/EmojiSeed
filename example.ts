import { generateSequence, emojiSequenceToSeed } from "./dist";

const sequence:string = generateSequence(5000)
const seed:string = emojiSequenceToSeed(sequence, "saltandpepper123")
console.log(seed)
console.log(sequence)