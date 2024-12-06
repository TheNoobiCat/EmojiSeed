import * as crypto from "crypto";

function normalize(str:string) : string {
    return (str || '').normalize('NFKD');
}

/**
 * Converts an emoji sequence mnemonic into a seed string using PBKDF2 with HMAC-SHA512.
 *
 * @param {string} mnemonic - The string consisting of emojis.
 * @param {string} salt - The salt to use for the PBKDF2 function.
 * @returns {string} - The generated seed as a hexadecimal string.
 */
export default function emojiSequenceToSeed(mnemonic: string, salt=""): string {
    const mnemonicBuffer:Uint8Array = Uint8Array.from(Buffer.from(normalize(mnemonic), 'utf8'));
    const Salt:string = "emojiseed"+salt;
    return crypto.pbkdf2Sync(mnemonicBuffer, Salt, 2048, 64, "sha512").toString("hex");
}