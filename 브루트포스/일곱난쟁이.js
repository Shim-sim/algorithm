const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n").map(Number);

const sum = input.reduce((cur, acc) => {
  return cur + acc;
}, 0);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const item = input[i] + input[j];
    if (sum - item === 100) {
      const temp = input.filter((el) => {
        return el !== input[i] && el !== input[j];
      });
      input = temp;
      break;
    }
  }

  if (input.length === 7) break;
}

console.log(input.sort((a, b) => a - b).join("\n"));
