import fs from "fs";

const list = async () => {
  // Write your code here
  try {
    const dirName = "src/fs/files";

    if (!fs.existsSync(dirName)) {
      throw new Error("FS operation failed");
    }

    fs.readdir(dirName, (err, files) => {
      if (err) {
        throw new Error(err);
      } else {
        console.log("\nCurrent directory filenames:");
        files.forEach((file) => {
          console.log(file);
        });
      }
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await list();
