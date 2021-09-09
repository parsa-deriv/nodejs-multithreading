const { parentPort, workerData } = require("worker_threads");

parentPort.postMessage(calculateFib(workerData.num));

function calculateFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return calculateFib(num - 1) + calculateFib(num - 2);
  }
}
