const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();
app.use(express.json());

const tasks = new Map();

const asyncProcess = async (id) => {
  let index = 0;
  const interval = setInterval(() => {
    index = index + 10;
    tasks.set(id, index);

    console.log("POST", id, index);

    if (index === 100) {
      clearInterval(interval);
    }
  }, 2000);
};

app.post("/tasks", (req, res) => {
  const id = uuid();
  asyncProcess(id);

  res.send({
    message: "task created",
    id,
  });
});

app.get("/tasks/:id", (req, res) => {
  const { id: taskId } = req.params;

  const percentage = tasks.get(taskId) || 0;
  console.log("GET", taskId, percentage);

  res.send({
    message: `${percentage}% done!`,
    percentage,
  });
});

app.listen(8000, () => {
  console.log("listening on port: 8000");
});
