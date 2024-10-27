import * as crypto from "crypto";

function normalize(str:string) : string {
    return (str || '').normalize('NFKD');
}

export default function emojiSequenceToSeed(mnemonic: string): string {
    const mnemonicBuffer = Uint8Array.from(Buffer.from(normalize(mnemonic), 'utf8'));
    const salt = "emojiseed";
    return crypto.pbkdf2Sync(mnemonicBuffer, salt, 2048, 64, "sha512").toString("hex");
}