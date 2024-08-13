import { Keypair } from "@solana/web3.js";

const keyPair = Keypair.generate();

console.log("Public key:", keyPair.publicKey.toBase58());
console.log("Private key:", keyPair.secretKey.toString());
