// 백준 11728_배열합치기
// https://www.acmicpc.net/problem/11728

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const answer = [];
for (let i = 0; i < 2; i++) {
  const arr = input[i].split(" ").map(Number);
  answer.push(arr);
}

console.log(
  answer
    .flat()
    .sort((a, b) => a - b)
    .join(" ")
);
