// 백준 2559_수열
// https://www.acmicpc.net/problem/2559

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);
let sum = 0;

// 우선 시작점을 잡아준다.
// 0번째 idx부터 k까지
for (let i = 0; i < k; i++) {
  console.log(i);
  sum += data[i];
}

// 시작점이 가장 큰 값이 된다.
let max = sum;

// 다시 K부터 반복문을 실행한다.
for (let i = k; i < n; i++) {
  // 우선 sum에 k번째 값을 더하면 6자리르 더한값이 되고,
  sum += data[i];
  // 가장 앞 index의 값을 빼줘야한다.
  // i = 5..9, k = 5 가 되기때문에 이렇게 계산하면된다.
  sum -= data[i - k];
  // 결과적으로 매 루프마다 max를 계산하면 답을 찾을 수 있다.
  max = Math.max(max, sum);
}

console.log(max);

// 문제풀이 X, 고민한 시간: 25분
// 아무리 생각해도 O(N2)가 아니면 문제를 풀 수 없다고 생각했다.
// 결론은 O(N + M)으로 접근하면 해결할 수 있는 문제였다.
// 문제를 풀 때 O(N2)말고는 해결방법이 떠오르지 않을 때 O(N + M)을 고려해보자.
