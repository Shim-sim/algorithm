const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const iter = input.shift();

let ans = [];
let stack = [];

let stackNum = 1;

for (let i = 0; i < iter; i++) {
  let num = input[i];

  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }

  let stackPop = stack.pop();
  ans.push("-");

  if (stackPop !== num) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));
