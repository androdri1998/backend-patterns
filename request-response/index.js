const express = require("express");

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send({
    message: "hello world",
  });
});

app.listen(8000, () => {
  console.log("listening on port: 8000");
});
