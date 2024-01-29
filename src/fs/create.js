import fs from "fs";

const create = async () => {
  // Write your code here
  try {
    const filePath = "src/fs/files/fresh.txt";

    if (fs.existsSync(filePath)) {
      throw new Error("FS operation failed");
    }

    const content = "I am fresh and young";
    fs.writeFile(filePath, content, function (error) {
      if (error) {
        throw err;
      }
      console.log("File is created successfully.");
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

await create();
