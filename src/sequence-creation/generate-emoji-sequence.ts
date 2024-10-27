import * as crypto from "crypto";
import emojis from "emoji.json/emoji-compact.json";

const EMOJI_LIST: string[] = emojis

function generateEntropy(bits: number): Buffer {
  return crypto.randomBytes(bits / 8);
}

function entropyToMnemonic(entropy: Buffer): string {
  const entropyBits = Array.from(entropy)
    .map((byte) => byte.toString(2).padStart(8, '0'))
    .join('');

  const checksumBits = crypto.createHash("sha256")
    .update(entropy)
    .digest()
    .toString("hex")
    .slice(0, entropy.length / 4)
    .split('')
    .map((hex) => parseInt(hex, 16).toString(2).padStart(4, '0'))
    .join('');

  const bits = entropyBits + checksumBits;
  const mnemonic: string[] = [];

  for (let i = 0; i < bits.length; i += 11) {
    const idx = parseInt(bits.slice(i, i + 11), 2);
    mnemonic.push(EMOJI_LIST[idx % EMOJI_LIST.length]); 
  }
  return mnemonic.join(" ");
}

export default function generateSequence(bits: number = 32): string {
  const entropy = generateEntropy(bits);
  const mnemonic = entropyToMnemonic(entropy);
  return mnemonic
}