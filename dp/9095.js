const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const cases = input[0];

const dp = new Array(cases + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 1; i <= cases; i++) {
  const num = input[i];
  for (let j = 4; j <= num; j++) {
    dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];
  }
  console.log(dp[num]);
}

// 아직까지 바로 점화식을 떠올리는게 쉽지않다,,,
// 많이 풀어보는게 정답인듯
