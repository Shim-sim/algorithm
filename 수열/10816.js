const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);

let map = new Map();
N.forEach((item) => {
  if (map.has(item)) map.set(item, map.get(item) + 1);
  else map.set(item, 1);
});

let answer = [];
M.forEach((item) => answer.push(map.get(item) || 0));

console.log(answer.join(" "));
