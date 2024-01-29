import fs from "fs";

const remove = async () => {
  // Write your code here
  try {
    const filePath = "src/fs/files/fileToRemove.txt";

    if (!fs.existsSync(filePath)) {
      throw new Error("FS operation failed");
    }

    fs.unlink(filePath, function (err) {
      if (err) throw new Error(err);
      console.log("File deleted");
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await remove();
