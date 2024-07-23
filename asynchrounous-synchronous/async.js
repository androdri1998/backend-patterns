const fs = require("node:fs");
const path = require("node:path");

console.log("Init");
fs.readFile(path.join(process.cwd(), "text.txt"), (err, data) => {
  if (err) {
    console.log(err);
    throw err;
  }

  console.log(data.toString());
});
console.log("End");

// Output:
// Init
// End
// some text example
