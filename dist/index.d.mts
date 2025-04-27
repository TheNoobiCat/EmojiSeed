/**
 * Converts an emoji sequence mnemonic into a seed string using Argon2.
 *
 * @param {string} mnemonic - The string consisting of emojis.
 * @param {string} salt - The salt to use for the Argon2 function.
 * @returns {Promise<string>} - The generated seed as a hexadecimal string.
 */
declare function emojiSequenceToSeed(mnemonic: string, salt?: string): Promise<string>;

declare function generateSequence(bits?: number): string;

export { emojiSequenceToSeed, generateSequence };
