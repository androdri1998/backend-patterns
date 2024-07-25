const axios = require("axios").default;
const url = "http://localhost:8000";

const createJob = async () => {
  const response = await axios.post(`${url}/tasks`);

  console.log("querying data...");

  const id = response.data.id;
  const responseJob = await axios.get(`${url}/tasks/${id}`);
  console.log(id, responseJob.data);
};

(async () => {
  await createJob();

  setTimeout(async () => {
    await createJob();
  }, 1000);
})();
