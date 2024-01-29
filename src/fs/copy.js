import fs from "fs";

const copy = async () => {
  // Write your code here
  try {
    const folderSource = "src/fs/files/";
    const folderDestination = "src/fs/files_copy/";

    if (!fs.existsSync(folderSource)) {
      throw new Error("FS operation failed");
    }

    if (fs.existsSync(folderDestination)) {
      throw new Error("FS operation failed");
    }

    fs.cp(folderSource, folderDestination, { recursive: true }, (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log("Copied!");
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await copy();
