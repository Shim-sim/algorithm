const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  let num2 = score.shift();
  let average = score.reduce((acc, cur) => acc + +cur, 0) / num2;
  let count = 0;

  score.forEach((el) => {
    if (+el > average) count++;
  });

  let result = ((count / num2) * 100).toFixed(3);

  console.log(result + "%");
}
