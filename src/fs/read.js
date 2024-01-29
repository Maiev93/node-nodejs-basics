import fs from "fs";

const read = async () => {
  // Write your code here
  try {
    const filePath = "src/fs/files/fileToRead.txt";

    if (!fs.existsSync(filePath)) {
      throw new Error("FS operation failed");
    }

    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    console.log("\nfileContent: ", `\n${fileContent}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await read();
