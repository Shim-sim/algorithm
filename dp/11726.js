// 백준_2xn타일링
// https://www.acmicpc.net/problem/11726
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const n = Number(fs.readFileSync(filePath).toString().trim());

const dp = new Array(n + 1);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);

// 문제 푼 시간 5분
// 프로그래머스의 멀리뛰기 문제와 동일하다.
