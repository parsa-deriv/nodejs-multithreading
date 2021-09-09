const express = require("express");

const app = express();

function calculateFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return calculateFib(num - 1) + calculateFib(num - 2);
  }
}

app.get("/", (req, res) => {
  res.send("Server is up and running ;)");
});

app.get("/calculatefib/:num", (req, res) => {
  const num = req.params.num;
  const result = calculateFib(num);
  res.send(`Calculated Fib with the result of: ${result}`);
});

app.listen(2000, () =>
  console.log("Single thread server is running on port 2000")
);
