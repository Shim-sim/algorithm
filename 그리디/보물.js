const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(fileSync).toString().trim().split("\n");

const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < A.length; i++) {
  let total = A[i] * B[i];
  answer += total;
}

console.log(answer);

// 문제해결하는데 걸린 시간 10분
// 진짜 넌센스 퀴즈 같은 문제.
// 문제에서는 B를 재정렬 하지 말라고 하지만, 재정렬해도 문제가 없을 것 같았다.
// 결과적으로는 문제에서 절대로 사용하지 말라고 한 것이 아니기 때문에 재정렬해도 문제가 없었다.
