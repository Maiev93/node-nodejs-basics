import fs from "fs";

const rename = async () => {
  // Write your code here
  try {
    const fileNameOld = "src/fs/files/wrongFilename.txt";
    const fileNameNew = "src/fs/files/wrongFilename.md";

    if (!fs.existsSync(fileNameOld)) {
      throw new Error("FS operation failed");
    }

    if (fs.existsSync(fileNameNew)) {
      throw new Error("FS operation failed");
    }

    fs.rename(fileNameOld, fileNameNew, function (err) {
      if (err) throw new Error(err);
      console.log("File Renamed.");
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await rename();
