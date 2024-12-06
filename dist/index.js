"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  emojiSequenceToSeed: () => emojiSequenceToSeed,
  generateSequence: () => generateSequence
});
module.exports = __toCommonJS(src_exports);

// src/seed-generation/generate-seed.ts
var crypto = __toESM(require("crypto"));
function normalize(str) {
  return (str || "").normalize("NFC");
}
function emojiSequenceToSeed(mnemonic, salt = "") {
  const mnemonicBuffer = Uint8Array.from(Buffer.from(normalize(mnemonic), "utf8"));
  const Salt = crypto.createHash("sha256").update("emojiseed" + salt).digest("hex");
  return crypto.pbkdf2Sync(mnemonicBuffer, Salt, 2048, 64, "sha512").toString("hex");
}

// src/sequence-creation/generate-emoji-sequence.ts
var crypto2 = __toESM(require("crypto"));
var import_emoji_compact = __toESM(require("emoji.json/emoji-compact.json"));
var EMOJI_LIST = import_emoji_compact.default;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  emojiSequenceToSeed,
  generateSequence
});
//# sourceMappingURL=index.js.map