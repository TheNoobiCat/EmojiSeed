import * as crypto from "crypto";
import * as argon2 from "argon2";

function normalize(str: string): string {
    return (str || '').normalize('NFC');
}

/**
 * Converts an emoji sequence mnemonic into a seed string using Argon2.
 *
 * @param {string} mnemonic - The string consisting of emojis.
 * @param {string} salt - The salt to use for the Argon2 function.
 * @returns {Promise<string>} - The generated seed as a hexadecimal string.
 */
export default async function emojiSequenceToSeed(mnemonic: string, salt = ""): Promise<string> {
    const mnemonicBuffer: Buffer = Buffer.from(normalize(mnemonic), 'utf8');
    const saltBuffer: Buffer = crypto.createHash('sha256').update("emojiseed" + salt).digest();

    const hash = await argon2.hash(mnemonicBuffer, {
        type: argon2.argon2id,
        salt: saltBuffer,
        hashLength: 64,
        timeCost: 3, // Number of iterations
        memoryCost: 2 ** 16, // Memory usage in KiB (e.g., 64 MiB)
        parallelism: 1, // Number of threads
        raw: true,
    });

    return hash.toString("hex");
}