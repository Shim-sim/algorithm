const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;
let start = 1;
let end = 1;
let sum = 1;

while (start <= end) {
  if (sum === input[0]) answer++;
  if (sum < input[0]) {
    end++;
    sum += end;
  } else if (sum >= input[0]) {
    sum -= start;
    start++;
  }
}

console.log(answer);
