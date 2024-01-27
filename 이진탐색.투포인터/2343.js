// 백준 2343_기타레슨
// https://www.acmicpc.net/problem/2343

const fs = require("fs");
const fileSync = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(fileSync).toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(Number);
const arr = input[0].split(" ").map(Number);

let start = Math.max(...arr);
let end = arr.reduce((acc, cur) => acc + cur, 0);
let answer = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let cnt = 0;
  let remain = 0;

  for (let i = 0; i < n; i++) {
    if (remain < arr[i]) {
      cnt++;
      remain = mid - arr[i];
    } else {
      remain -= arr[i];
    }
  }

  if (cnt > m) {
    start = mid + 1;
  } else {
    answer = mid;
    end = mid - 1;
  }
}

console.log(answer);
