const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let st = input.shift();
let result = [];
for (let i = 0; i < st; i++) {
  let cnt = 0;

  for (let item of input[i]) {
    if (item === "(") cnt++;
    else cnt--;

    if (cnt < 0) break;
  }

  result.push(cnt == 0 ? "YES" : "NO");
}

console.log(result.join("\n"));
