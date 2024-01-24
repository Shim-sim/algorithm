// 백준 1940_주몽
// https://www.acmicpc.net/problem/1940

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const arr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let count = 0;
let left = 0;
let right = n - 1;

while (left < right) {
  let sum = arr[left] + arr[right];

  if (sum === m) {
    count++;
    left++;
  } else if (sum < m) {
    left++;
  } else if (sum > m) {
    right--;
  }
}

console.log(count);

// 문제 푸는데 걸린 시간 20분
// 문제 난이도 하중?
// 처음에 정렬을 안하고 문제를 풀었는데 계속 오답이 제출됐다.
// 근데 이 문제는 정렬이 필요 없지않나?
