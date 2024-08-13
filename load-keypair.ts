import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(keypair);

// const keypair = Keypair.fromSecretKey(
//   Uint8Array.from([
//     179, 23, 157, 218, 148, 38, 114, 194, 188, 65, 225, 181, 143, 224, 106, 164,
//     150, 168, 161, 115, 193, 166, 204, 179, 131, 213, 92, 205, 114, 84, 39, 53,
//     58, 129, 98, 201, 11, 103, 61, 224, 111, 187, 245, 211, 29, 144, 226, 198,
//     177, 150, 5, 220, 20, 207, 249, 163, 87, 219, 168, 58, 109, 64, 213, 193,
//   ])
// );

// console.log("keypair", keypair.publicKey.toBase58());
