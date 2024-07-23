const fs = require("node:fs");
const path = require("node:path");

console.log("Init");
const contentBuffer = fs.readFileSync(path.join(process.cwd(), "text.txt"));
console.log(contentBuffer.toString());
console.log("End");

// Output:
// Init
// some text example
// End
