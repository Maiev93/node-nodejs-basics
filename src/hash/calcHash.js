import fs from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  // Write your code here fs.readFile("src/hash/files/fileToCalculateHashFor.txt", (err, data) => {
  fs.readFile("src/hash/files/fileToCalculateHashFor.txt", (err, data) => {
    if (err) throw new Error(err.message);

    const hash = createHash("sha256").update(data).digest("hex");
    process.stdout.write(hash + "\n");
  });
};

await calculateHash();
