let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let target = input.shift().split().map(Number)[0];
const arr = input.shift().split(" ").map(Number);

let start = 0;
let end = arr.length - 1;
let result = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  // 타겟이 작다 미드보다 그러면 mid를 기준으로 더 작은 값이다.
  if (target < arr[mid]) {
    end = mid - 1;
  } else {
    // 타겟이 크다 미드보다 그러면 mid를 기준으로 더 큰 값이다.
    start = mid + 1;
    result = mid;
  }
}

console.log(result);

// 특정 타겟의 index찾기 (이진탐색 기초)
// 20
// 1 10 20 47 59 63 75 88 99
