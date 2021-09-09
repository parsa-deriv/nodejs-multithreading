const express = require("express");
const { Worker } = require("worker_threads");

const app = express();

const runThread = (num) => {
  return new Promise((resolve, reject) => {
    //Create new worker
    const worker = new Worker("./worker.js", { workerData: { num: num } });

    //Listen for a message from worker
    worker.once("message", resolve);

    worker.on("error", reject);

    worker.on("exit", (exitCode) => {
      console.log(exitCode);
    });
  });
};

app.get("/", (req, res) => {
  res.send("Server is up and running ;)");
});

app.get("/calculatefib/:num", (req, res) => {
  const num = req.params.num;
  runThread(num)
    .then((result) => {
      res.send(`Calculated Fib with the result of: ${result}`);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(2000, () =>
  console.log("Multi thread server is running on port 2000")
);
