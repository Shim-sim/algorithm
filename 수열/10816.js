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

// ---------------------------------------------------------------------

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, number, m, card] = input;
const answer = [];

const newNumber = number.split(" ").map(Number);
let newCard = card.split(" ").map(Number);

// 두 번째 배열에서 각 원소의 개수를 미리 계산
const countMap = {};
for (const item of newNumber) {
  countMap[item] = (countMap[item] || 0) + 1;
}

// 첫 번째 배열을 순회하면서 두 번째 배열과의 일치하는 원소 개수를 찾음
for (const item of newCard) {
  const count = countMap[item] || 0;
  answer.push(count);
}

console.log(answer.join(" "));
