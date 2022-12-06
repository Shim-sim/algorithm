const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];

for (let i = 1; i < input.length; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    let arr = input[i].split("");
    if (arr[j] === "O") {
      count++;
    } else {
      count = 0;
    }

    sum += count;
  }

  console.log(sum);
}
