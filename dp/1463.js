// 백준_1로 만들기
// https://www.acmicpc.net/problem/1463

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString());

// array + 1인 이유는 index때문
const dp = new Array(input + 1).fill(0);

for (let i = 2; i < dp.length; i++) {
  dp[i] = dp[i - 1] + 1; // 1을 뺀 경우 최솟값

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1); //2로 나눴을 경우 최솟값
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 3으로 나눴을 경우 최솟값
  }
}

console.log(dp[input]);

// 매 회차마다 그 최솟값을 구해야함
