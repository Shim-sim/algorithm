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

// N이 500,000 M, 10,000,000이기 때문에 이중 for문은 무조건 시간초과다
// 근데 첨에 생각한 풀이는 항상 ON2 다.
// Map 혹은 Object로 해결할 수 있는데 나는 Map이 더 직관적으로 좋아보인다.
// 이렇게 되면 O(n + m)이 되니까 충분했다.
