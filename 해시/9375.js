const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const num = Number(n);
let cnt = 0;
const arr = Array.from({ length: num }, () => []);

let index = 0; // input 배열을 순회하기 위한 인덱스
for (let i = 0; i < num; i++) {
  const caseCount = Number(input[index++]); // 각 케이스별 아이템 수
  for (let j = 0; j < caseCount; j++) {
    const [item, type] = input[index++].split(" ");
    arr[i].push([item, type]);
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

// js로 input값을 처리하기에 조금 까다로웠던 문제같다.
