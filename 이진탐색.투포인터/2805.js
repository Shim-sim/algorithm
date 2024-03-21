// 백준_나무자르기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let start = 1;
let end = Math.max(...arr);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let total = 0;

  for (const item of arr) {
    if (item > mid) {
      total += item - mid;
    }
  }

  // 자르는 양을 줄이자
  if (total < m) {
    end = mid - 1;
  } else if (total >= m) {
    answer = mid;
    start = mid + 1;
  }
}

console.log(answer);

// 문제푸는데 걸린시간 15분
// 문제를 꼼꼼하게 자세히 읽는 습관을 들이자.
// 결국 이진탐색의 핵심은 원하고자 하는 타겟의 값을 정확하게 찾는 것이다. 숙지하자
