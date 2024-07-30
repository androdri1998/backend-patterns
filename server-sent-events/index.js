const express = require("express");
const app = express();

let index = 0;
const sendText = (res) => {
  res.write("data: " + `new chunk [${index++}]\n\n`);

  setTimeout(() => sendText(res), 1000);
};

app.get("/", (req, res) => {
  res.send({
    message: "hello world",
  });
});

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  sendText(res);
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
