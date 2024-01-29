import { Worker } from "worker_threads";
import os from "os";

function initWorker(id) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js", { workerData: id + 10 });
    worker.on("message", (sum) => {
      resolve(sum);
    });
    worker.on("error", () => {
      reject(null);
    });
  });
}

const performCalculations = async () => {
  // Write your code here
  const cpuCount = os.cpus().length; // потоков по числу ядер CPU
  const messagesArray = [];

  for (let i = 0; i < cpuCount; i++) {
    await initWorker(i)
      .then((res) => {
        messagesArray.push({ status: "resolved", data: res });
      })
      .catch((rej) => {
        messagesArray.push({ status: "rejected", data: rej });
      });
  }
  console.log(messagesArray);
};

await performCalculations();
