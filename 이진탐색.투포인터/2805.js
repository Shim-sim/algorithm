let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, target] = input.shift().split(" ").map(Number);
const arr = input.shift().split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for (const item of arr) {
    if (item > mid) {
      total += item - mid;
    }
  }

  if (total < target) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);

// 문제푸는데 걸린 시간 15분
// 딱히 어려움은 없었다 근데 height의 값을 언제 바꿔주는지에서 헷갈려서 시간이 조금 걸렸다.
// 우선 total > m 이 되면 나무를 자르는데 필요한 최소값을 만족하기 때문에 height의 값을 바꿔주면 된다.
