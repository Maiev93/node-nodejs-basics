import { createGunzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const decompress = async () => {
  // Write your code here
  const gunzip = createGunzip();
  const source = createReadStream("src/zip/files/archive.gz");
  const compressed = createWriteStream("src/zip/files/fileToCompress.txt");

  //   source.pipe(gunzip).pipe(compressed);
  pipeline(source, gunzip, compressed, (error) => {
    if (error) {
      throw new Error(error);
    }
  });
};

await decompress();
