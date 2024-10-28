// src/seed-generation/generate-seed.ts
import * as crypto from "crypto";
function normalize(str) {
  return (str || "").normalize("NFKD");
}
function emojiSequenceToSeed(mnemonic) {
  const mnemonicBuffer = Uint8Array.from(Buffer.from(normalize(mnemonic), "utf8"));
  const salt = "emojiseed";
  return crypto.pbkdf2Sync(mnemonicBuffer, salt, 2048, 64, "sha512").toString("hex");
}

// src/sequence-creation/generate-emoji-sequence.ts
import * as crypto2 from "crypto";
import emojis from "emoji.json/emoji-compact.json";
var EMOJI_LIST = emojis;
function generateEntropy(bits) {
  return crypto2.randomBytes(bits / 8);
}
function entropyToMnemonic(entropy) {
  const entropyBits = Array.from(entropy).map((byte) => byte.toString(2).padStart(8, "0")).join("");
  const checksumBits = crypto2.createHash("sha256").update(entropy).digest().toString("hex").slice(0, entropy.length / 4).split("").map((hex) => parseInt(hex, 16).toString(2).padStart(4, "0")).join("");
  const bits = entropyBits + checksumBits;
  const mnemonic = [];
  for (let i = 0; i < bits.length; i += 13) {
    const idx = parseInt(bits.slice(i, i + 13), 2);
    mnemonic.push(EMOJI_LIST[idx % EMOJI_LIST.length]);
  }
  return mnemonic.join(" ");
}
function generateSequence(bits = 32) {
  const entropy = generateEntropy(bits);
  const mnemonic = entropyToMnemonic(entropy);
  return mnemonic;
}
export {
  emojiSequenceToSeed,
  generateSequence
};
//# sourceMappingURL=index.mjs.map