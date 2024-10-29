/**
 * Converts an emoji sequence mnemonic into a seed string using PBKDF2 with HMAC-SHA512.
 *
 * @param {string} mnemonic - The string consisting of emojis.
 * @param {string} salt - The salt to use for the PBKDF2 function.
 * @returns {string} - The generated seed as a hexadecimal string.
 */
declare function emojiSequenceToSeed(mnemonic: string, salt?: string): string;

declare function generateSequence(bits?: number): string;

export { emojiSequenceToSeed, generateSequence };
