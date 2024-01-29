import fs from "fs";

const read = async () => {
  // Write your code here
  const readableStream = fs.createReadStream(
    "src/streams/files/fileToRead.txt"
  );

  readableStream.on("data", function (chunk) {
    process.stdout.write(chunk.toString());
  });
};

await read();
