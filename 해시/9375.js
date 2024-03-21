// 백준_패션왕 신해빈

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(n);
let cnt = -1;
const arr = Array.from({ length: n }, () => []);

for (let i = 0; i < input.length; i++) {
  if (!Number(input[i])) {
    const [item, type] = input[i].split(" ");
    arr[cnt].push([item, type]);
  } else {
    cnt++;
  }
}

const ans = [];
const solution = (clothes) => {
  const map = new Map();

  for (const [name, type] of clothes) {
    if (map.get(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }

  let result = 1;

  for (const [key, val] of map) {
    result *= val + 1;
  }
  return ans.push(result - 1);
};

for (let i = 0; i < arr.length; i++) {
  solution(arr[i]);
}

console.log(ans.join("\n"));
