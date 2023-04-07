const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = Array(n).fill(0);

for (let i = 1; i <= m; i++) {
  let [start, end, change] = input[i].split(" ").map(Number);

  for (start; start <= end; start++) {
    arr[start - 1] = change;
  }
}

console.log(arr.join(" "));

// 앞서 풀었던 기본 배열 문제와 비슷한 유형이었다.
// 우선 값을 교체할 때 새로운 배열을 통해서 바꿔야하나? 아니면 splice메서드를 사용해야하나 헷갈렸다.
// 결론은 시작값과 끝 값을 기준으로 다시 반복문을 돌려서 change로 바꿔주는 간단한 문제였다.
// 문제를 너무 어렵게 접근하지말자ㅜㅜ
