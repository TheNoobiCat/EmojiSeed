var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/seed-generation/generate-seed.ts
import * as crypto from "crypto";
import * as argon2 from "argon2";
function normalize(str) {
  return (str || "").normalize("NFC");
}
function emojiSequenceToSeed(mnemonic, salt = "") {
  return __async(this, null, function* () {
    const mnemonicBuffer = Buffer.from(normalize(mnemonic), "utf8");
    const saltBuffer = crypto.createHash("sha256").update("emojiseed" + salt).digest();
    const hash2 = yield argon2.hash(mnemonicBuffer, {
      type: argon2.argon2id,
      salt: saltBuffer,
      hashLength: 64,
      timeCost: 3,
      // Number of iterations
      memoryCost: 2 ** 16,
      // Memory usage in KiB (e.g., 64 MiB)
      parallelism: 1,
      // Number of threads
      raw: true
    });
    return hash2.toString("hex");
  });
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