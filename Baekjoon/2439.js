const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let star = Number(input);

for (let i = 1; i <= star; i++) {
  console.log(" ".repeat(star - i) + "*".repeat(i));
}
