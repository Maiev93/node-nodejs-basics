import fs from "fs";

const write = async () => {
  // Write your code here
  const writeableStream = fs.createWriteStream(
    "src/streams/files/fileToWrite.txt"
  );

  process.stdin.on("data", (data) => {
    writeableStream.write(data.toString());
  });
};

await write();
