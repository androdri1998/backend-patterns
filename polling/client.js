const axios = require("axios").default;
const url = "http://localhost:8000";

const createJob = async () => {
  const response = await axios.post(`${url}/tasks`);

  const interval = setInterval(async () => {
    console.log("querying data...");

    const id = response.data.id;
    const responseJob = await axios.get(`${url}/tasks/${id}`);
    console.log(id, responseJob.data);

    const percentage = responseJob.data.percentage;
    if (percentage === 100) {
      clearInterval(interval);
    }
  }, 2000);
};

(async () => {
  await createJob();

  setTimeout(async () => {
    await createJob();
  }, 1000);
})();
