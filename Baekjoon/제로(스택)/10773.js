const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let num = Number(input.shift());
let answer = [];
for (let i = 0; i < num; i++) {
  if (input[i] !== "0") answer.push(input[i]);
  else answer.pop();
}

let test = answer.reduce((acc, cur) => {
  return acc + +cur;
}, 0);
console.log(test);
